import {appAlgorithmKey} from "../environment";

export default {
    /**
     *
     * @param number
     * @returns {string}
     */
    formatNumber(number) {
        //validate if is a number
        if (isNaN(number)) {
            return number;
        } else {
            //add commas to numbers
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },
    /**
     *
     * @param params
     * @param exemptedKeys
     * @returns {string}
     * @constructor
     */
    URLQueryBuilder(params, exemptedKeys = []) {
        //add except
        if (exemptedKeys.length > 0) {
            exemptedKeys.forEach(key => {
                delete params[key];
            })
        }
        return Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&')

    },
    /**
     *
     * @param fileInput
     * @returns {Promise<unknown>}
     */
    async uploadBase64Image(fileInput) {
        if (fileInput) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.readAsDataURL(fileInput)
                reader.onload = () => resolve(reader.result)
                reader.onerror = (error) => reject(error)
            })
        }
        else {
            // do nothing
        }
    },
    /**
     *
     * @param phoneNumber
     * @returns {*}
     */
    hidePhoneNumberDigits(phoneNumber) {
        if (phoneNumber) {
            return phoneNumber.replace(/.(?=.{4})/g, '*');
        }
    },
    dateAgo(value) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            const intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago'; // singular (1 day ago)
                    } else {
                        return counter + ' ' + i + 's ago'; // plural (2 days ago)
                    }
            }
        }
        return value;
    }
}