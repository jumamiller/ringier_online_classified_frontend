import {appAlgorithmKey} from "../environment";

export default {
    /**
     *
     * @param number
     * @returns {string}
     */
    formatNumber(number) {
        //add commas to numbers
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
     * @param value
     * @returns {string}
     */
    encypt(value) {
        return btoa(appAlgorithmKey+value)
    },
    /**
     *
     * @param value
     * @returns {null|string}
     */
    decrypt(value) {
        if (value && value.length>0) {
            const code=atob(value);
            return code.split("/").pop();
        } else{
            return null
        }
    }
}