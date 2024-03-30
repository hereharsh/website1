
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    smoothMobile: true,
    mobile: {
      smooth: true,
      inertia: 0.8,
      getDirection: true,
      breakpoint:0,
    },
});



var surf=document.querySelector("#page1");
var cur=document.querySelector("#cursor")

surf.addEventListener("mousemove",function(dets){
    gsap.to(cur,{
        x:dets.x,
        y:dets.y
    })
})

surf.addEventListener("mouseenter",function(){
    gsap.to(cur,{
      scale:1,
      opacity:1
    })
  })
  
surf.addEventListener("mouseleave",function(){
    gsap.to(cur,{
      scale:0,
      opacity:0
    })
  })

    // CURSOR2

var surf2=document.querySelector("#page5");
var cur2=document.querySelector("#cursor2")

surf2.addEventListener("mousemove",function(dets){
    gsap.to(cur2,{
        x:dets.x,
        y:dets.y
    })
})

surf2.addEventListener("mouseenter",function(){
  gsap.to(cur2,{
    scale:1,
    opacity:1
  })
})

surf2.addEventListener("mouseleave",function(){
  gsap.to(cur2,{
    scale:0,
    opacity:0
  })
})

    // CURSOR3

    var surf3=document.querySelector("#page6");
    var cur3=document.querySelector("#cursor3")
    
    surf3.addEventListener("mousemove",function(dets){
        gsap.to(cur3,{
            x:dets.x,
            y:dets.y
        })
    })
    
    surf3.addEventListener("mouseenter",function(){
      gsap.to(cur3,{
        scale:1,
        opacity:1
      })
    })
    
    surf3.addEventListener("mouseleave",function(){
      gsap.to(cur3,{
        scale:0,
        opacity:0
      })
    })

        // CURSOR4

        var surf4=document.querySelector("#page7");
        var cur4=document.querySelector("#cursor4")
        
        surf4.addEventListener("mousemove",function(dets){
            gsap.to(cur4,{
                x:dets.x,
                y:dets.y
            })
        })
        
        surf4.addEventListener("mouseenter",function(){
          gsap.to(cur4,{
            scale:1,
            opacity:1
          })
        })
        
        surf4.addEventListener("mouseleave",function(){
          gsap.to(cur4,{
            scale:0,
            opacity:0
          })
        })

                // CURSOR5

  var surf11=document.querySelector("#page11");
  var cur5=document.querySelector("#cursor5")
  
  surf11.addEventListener("mousemove",function(dets){
      gsap.to(cur5,{
          x:dets.x,
          y:dets.y
      })
  })
  
  surf11.addEventListener("mouseenter",function(){
    gsap.to(cur5,{
      scale:1,
      opacity:1
    })
  })
  
  surf11.addEventListener("mouseleave",function(){
    gsap.to(cur5,{
      scale:0,
      opacity:0
    })
  })

  Shery.imageEffect("#left5 img,#left6 img,#left7 img", {
    style: 5,
    config:{"a":{"value":0.92,"range":[0,30]},"b":{"value":0.88,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.5711632329889038},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.06,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });


  //  LOADER JS

var he=document.querySelector("#loader h1")
var grow=0;
setInterval(function(){
  if(grow<100)
  {
  grow++
  he.innerHTML=grow;
  }
  else
  {
    he.innerHTML=100;
  }
},45)

// gsap.to("#loader",{
//   duration:1,
//   opacity:0,
// })
gsap.to("#loader",{
  duration:4.5,
  opacity:0,
  display:"none"
})