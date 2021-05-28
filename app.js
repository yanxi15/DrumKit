//alert('테스트')

//var btn1 = document.querySelector('button');
//7개의 버튼들을 배열로 변수 저장
var btns=document.querySelectorAll('.drum');

//btn1.addEventListener('click', btnClick);
//반복문을 사용해 모든 버튼에 이벤트 연결
for(var i=0; i<btns.length; i++){
    btns[i].addEventListener('click',btnClick);
}
//현재 화면 (index.html)document에 키보드 이벤트 추가
document.addEventListener('keypress', keyClick);

//키보드이벤트에 이벤트객체(매개변수)의 key값으로 어떤키인지 확인
function keyClick(event){
    //console.log(event.key);
    drumPlay(event.key)
 
}

function btnClick(){
   
    //console.log(this.texContent);
    drumPlay(this.texContent)
}

function drumPlay(key){
    switch(key){
        case 'w' :    
             var audio = new Audio('sounds/tom-1.mp3');
             break;
        case 'a' :    
            var audio = new Audio('sounds/tom-2.mp3');
             break;                        
        case 's' :    
             var audio = new Audio('sounds/tom-3.mp3');
             break; 
        case 'd' :    
             var audio = new Audio('sounds/tom-4.mp3');
             break; 
        case 'j' :    
             var audio = new Audio('sounds/snare.mp3');
             break; 
        case 'k' :    
             var audio = new Audio('sounds/crash.mp3');
             break; 
        case 'l' :    
             var audio = new Audio('sounds/kick.mp3');
             break; 
        default:
             reaturn;     
  }     
  audio.play();
  animationDrum(key)
}

function animationDrum(key){
    //키값이 w a s 값의 버튼을 클래스 w a s로 선택
    var el = document.querySelector('.'+key);
    el.classList.add('pressed');
    //일정 시간 이후에 다시 클래스 pressed 를 제거한다.
    setTimeout(function(){
        el.classList.remove('pressed')
    },100);

}