export default {
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
    }
}