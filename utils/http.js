import {config} from "../config/config";

class Http {
    request(url, data, method = 'GET')
    {
        wx.request({
            url: url,
            method: method,
            data: data,
            header: {
                appkey: config.appkey
            },
            success: (res) => {
                callback(res.data);
            }
    }
}