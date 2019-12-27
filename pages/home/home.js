// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      '../images/home4.jpg',
      '../images/home5.jpg',
      '../images/home6.jpg'
    ],
    indicatorDots:false,
    autoplay:true,
    interval:5000,
    duration:1000,
    swiperCurrent:0
  },
  swiperChange:function(e){
    this.setData({
      swiperCurrent:e.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
   * 轮播图点击跳转
   */
  click_swiper: function(e) {
    console.log(e)
    var current = e.currentTarget.dataset.current
    if(current == 0) {
      wx.navigateTo({
        url: '../doctor/doctor1/doctor1',
      })
    }
    if(current == 1) {
      wx.navigateTo({
        url: '../home/home5/home5',
      })
    } 
    if (current == 2) {
      wx.navigateTo({
        url: '../home/home5/home5',
      })
    } 
  }
})