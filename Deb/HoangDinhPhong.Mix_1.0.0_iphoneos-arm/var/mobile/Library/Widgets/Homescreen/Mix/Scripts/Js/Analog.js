function TTP() {
const deg = 6;
const hr = document.querySelector('.Hour');
const mn = document.querySelector('.Min');
const sc = document.querySelector('.Sec');

setInterval(() => {
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;
hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;});
}

const one = document.querySelector('.OneNum');
one.textContent = '1';
const seven = document.querySelector('.SevenNum');
seven.textContent = '7';

const two = document.querySelector('.TwoNum');
two.textContent = '2';
const eight = document.querySelector('.EightNum');
eight.textContent = '8';

const three = document.querySelector('.ThreeNum');
three.textContent = '3';
const nine = document.querySelector('.NineNum');
nine.textContent = '9';

const four = document.querySelector('.FourNum');
four.textContent = '4';
const ten = document.querySelector('.TenNum');
ten.textContent = '10';

const five = document.querySelector('.FiveNum');
five.textContent = '5';
const eleven = document.querySelector('.ElevenNum');
eleven.textContent = '11';

const six = document.querySelector('.SixNum');
six.textContent = '6';
const twelve = document.querySelector('.TwelveNum');
twelve.textContent = '12';