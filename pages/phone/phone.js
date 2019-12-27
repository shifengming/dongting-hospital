// pages/phone/phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: '../../images/logo.jpg',
      id: 0,
      latitude: 34.780254,
      longitude: 113.699559,
      width: 30,
      height: 30,
      callout: {
        content: "",
        color: "#2c8df6",
        fontSize: 20,
        borderRadius: 10,
        bgColor: "#fff",
        display: "ALWAYS",
        boxShadow: "2px 2px 10px #aaa"
      },
      label: {
        color: "#000",
        fontSize: 12,
        content: "为标记点旁边增加标签",
        x: 34.780439,
        y: 113.699774
      }
    }],
    polyline: [{
      points: [{
        latitude: 34.780254,
        longitude: 113.699559

      }, {
        longitude: 113.701855,
        latitude: 34.779778
      }],
      color: "#ff6600",
      width: 2,
      dottedLine: false,
      arrowLine: true,
      borderColor: "#000",
      borderWidth: 5
    }],
    controls: [{
      id: 1,
      iconPath: '../../images/icon_cate.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'https://douban.uieee.com/v2/book/1220562',
    //   header: {
    //     'content-type': 'application/text'
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //   },
    //   fail: function () {
    //     console.log('fail')
    //   }
    // })
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

  }
})