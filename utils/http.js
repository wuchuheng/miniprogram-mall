import {config} from "../config/config";

class Http {
    static request({url, data, callback, method = 'GET'})
    {
        wx.request({
            url: `${config.apiBaseUrl}${url}`,
            method: method,
            data: data,
            header: {
                appkey: config.appkey
            },
            success: (res) => {
                callback(res.data);
            }
        });
    }
}

export {
    Http
}