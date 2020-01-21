// 主题处理业务

import {Http} from "../utils/http";

class Theme
{
    /**
     * 首页位置A的主题数据
     * @param callback
     */
    static async getHomeLocationA() {
        return await Http.request({
            url: `theme/by/names`,
            data: {names: 't-1'},
            method: 'GET',
        });
    }
}
export {
    Theme
}