function ChangeBg(){
    var scrollValue = window.scrollY;
    var myNavber = document.getElementById('myNavber');
    console.log(scrollValue);

    if (scrollValue < 500) {
        myNavber.classList.add('bgColor');  
    } 
    else{
       
        myNavber.classList.remove('bgColor');
    }
    
}
window.addEventListener('scroll', ChangeBg);

/* let section =document.querySelector(".one");
let spans = document.querySelector(".skills div");
window.onscroll = function () {
    if (window.screenY >= section.offsetTop + 200) {
        console.log(("reachion"));
        spans.forEach((div) => {
            div.style.width = div.dataset.width;
        })
        
    }
} */
var num1 = document.getElementById('count1');
var num2 = document.getElementById('count2');
var num3 = document.getElementById('count3');
var num4 = document.getElementById('count4');

function animatedCounter(element , start ,end ,duration){
    var range = end - start;
    var current = start;
    var increment = 0;
    if (end > start) {
        increment = 1;
    }
    else{
        increment = -1;
    }

    var timer = setInterval(function ( ){
        current += increment;
        element.textContent = current ;

        if (current == end) {
            clearInterval(timer);
        }
    }, duration);
}

animatedCounter(num1 , 50 , 850 , 10 );
animatedCounter(num2 , 1 , 230 , 40 );
animatedCounter(num3 , 8220 , 9450 , 1 );
animatedCounter(num4 , 1 , 750 , 10);