const shadowbox = document.querySelectorAll('#shadow-box');

//mouseenter : 마우스가 특정 구역에 포커싱될 떄
//mouseleave : 마우스가 특정 구역에서 포커스를 벗어 났을 떄

function shadowRaise(){
    this.classList.add('shadow-lg');
    this.classList.add('bg-light');
}

function shadowDown(){
    this.classList.remove('shadow-lg');
    this.classList.remove('bg-light');
}

shadowbox.forEach(box => box.addEventListener('mouseenter',shadowRaise) );
shadowbox.forEach(box => box.addEventListener('mouseleave',shadowDown)  );
new WOW().init();