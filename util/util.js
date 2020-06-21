function checkLogin(callback){
  
  wx.getSetting({
    success:(res)=>{
      if (res.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称
        callback()
        wx.getUserInfo({
          success: (res)=> {
            
            const user = res.userInfo
            console.log(user)
          }
        })
      }
    }
  })
}

export{checkLogin}