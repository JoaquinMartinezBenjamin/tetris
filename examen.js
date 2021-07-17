window.onload =pagina
 
 function pagina() {
hacerTablero();
pintar_aleatorio();
//origen();
click();
var x=0;
var mov=0;
 

function hacerTablero(){

for (var i=0; i<16; i++){
	var nuevoElemento=document.createElement('div');
	nuevoElemento.id = "div"+ (i+ 1);
	

	nuevoElemento.innerHTML="";
	var lista=document.getElementById("mi_div");
	lista.appendChild(nuevoElemento);

}}

function pintar_aleatorio(){
var r =Math.floor((Math.random() *4) + 1);
  
    if (r==1){

	 document.getElementById("div2").style.backgroundColor="red";
	 document.getElementById("div2").style.borderColor = "red"
	 
	 document.getElementById("div6").style.backgroundColor="red";
	 document.getElementById("div6").style.borderColor="red"

	 document.getElementById("div10").style.backgroundColor="red";
     document.getElementById("div14").style.backgroundColor="red";

}   if (r==2){
	 document.getElementById("div9").style.backgroundColor="black";
	 document.getElementById("div10").style.backgroundColor="black";
	 document.getElementById("div7").style.backgroundColor="black";
     document.getElementById("div8").style.backgroundColor="black";
}
if (r==3){
	 document.getElementById("div5").style.backgroundColor="black";
	 document.getElementById("div6").style.backgroundColor="black";
	 document.getElementById("div7").style.backgroundColor="black";
     document.getElementById("div10").style.backgroundColor="black";
}

if (r==4){
	 document.getElementById("div6").style.backgroundColor="black";
	 document.getElementById("div7").style.backgroundColor="black";
	 document.getElementById("div10").style.backgroundColor="black";
     document.getElementById("div11").style.backgroundColor="black";
}




console.log(r);

}

function origen(){
var mi_div=document.getElementById('mi_div');

//var t =Math.floor((Math.random() * 500) + 100);
//var r =Math.floor((Math.random() * 1200) + 100);


mov++;

mi_div.style.top=100+'px';
mi_div.style.right=100+'px';

console.log(mov);

}

function mover_izquierda(){
var mi_div=document.getElementById('mi_div');

//var t =Math.floor((Math.random() * 500) + 100);
//var r =Math.floor((Math.random() * 1200) + 100);


mov=mov+10;

mi_div.style.top=100+'px';
mi_div.style.right=mov+'px';

//console.log(mov);

}

function mover_derecha(){
var mi_div=document.getElementById('mi_div');

mov=mov-10;

mi_div.style.top=100+'px';
mi_div.style.right=mov+'px';




}
function click(){
document.getElementById('izquierda').onclick=function(){mover_izquierda()};;
document.getElementById('derecha').onclick=function(){mover_derecha()};;

}
}

