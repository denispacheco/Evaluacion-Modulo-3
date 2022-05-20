//querySelector y QuerySelectorAll
//document: es un objeto donde se carga el archivo html completo
//podemos obtener elemento mediante:
//etiqueta
//id:#
//clase:.
console.log(document);
var t1= document.querySelector("#titulo");
console.log(t1);
var t2=document.querySelector("h1");
console.log(t2);

//cargar un div
/*var div=document.querySelector("div");
var img=document.querySelector("img");
var p = document.querySelector("#parrafo1");
var a = document.querySelector(".estilo1");*/
//--------------------------------------------------
//innerText: cambia el texto interno de una etiqueta <>este texto</>
t1.innerText = "Título cambiado";
//canbiar el texto del primer parrafo, query selector siempre carga el primer elemento que encuentra
var p1 = document.querySelector("p");
p1.innerText="parrafo 1 cambiado";
//cambiar el color de fondo:
//p1.style="background-color:red"; //no es recomdable
//asignar una clase css
//p1.className="fondoRojo"; //cambia la clase asignada
p1.classList.add("fondoRojo") //agrega una clase

//cargar el link desde html
var a1=document.querySelector("a");
//cambiar el texto
a1.innerText="ir a EMOL";
//cambiar el link (atributo href)
a1.setAttribute("href","https://www.emol.com/");
//cambiar imagen
var img1 = document.querySelector("img")
//cambiar foto ()
img1.setAttribute("src","http://cdn2.dineroenimagen.com/media/dinero/styles/xlarge/public/images/2019/03/popocatepetl_0.jpg")

/*
para modificar un elemnto HTML (nodo o etiqueta)
1.- se carga mediante el query selector
2.- se usa una funcion op propiedad
innerText
style
classname
classlist.add
setAttribute
*/ 

//eventos-----------------------------------
//se define una función para un evento cualquiera
//click, se usa la función addEVentListener

var t3 =  document.querySelector("#titulo");
//cambiar fondo azul cuando hagamos click
t3.addEventListener("click",function(e){
    t3.className="fondoAzul";
})
//mouseover y mouseout
var p2 =  document.querySelector("p");
//agregar evento para que cambie a fondo azul cuando 
//se pasa el mouse por encima sin hacer click
p2.addEventListener("mouseover",function(e){
    p2.className="fondoAzul";
})

p2.addEventListener("mouseout",function(e){
    p2.className="fondoRojo";
})

var foto=document.querySelector("img");
foto.addEventListener("mouseover",function(e){
    foto.className="sombra";
    p2.className="fondoAzul";
})

foto.addEventListener("mouseout",function(e){
    foto.className="nosombra";
    p2.className="fondoRojo";
})

//queryselectorAll
var parrafos=document.querySelectorAll("p");
console.log(parrafos);
parrafos[1].className="bordeMorado";
parrafos[2].className="sombra";

//cargar todos los elemento li
var lista=document.querySelectorAll("li");
/*lista[0].className="borderMorado";
lista[1].className="borderMorado";
lista[2].className="borderMorado";
lista[3].className="borderMorado";
lista[4].className="borderMorado";
lista[5].className="borderMorado";
lista[6].className="borderMorado";
lista[7].className="borderMorado";
lista[8].className="borderMorado";
lista[9].className="borderMorado";*/


for(i=0;i<lista.length;i++){    
    lista[i].className="bordeMorado"
}

//---------------------------------------------------------
//Math
Math.random() //numero aleatorio entre 0 y 1 

for(i=0;i<100;i++){
    console.log(Math.random());
}

//número entre 0 y 99
for(i=0;i<100;i++){
    console.log(Math.random()*100);
}
//usar Math.floor, quita los decimales, quedan numero enteros entre 0 y 99
for(i=0;i<100;i++){
    console.log(Math.floor(Math.random()*100));
}

//Math.floor(Math.random()*maximo) 
//les entrega numeros en 0 y maximo
//sin inclir el maaximo












