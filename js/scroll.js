// Scroll to Top & Navbar bg-color change
 const scrollTop = document.getElementById('scrolltoTop');
 const primaryNavbar = document.querySelector('#primary-navbar');

 window.onscroll = function(){
     scrollFunction()
 };
//scroll을 20픽셀 만큼 움직이지 않으면 Top버튼을 호버효과 전 그이상 움직이면 호버 버튼이 움직이게 하자. 
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollTop.style.display = 'block';
        primaryNavbar.classList.add('rgba-black-Strong');
        primaryNavbar.classList.remove('rgba-black-light');
    }
    else{
        scrollTop.style.display = 'none';
        primaryNavbar.classList.remove('rgba-black-Strong');
        primaryNavbar.classList.add('rgba-black-light');
    }
 }

 scrollTop.addEventListener('click',() => 
     window.scroll({
        top:0, behavior:'smooth'
     })
 );