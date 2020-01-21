// 主题处理业务


import {config} from "../config/config";

class Theme
{
    /**
     * 首页位置A的主题数据
     * @param callback
     */
    static getHomeLocationA(callback)
    {
        wx.request({
            url: `${ config.apiBaseUrl }theme/by/names`,
            method: 'GET',
            data: {
                names: 't-1'
            },
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
    Theme
}