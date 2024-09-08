//LOCOMOTIVE JS START


function locomotive() {
    
    
    
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();



//LOCOMOTIVE JS END

gsap.to("#scll img", {
    
    transform:"translateX(-250%)",
    scrollTrigger:{
        trigger:"#scll",
        scroller:"#main",
       
        start:"top bottom",
        end:"bottom top",
        scrub:2,
        pin:true
        
    }
})



//SMOOTHSCOLLING CODE START


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


//SMOOTHSCROLLING END



document.querySelectorAll(".section").forEach(function(e){
          ScrollTrigger.create({
              trigger: e,
              start: "top bottom",
              end: "bottom top",
              onEnter: function(){
                  document.body.setAttribute("theme", e.dataset.color);
              },
              onEnterBack: function(){
                  document.body.setAttribute("theme", e.dataset.color);
              },
          })
      })


//MOVING CURSOR CODE START




function circleMouseFollower(){
    gsap.set("#minicircle", { transformOrigin: "50% 50%" });

    window.addEventListener("mousemove", function(dets){
        gsap.to("#minicircle", {
            x: dets.clientX,
            y: dets.clientY,
            
            duration: 0.7, // Transition duration in seconds
            ease: "power2.out" // Choose an ease for the transition
        });
        
        
        
        
    });
}

circleMouseFollower();


//MOVING CURSOR CODE END


 




// playground page gsap effect start

var clutter = "";
var excludeWords = ["independent", "digital", "unique", "find", "many", "new", "visions"];

document.querySelector("#page4 p").textContent.split(" ").forEach(function (dets) {
    // Check if the current word is in the excludeWords array
    var isExcluded = excludeWords.includes(dets.toLowerCase());

    // If the word is excluded, add it without the color change, otherwise, apply the color change
    clutter += isExcluded ? ` ${dets} ` : `<span> ${dets} </span>`;
});

document.querySelector("#page4 p").innerHTML = clutter;

gsap.to('#page4 p span', {
    scrollTrigger: {
        trigger: '#page4 p span',
        start: 'top bottom',
        end: 'bottom top',
        scroller: '#main',
        scrub: 0.5
    },
    stagger: 0.2,
    color: '#fff',
});

// playground page gsap effect end



//image hover effect start


//  BACKUP CODE
//
//document.querySelectorAll(".element").forEach(function(element) {
//    
//    
//    var rotate=0;
//    var diffrot=0;
//    
//    var img = element.querySelector("img");
//
//    element.addEventListener("mousemove", function(event) {
//        var rect = element.getBoundingClientRect();
//        var diffY = event.clientY - rect.top;
//        var diffX = event.clientX - rect.left;
//        
//          diffrot=dets.clientX-rotate;
//      rotate=dets.clientX;
//        
//        gsap.to(element.querySelector("img"),{
//    
//    opacity : 1,
//    ease : Power3,
//    top: diff,
//    left: dets.clientX,
//    rotate:gsap.utils.clamp(-20, 20, diffrot)        
//
//   
//    
//    
//});  
//        
//        
//        
//
//        img.style.top = diffY + "px";
//        img.style.left = diffX + "px";
//        img.style.opacity = 1;
//    });
//
//    element.addEventListener("mouseleave", function() {
//        img.style.opacity = 0;
//    });
//});
//   BACKUP CODE 



document.querySelectorAll(".element").forEach(function(element){
                                              
    var rotate=0;
    var diffrot=0;
                                                                                     
  element.addEventListener("mousemove", function (dets){
     var diff = dets.clientY - element.getBoundingClientRect().top;
      diffrot=dets.clientX-rotate;
      rotate=dets.clientX;

gsap.to(element.querySelector("img"),{
    
    opacity : 1,
    ease : Power3,
    top: diff,
    left: dets.clientX,
    rotate:gsap.utils.clamp(-20, 20, diffrot)        
 
});    
    
});
    
                                                  
                                              
                                           
element.addEventListener("mouseleave", function (dets){
     var diff = dets.clientY - element.getBoundingClientRect().top;
      diffrot=dets.clientX-rotate;
      rotate=dets.clientX;

gsap.to(element.querySelector("img"),{
    
    opacity : 0,
    ease : Power3,
    top: diff,
    left: dets.clientX,
    rotate:gsap.utils.clamp(-20, 20, diffrot)        

   
    
    
});    
    
});
 
});
    

 

//image hover effect end











//HOVER IMAGE CODE START

//var cursor=document.querySelector("#cursor")
//var main=document.querySelector("#main")
//
//
//main.addEventListener("#mousemove", function(dets){
//    cursor.style.left=dets.x + "px"
//    cursor.style.top=dets.y + "px"
//                      
//                      
//                      
//                      
//                      })
//
//
//document.querySelector('#overlay1').addEventListener('mousemove',function(dets){
//    
//    
//
//    
//    
//    
//    document.querySelector(".element img").style.scale=1
//   
//
//    document.querySelector(".element img").style.left=(dets.x -230)+"px"
//    document.querySelector(".element img").style.top=(dets.y -90)+"px"
// 
//    
//})
//
//
//
//
//document.querySelector('#overlay1').addEventListener('mouseout',function(dets){
//    
//    document.querySelector(".element img").style.scale=0
//  
//})


//HOVER IMAGE CODE END


//
//
//
//document.querySelectorAll(".element").forEach(function(element){
//    
//    var rotate=0;
//    var diffrot=0;
//    
//    
//    element.addEventListener("mousemove", function (dets){
//        
//         var diff =dets.clientY -element.getBoundingClientRect().top;
//    diffrot= dets.clientX-rotate;
//    rotate=dets.clientX;
//        gsap to(element.querySelector("img"),{
//            
//            
//            
//            opacity:1,
//            ease:Power1,
//            top:diff,
//            left:dets.clientX,
//            rotate: gsap.utils.clamp(-20, 20,diffrot),
//            
//            
//            
//            
//        });
//        
//    });
//    
//    
    
    
    


   


//H1 ANIMATION PRODUCT DESINGER START


//gsap.from("#page h1",{
//    
//    
//    y:100,
//    opacity:0,
//    delay:0.5,
//    duration:0.8,
//    stagger:0.2
//    
//})
//
//gsap.from("#page .text",{
//    
//    
//    y:30,
//    opacity:0,
//    delay:0.5,
//    duration:0.8,
//    stagger:0.4
//    
//})


//H1 ANIMATION PRODUCT DESINGER END


   





//color change effect START

//
//gsap.from(".aboutanim h1", {
//    y:-10,
//       
//        duration:1.5,
//        ease:Expo.easeInOut,
//           delay:.1,
//       
//    scrollTrigger: {
//        trigger: "#page5",
//        scroller: "#main",
//         start: "top 60% ",
//        end: " top 90%",
//        markers: true,
//        scrub: 2,
//    }
//});

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
         
        start: "top -1%",
        end: "top -111%",
        scrub: 3
    }
})


tl2.to("#page11", {
    backgroundColor: "#000",
})

.to(".aboutanim span", {
    y:0,
       
        duration:1.5,
        ease:Expo.easeInOut,
           delay:30,
        stagger:0.3,
       
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
         start: "20% 80% ",
        end: " 20% 80%",
//        pin:"#page5",
        markers: true,
        scrub: 2,
    }
    
    
    

});

//
//.to(".aboutanim h1", {
//    y:0,
//       
//        duration:1.5,
//        ease:Expo.easeInOut,
//           delay:.1,
//       
//    scrollTrigger: {
//        trigger: "#page5",
//        scroller: "#main",
//         start: "40% 60% ",
//        end: " 43% 50%",
//        pin:"#page5",
//        markers: true,
//        scrub: 2,
//    }
//});






//color change animation end











//h1 HERO SECTION ANIMATION START


function firstPageAnim(){
    
    var tl=gsap.timeline();
    
    tl.from(".online",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut,
        

    })
    
    .to(".boundingelem",{
        y:0,
       
        duration:1.5,
        ease:Expo.easeInOut,
           delay:-1,
        stagger:.2,
        
    
     })
    
    
    
     
    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut,
    
     })
    
    
    
    
}


firstPageAnim();




//h1 HERO SECTION ANIMATION END








//hero video start


//
//document.querySelectorAll(".elem").forEach(function(elem){
//    
//    
//    var rotate=0;
//    var diffrot=0;
//    
//    elem.addEventListener("mousemove", function(dets){
//        var diffX = dets.clientX - elem.getBoundingClientRect().left;
//        var diffY = dets.clientY - elem.getBoundingClientRect().top;
//        
//        diffrot= dets.clientX-rotate;
//        rotate=dets.clientX;
//      
//
//        gsap.to(elem.querySelector("img"), {
//               
//            opacity: 1,
//             scale:1,
//    duration: 0.1, // Animation duration in seconds 
//            transition: 0.1,
//          
//    
//    ease: "power2.out", // Choose an ease for the animation
//            top: diffY - elem.clientHeight / 1,
//            left: diffX - elem.clientWidth / 6,
//            bottom:dets.clientX,
//            rotate:gsap.utils.clamp(-20,20,diffrot),
//        });
//    });
//    
//    
//
//
//    elem.addEventListener("mouseleave", function(){
//        gsap.to(elem.querySelector("img"), {
//             opacity: 0,
//           scale:0,
//            duration: 0.1, // Animation duration in seconds 
//            transition: 0.1,
//        });
//    });
//});
//

//hero video end




//gsap.to(".line h1", {
//  transform: "translateX(calc(-100% - 2vw - 4px))",
//  scrollTrigger: {
//    trigger: ".line h1",
//    scroller: "#main",
//    // markers:true,
//    scrub: 0.7
//  }
//})
//


//gsap.from("#page5 h1", {
//    y: 120, // Use a colon here
//    stagger: 0.2,
//    duration: 1,
//    scrollTrigger: {
//        trigger: "#page5",
//        scroller: "body",
//        start: "top 47%",
//        end: "top 46%",
//        marker: true,
//        scrub: 2,
//    }
//});




// about page gsap effect start

var clutter = "";
var excludeWords = ["independent", "digital", "unique", "creating"];

document.querySelector("#page7 p").textContent.split(" ").forEach(function (dets) {
    // Check if the current word is in the excludeWords array
    var isExcluded = excludeWords.includes(dets.toLowerCase());

    // If the word is excluded, add it without the color change, otherwise, apply the color change
    clutter += isExcluded ? ` ${dets} ` : `<span> ${dets} </span>`;
});

document.querySelector("#page7 p").innerHTML = clutter;

gsap.to('#page7 p span', {
    scrollTrigger: {
        trigger: '#page7 p span',
        start: 'top bottom',
        end: 'bottom top',
        scroller: '#main',
        scrub: 0.5,
         
    },
    stagger: 0.2,
    color: '#fff',
});




// about page gsap effect end


//margue start


//margue end




//main service js commented this code due to bug
//
//var elemC= document.querySelector(".flexbox.services_list")
//var fixed= document.querySelector("#fixed-image")
//
//
//elemC.addEventListener("mouseenter", function(){
//    
//    fixed.style.display="block";
//    
// 
// })
//
//
//
//
//elemC.addEventListener("mouseleave", function(){
//    
//    fixed.style.display="none"
// })
//
//
//var elems=document.querySelectorAll(".flexbox.borderds_line")
//elems.forEach (function(e){
//    
//    e.addEventListener("mouseenter",function(){
//        
//        var image=e.getAttribute("data-image")
//        fixed.style.backgroundImage=`url(${image})`
//        
//        
//    })
//    
//    
//})
//


//main service js end



//tool stack js start




//tool stack js end


//hover image 

document.querySelectorAll(".element").forEach(function(element){
    
    element.addEventListener("mousemove", function (details){
        gsap.to(element.querySelector("img"), {
            
            opacity:1,
            ease: Power1,
            
        });
        
        
    });
    
    
    
});




   // Ensure GSAP and ScrollTrigger are loaded before this script




