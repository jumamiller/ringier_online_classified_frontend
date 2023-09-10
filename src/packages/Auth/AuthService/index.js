import {appName} from "../../../environment/index.js";

class AuthService {
    constructor() {
        this.token = window.localStorage.getItem(appName+"_token");
        this.user = JSON.parse(window.localStorage.getItem(appName+"_user"));
    }
    check() {
        return !!this.token;
    }

    login(token, user) {
        window.localStorage.setItem(appName+"_token", token);
        window.localStorage.setItem(appName+"_user", JSON.stringify(user));
        this.token = token;
        this.user = user;
        //redirect
        setTimeout(() => {
            window.location.href="/"
        },3000)
    }
    logout() {
        window.localStorage.removeItem(appName+"_token");
        window.localStorage.removeItem(appName+"_user");
        window.location.href="/"
    }
    store(key,value) {
        window.localStorage.setItem(appName+key,JSON.stringify(value));
    }
    remove(key) {
        window.localStorage.removeItem(appName+key)
    }
}

export default new AuthService();