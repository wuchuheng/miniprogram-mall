// pages/home/home.js


import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    themeA: null,
    BannerB: null,
    grid: [],
    ActivityD: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.initAllData();
  },

  async initAllData() {
    const themeA= await Theme.getHomeLocationA();
    const bannerB = await Banner.getHomeLocationB();
    const grid = await Category.getHomeLocationC();
    const activityD = await Activity.getHomeLocationD();
    this.setData({
      themeA: themeA[0],
      bannerB: bannerB,
      grid: grid,
      ActivityD: activityD
    });
  },

})