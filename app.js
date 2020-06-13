
App({
    onLaunch:function(){
      if(wx.cloud){
        wx.cloud.init({
          env:'saobang-v83x8',
          traceUser:true
        })
      }
    },
    
    globalData:{
      userInfo: null
    }
})