
//Answer sheet
var sagot = document.getElementById("answer")

// Buttons
var pito = document.getElementById("seven")
var walo = document.getElementById("eight")
var siyam = document.getElementById("nine")
var dagdag = document.getElementById("plus")

var apat = document.getElementById("four")
var lima = document.getElementById("five")
var anim = document.getElementById("six")
var bawas = document.getElementById("minus")

var isa = document.getElementById("one")
var dalawa = document.getElementById("two")
var tatlo = document.getElementById("three")
var taymis = document.getElementById("mult")

var kansela = document.getElementById("cancel")
var bokya = document.getElementById("zero")
var pantay = document.getElementById("equal")
var hati = document.getElementById("divide")


siyam.addEventListener("click", function(i){
	var num = sagot.value;
	var num = num + '9';
	sagot.value = num;;
});

walo.addEventListener("click", function(i){
	var num = sagot.value;
	num = num + '8';
	sagot.value = num;
});

pito.addEventListener("click", function(i){
	sagot.blur();
	var num = sagot.value;
	num = num + '7';
	sagot.value = num;
});

anim.addEventListener("click", function(i){
	var num = sagot.value;
	num = num + '6';
	sagot.value = num;
});

lima.addEventListener("click", function(i){
	var num = sagot.value;
	num = num + '5';
	sagot.value = num;
});

apat.addEventListener("click", function(i){
	var num = sagot.value;
	num = num + '4';
	sagot.value = num;
});

tatlo.addEventListener("click", function(i){
	var num = sagot.value;
	num = num + '3';
	sagot.value = num;
});

dalawa.addEventListener("click", function(i){
	var num = sagot.value;
	num = num + '2';
	sagot.value = num;
});

isa.addEventListener("click", function(i){
	var num = sagot.value;
	num = num + '1';
	sagot.value = num;
});

bokya.addEventListener("click", function(i){
	var num = sagot.value;
	num = num + '0';
	sagot.value = num;
});

//operations
dagdag.addEventListener("click", function(i){
	var num = sagot.value;
	num = num + '+';
	sagot.value = num;
});

bawas.addEventListener("click", function(i){
	var num = sagot.value;
	num = num + '-';
	sagot.value = num;
});

taymis.addEventListener("click", function(i){
	var num = sagot.value;
	num = num + '*';
	sagot.value = num;
});

hati.addEventListener("click", function(i){
	var num = sagot.value;
	num = num + '/';
	sagot.value = num;
});

//perform operations
pantay.addEventListener("click", function(){
	var num = sagot.value;
	num = eval(num);
	sagot.value = num;
});

window.addEventListener('keyup', function() {
  if (event.keyCode === 13) {
	var num = sagot.value;
	num = eval(num);
	sagot.value = num;
  }
});

kansela.addEventListener("click", function(){
	sagot.value = '';
});














// siyam.addEventListener("click", function(i){
	// var num = sagot.value;
	// num = num + '9';
	// sagot.setAttribute('value', num)
	// console.log(num);
// });


