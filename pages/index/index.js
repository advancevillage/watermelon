//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navigate_items_array: {}
  },
  onLoad: function() {
    var self = this;
    wx.request({
      url: 'http://localhost:13147/',
      method: 'GET',
      dataType: 'json',
      success: function (response) {
        let api_data  = response.data;
        let api_error = response.data['error'];
        let api_data_navigate = api_data['data']['navigate'] || {}
        self.setData({ navigate_items_array: api_data_navigate});
      },
      fail: function (response) { console.log(response)},
      complete: function (response) { console.log(response)}
    });
  }
})