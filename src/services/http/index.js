import client from "../client";
export default async function call(requestType, url, data = null) {
    return client[requestType](url, data);
}