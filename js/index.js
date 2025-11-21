//Анимация при скролле
window.onscroll = function showHeader(){
    var header = document.querySelector('header');
    if(window.pageYOffset > 400){
        header.classList.add('fixed');}
    else {
        header.classList.remove('fixed');}}

//Иконка поиска
const icon =document.querySelector('.icon');
const search =document.querySelector('.search');
const clean =document.querySelector('.clean');
icon.onclick = function(){
search.classList.toggle('active');};
clean.onclick=function(){
document.getElementById('mySearch').value = '';}

//Модальное окно регистрации
document.getElementById("open-modal").addEventListener("click", function() {
    document.getElementById("mymodal").classList.add("open")});
document.getElementById("btn-close").addEventListener("click", function() {
    document.getElementById("mymodal").classList.remove("open")});

//Модальное окно корзины
document.getElementById("open-modal_2").addEventListener("click", function() {
    document.getElementById("mymodal_2").classList.add("open_2")});
document.getElementById("btn-close_2").addEventListener("click", function() {
    document.getElementById("mymodal_2").classList.remove("open_2")});

//Всплывающая подсказка
var showingTooltip;

document.onmouseover = function(e) {
var target = e.target;

var tooltip = target.getAttribute('data-tooltip');
if (!tooltip) return;

var tooltipElem = document.createElement('div');
tooltipElem.className = 'tooltip';
tooltipElem.innerHTML = tooltip;
document.body.appendChild(tooltipElem);

var coords = target.getBoundingClientRect();

var left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) * 2;
if (left < 0) left = 0; // не вылезать за левую границу окна

var top = coords.top - tooltipElem.offsetHeight + 150;
if (top < 0) { // не вылезать за верхнюю границу окна
top = coords.top + target.offsetHeight + 5;}

tooltipElem.style.left = left + 'px';
tooltipElem.style.top = top + 'px';

showingTooltip = tooltipElem;};

document.onmouseout = function(e) {

if (showingTooltip) {
document.body.removeChild(showingTooltip);
showingTooltip = null;}};