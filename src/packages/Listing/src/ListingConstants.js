import Helper from "../../../Utils/Helper.js";

export default {
    PROPERTY_LISTINGS:(payload) => `property/listings?${Helper.URLQueryBuilder(payload)}`,
    CREATE_PROPERTY:`property/listings`,
    COUNTRIES:(payload) => `admin/setting/countries?${Helper.URLQueryBuilder(payload)}`,
    CATEGORIES:(payload)=>`admin/setting/categories?${Helper.URLQueryBuilder(payload)}`,
    SUB_CATEGORIES:(payload)=>`admin/setting/sub-categories?${Helper.URLQueryBuilder(payload)}`,
    CURRENCIES:(payload)=>`admin/setting/currencies?${Helper.URLQueryBuilder(payload)}`,
}