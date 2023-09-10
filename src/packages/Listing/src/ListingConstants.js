import Helper from "../../../Utils/Helper.js";

export default {
    PROPERTY_LISTINGS:(payload) => `property/listings?${Helper.URLQueryBuilder(payload)}`
}