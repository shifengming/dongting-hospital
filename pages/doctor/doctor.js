// pages/doctor/doctor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [
      { title: '汪志明', position: '特聘专家', desc: '骨科，关节镜外科', img: '../images/doctor3.jpg', phone: '15027168387' },
      { title: '胡尚志', position: '特聘专家', desc: '中医内科、骨科、眼科、皮肤科、心脑血管', img: '../images/doctor4.jpg', phone: '15027168387' },
      { title: '刘之信', position: '主任医师', desc: '高血压、糖尿病、冠心病、肾病、胃肠疾病', img: '../images/doctor5.jpg', phone: '15027168387' },
      { title: '何朝义', position: '中医科专家', desc: '中医内科、骨科、男科、妇科、眼科、皮肤科', img: '../images/doctor6.jpg', phone: '15027168387' },
      { title: '胡婕', position: '放射医师', desc: '放射医师', img: '../images/doctor7.jpg', phone: '15027168387' },
      { title: '骆汉化', position: '中医副主任医师', desc: '糖尿病、胃病、皮肤烧痒症', img: '../images/doctor8.jpg', phone: '15027168387' },
      { title: '江惠', position: '超声技师', desc: '腹部脏器超声、心脏超声、盆腔脏器超声', img: '../images/doctor9.jpg', phone: '15027168387' },
      { title: '罗贵', position: '护理', desc: '糖尿病、胃病、皮肤烧痒症', img: '../images/doctor10.jpg', phone: '15027168387' },
      { title: '王安运', position: '中药师', desc: '腹部脏器超声、心脏超声、盆腔脏器超声', img: '../images/doctor11.jpg', phone: '15027168387' },
      { title: '骆汉化', position: '中医副主任医师', desc: '糖尿病、胃病、皮肤烧痒症', img: '../images/doctor12.jpg', phone: '15027168387' },
      { title: '王沈', position: '主管医师', desc: '腹部脏器超声、心脏超声、盆腔脏器超声', img: '../images/doctor13.jpg', phone: '15027168387' },
      { title: '杨龚', position: '内科主任', desc: '糖尿病、胃病、皮肤烧痒症', img: '../images/doctor14.jpg', phone: '15027168387' },
      { title: '杨学波', position: '口腔科主治医师', desc: '腹部脏器超声、心脏超声、盆腔脏器超声', img: '../images/doctor15.jpg', phone: '15027168387' },
      { title: '彭武生', position: '主任医师', desc: '糖尿病、胃病、皮肤烧痒症', img: '../images/doctor16.jpg', phone: '15027168387' },
      { title: '陈茂', position: '妇科主治医生', desc: '腹部脏器超声、心脏超声、盆腔脏器超声', img: '../images/doctor17.jpg', phone: '15027168387' },
    ]
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
  // call:function(e){
  //   wx.makePhoneCall({
  //     phoneNumber:e.currentTarget.dataset.phone,
  //   })
  // }

  /**
   * 点击跳转
   */
  // click_swiper: function (e) {
  //   console.log(e)
  //   var current = e.currentTarget.dataset.current
  //   if (current == 0) {
  //     wx.navigateTo({
  //       url: '../home1/home1',
  //     })
  //   }
  //   if (current == 1) {
  //     wx.navigateTo({
  //       url: '../home2/home2',
  //     })
  //   }
  //   if (current == 2) {
  //     wx.navigateTo({
  //       url: '../home3/home3',
  //     })
  //   } 
})
