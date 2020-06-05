

Page({
  data:{
    image:[
       {
         id:"1",
         src:"https://s1.ax1x.com/2020/06/03/tdvZRI.jpg"
        
      },
      {
        id:"2",
        src:"https://s1.ax1x.com/2020/06/03/tdxpfs.jpg"
      },
      {
        id:"3",
        src:"https://s1.ax1x.com/2020/06/03/tdxQ6x.jpg"
      }
    ],
    booklist:[
        {
          id:"1",
          text:"计算机类"
        
        },
        {
          id:"2",
          text:"科幻类"
        
        },
         {
          id:"3",
          text:"文艺类"
         
        },
        {
          id:"4",
          text:"生活类"
       
        },
        {
          id:"5",
          text:"文学类"
         
        },
        {
          id:"6",
          text:"科研类"
        }
    ]
  },
  serch:function(){

  },
  lunbo:function(e){
    let img = e.currentTarget.dataset.img
    wx.navigateTo({
      url: '../goods/goods?img=' + img
    })
    console.log(img)
  },
  handleTap:function(e){
    let classid = e.currentTarget.dataset.id 
    let classtext =e.currentTarget.dataset.class
    console.log(e)
    console.log(classid)
    wx.navigateTo({
      url: '../classes/classes?class=' + classtext + '&id=' + classid
    })
    console.log(e.currentTarget)
  }
})
