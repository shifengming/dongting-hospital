// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tab切换
    currentTab: 0,
    // tab 切换数据
    arr: ['全部', '医院动态', '健康咨询', '医药知识'],
    // 第二部分高度
    second_height: 0,
    arrNews: [
      { title: '养老院1', desc: '养病散步，圣诞节咖啡', time: '2019-01-12', img: '../images/book6.jpg' },
      { title: '养老院2', desc: '养病散步，圣诞节咖啡', time: '2019-01-12', img: '../images/book2.jpg' },
      { title: '养老院3', desc: '养病散步，圣诞节咖啡', time: '2019-01-12', img: '../images/book3.jpg' },
      { title: '养老院4', desc: '养病散步，圣诞节咖啡', time: '2019-01-12', img: '../images/book4.jpg' },
      { title: '养老院5', desc: '养病散步，圣诞节咖啡', time: '2019-01-12', img: '../images/book5.jpg' }
    ],
    arrNews1: [
      { title: '养老院活动', desc: '养病散步，圣诞节咖啡', time: '2019-01-12', img: '../images/book7.jpg' },
      { title: '生病不可怕', desc: '养病散步，圣诞节咖啡', time: '2019-01-12', img: '../images/book2.jpg' },
      { title: '针灸治疗疾病', desc: '养病散步，圣诞节咖啡', time: '2019-01-12', img: '../images/book4.jpg' },
      { title: '有温度的膳食', desc: '养病散步，圣诞节咖啡', time: '2019-01-12', img: '../images/book3.jpg' },
      { title: '正确泡脚', desc: '泡脚治失眠，泡脚有助于血液循环', time: '2019-01-12', img: '../images/book4.jpg' }
    ],
    arrNews2: [
      { title: '针灸治疗疾病', desc: '养病散步，圣诞节咖啡', time: '2019-01-12', img: '../images/book6.jpg' },
      { title: '东三听社区养老院游园活动', desc: '养病散步，圣诞节咖啡', time: '2019-01-12', img: '../images/book2.jpg' },
      { title: '东山亭社区养老院有温度的膳食', desc: '养病散步，圣诞节咖啡', time: '2019-01-12', img: '../images/book3.jpg' },
      { title: '东三听社区养老院游园活动', desc: '养病散步，圣诞节咖啡', time: '2019-01-12', img: '../images/book4.jpg' },
      { title: '东三听社区养老院游园活动', desc: '养病散步，圣诞节咖啡', time: '2019-01-12', img: '../images/book5.jpg' }
    ],
    arrNews3: [
      { title: '治疗疾病手段', desc: '养病散步，圣诞节咖啡', time: '2019-01-12', img: '../images/book7.jpg' },
      { title: '养老院游园活动', desc: '养病散步，圣诞节咖啡', time: '2019-01-12', img: '../images/book5.jpg' },
      { title: '东三听社区', desc: '养病散步，圣诞节咖啡', time: '2019-01-12', img: '../images/book4.jpg' },
      { title: '养老院游园', desc: '养病散步，圣诞节咖啡', time: '2019-01-12', img: '../images/book3.jpg' },
      { title: '养老院活动', desc: '养病散步，圣诞节咖啡', time: '2019-01-12', img: '../images/book2.jpg' }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this


    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        // 可使用窗口宽度、高度
        console.log('height=' + res.windowHeight);
        console.log('width=' + res.windowWidth);
        // 计算主体部分高度,单位为px
        that.setData({
          // second部分高度 = 利用窗口可使用高度 - first部分高度（这里的高度单位为px，所有利用比例将30rpx转换为px）
          second_height: res.windowHeight - res.windowWidth / 750 * 60
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 滑动
   */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current })
  },
  /**
   * 点击
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({ currentTab: e.target.dataset.current })
    }
  },
  toDetail1: function (e) {
    // console.log(e.currentTarget.dataset.obj)
    let obj = JSON.stringify(e.currentTarget.dataset.obj)
    wx.navigateTo({
      url: '/pages/book/newsdetial1/detial1?obj=' + obj,
      success: function (res) {
        console.log(res)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  toDetail2: function (e) {
    // console.log(e.currentTarget.dataset.obj)
    let obj = JSON.stringify(e.currentTarget.dataset.obj)
    wx.navigateTo({
      url: '/pages/book/newsdetial2/detial2?obj=' + obj,
      success: function (res) {
        console.log(res)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  toDetail3: function (e) {
    // console.log(e.currentTarget.dataset.obj)
    let obj = JSON.stringify(e.currentTarget.dataset.obj)
    wx.navigateTo({
      url: '/pages/book/newsdetial3/detial3?obj=' + obj,
      success: function (res) {
        console.log(res)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  toDetail4: function (e) {
    // console.log(e.currentTarget.dataset.obj)
    let obj = JSON.stringify(e.currentTarget.dataset.obj)
    wx.navigateTo({
      url: '/pages/book/newsdetial4/detial4?obj=' + obj,
      success: function (res) {
        console.log(res)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})