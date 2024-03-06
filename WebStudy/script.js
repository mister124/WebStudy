//ㅇㅇ
/*ㅇㅇ*/
// 팝업창
// window.alert('hello!') -> window. 생략 가능
// window.alert('hello!')
// window.alert('hello!')

// console.log('oo');  
// console.log('xx');
// console.clear()
// console.log('xx');

// let b;
// b=1;
// let a=1;
// a=2;
// a=3;

// console.log(21)
// console.log(3.14)
// console.log()
// console.log('a sd')

// const a=prompt("다이얼로그 박스 내용");

// const str1 = '문자'
// const str3 = `백틱 ${str1}`
// const str4 = `백틱 ${prompt('문자열')}`

// console.log(str3)
// console.log(str4)

// let num=3+3;

// let number = nullsh
// let number2
// console.log(number2) -> undefined
// let value = true
// value = false

// DOM: tree 형태, Js의 작용 받음

// document.querySelector('p')
// 선택자(유효한 CSS 선택자)를 인자로 받아 일치하는 문서 내 첫번재 요소 반환, 없으면 null
// document.getElementById('text')
// id를 인자로 받아 일치하는 문서 내 요소 반환, 없으면 null
// const p = document.querySelector('p')
// console.log(p.textContent)
// p.textContent = 'text change'

// 비교 연산자
// < <= > >= == === != !==

// 조건문
// if(1==2){console.log(1)}else{console.log(2)}

// 반복문
// while(1==1){실행문}
// for(let i = 1; i <= 3; i += 1){console.log(i)}

// confirm('경고창(취소(flase 반환), 확인(true 반환)')

// // 함수
// // 미니..?
// let work = console.log('!')
// work
// // 함수 표현식: 호출문을 앞에서 사용 불가능
// const f2 = function(){console.log('?')}
// f2()
// // 함수 선언식: 호출문을 앞에서 사용 가능(호이스팅 가능)
// function f1(){}
// function getThree(){return 3} // return 데이터 1개 반환 후 함수 종료
// function sayFood(food1, food2){
//     console.log(food1)
//     console.log(food2)
// }

// event
// event handler registre: 이벤트 발생 시 호출될 함수 정의
// return, 함수호출문 -> () 금지
// const button = document.querySelector('button')
// const handleClick = function(){
//     alert('환영합니다^^')
// }
// button.onclick = handleClick

// // addEventListener: 현대적 방법
// // 클릭 이벤트 발생 시 함수 호출
// target.addEventListener('click',function(){})
// // 클릭 이벤트 발새 시 함수 호출 및 자동으로 전달되는 이벤트 객체를 매개변수 event에 대입
// target.addEventListener('click',function(event){})
// removeEventListener 도 가능
// event.target: 이벤트가 발생한 target

// // 요소 추가(아직 렌더링 x)
// document.createElement('div')
// // DOM 내 개별 요소에 자식 요소 추가
// target.appendChild(자식추가요소)
// // append, appendChild 차이: 자식 노드 미반환, 반환, 문자열 요소 추가 가능, 불가능
// const button = document.getElementById("push")
// const div = document.getElementById("area")
// button.addEventListener('click', function(){
//     console.log('div 생성 중!')
//     const newDiv = document.createElement('div')
//     newDiv.style.backgroundColor = "red"
//     newDiv.style.width = "200px"
//     newDiv.style.height = "200px"
//     div.appendChild(newDiv)
// })

// // 입력값 처리(읽기, 쓰기)
// console.log(target.value)
// target.value = '변경값'
// // form에서 submit event 발생, form은 action에 지정한 url로 입력값 제출, action이 없을 땐 새로고침 됨 -> 이벤트 객체
// const form = document.querySelector('form')
// form.addEventListener('submit', function(e){
//     e.preventDefault() // action에 url 지정 시 불필요
//     console.log(form.name.value)
//     console.log(form.town.value)
// })

// 삼항 연산: 보통 if문의 단축 형태
// 조건식 ? 참_반환결과 : 거짓_반환결과
// 3>2 ? "참" : "거짓"

// // timer
// // 지정 시간 지나면 함수 실행
// setTimeout(실행함수, ms_단위시간)
// // 일정 시간 간격마다 함수 실행, timer ID로 0이 아닌 숫자 반환
// setInterval(실행함수, ms_단위시간)
// // timer ID를 통해 timer 반복 실행 취소
// let timer;
// timer = setInterval(function(){
//     console.log('ㅇㅇ')
// },500)
// clearInterval(timer)

// // classList
// // 웹 요소로부터 class collection 반환하는 읽기 전용 속성
// // 반환된 class collection은 유용한 메소드 다수 포함
// // add, remove, item, toggle: 있으면 제거, 없으면 만듬, contains, etc
// const p = document.querySelector('p')
// console.log(p.classList)

// // localStorage
// // localStorage 속성은 현재 도메인의 로컬 저장소에 접근할 수 있게 해줌
// // 로컬 저장소는 웹브라우저에서 각 도메인에 대해 할당해주는 저장 공간으로 데이터 영구적 보관: 새로고침, 브라우저 종료 상관 x
// // 데이터 보관 시 key, value로 지정, dataType: 문자열
// // 메소드
// // setItem: key, value 저장, getItem: key에 따른 value return, removeItem: key에 따른 value remove, clear: 모든 데이터 삭제
// localStorage.setItem("myName", 'Mr124')
