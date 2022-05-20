//variables: espacio de memoria donde se guarda un dato.

var v3="var"; //global
let v1="var2"; //local (dentro de { } solo existe ahí)
const v2="a"; //no permite cambios

//tipos de varibles básicos
var num=123; //numeros
var texto="asdsad"; //texto
var booleanos=true; //verdadero o falso

//estructuras
//arreglos
var arreglos=[5,3,6,7,8]; //conjunto de elementos guardados en orden (tienen índice)
var arreglos=["hola","que tal",6,true,v1]; //puede contener cualquier cosa (numeros, texto, bvooleanos,variables, funciones, objetos, etc..)

//objetos (2 tipos de objetos)
//1.- objetos sencillos, se crean con llaves {}
//SIMEPRE son un par "nombre de la propiedad":"valor", separados por ":".
var obj1={ 
    nombre:"denis",
    edad:43,
    mostrarDatos: function(){
        console.log("hola soy" + this.nombre);
    }
}
//2.- objetos a partir de clases
//definicion de la clase
class Persona{
    constructor(nombre, edad){
        this.nombre=nombre,
        this.edad=edad      
    }
    mostrarDatos=function(){
        console.log("hola soy" + this.nombre);
    }
}

//crear un objeto (a partir de  clase persona)
var p1  = new Persona("denis",43,"435345-345435");
var p7  = new Persona("denis",43);
var p2  = new Persona("alexis",43);
var p3  = new Persona("sandra",43);
var p4  = new Persona("alejandro",43);
var p5  = new Persona("bruno",43);
var p6  = new Persona("paula",43);

//acceder a los valores o propiedades de un objeto
//1.- con punto
p1.nombre;  //denis
p1.edad     //43
//2.- con corchetes
p1["nombre"] //denis
p1["edad"]   //43

console.log(p1.nombre);
console.log(p2.edad);
console.log(p3.mostrarDatos());
//------------------------------------------------------------------------------------
//funciones
//grupo de instrucciones que tienen un objetivo
//son reutilizables
//2 tipos de funciones
//1.- fucniones de procedimeintos, ejecutan instrucciones y no devuelven nada
function escribirHastaTres(){
    console.log(1);
    console.log(2);
    console.log(3);
}
//las llamamops por su nombre y los parentesis (SIEMPRE)
escribirHastaTres(); //no retorna nada
escribirHastaTres();
escribirHastaTres();
escribirHastaTres();

//2.- funciones que retornan un valor. gemeralmente para realzar un cálculo o transformar un elemento
function sumarHastaTres(){
    let suma=1+2+3;
    return suma;
}

sumarHastaTres(); //me retorna 3
//funciones con parametros------------------------------------------------
function escribir(palabra) {
    console.log(palabra);
}
//llamo a la funcion con un parámretro
escribir("chao");
escribir("que tal");
escribir("denis");
escribir(123);
var letras="dfgdf";
escribir(letras);

//existen:
//variables: guardan datos   //js
//parametros: guardan datos  //funciones
//propiedades: guardan datos  //objetos

//--------------------------------------------------------------------
//funciones anonimas, no se pueden llamar de ninguna parte excepto desde donde son definidas
var miFuncion = function(){console.log("mi funcion")}; //se guarda la funcion en una variable, no se ejecutaaun
miFuncion(); //ejecuta la funcion que tiene guardada la variable

var elementoHTML=document.createElement("div");

elementoHTML.addEventListener("click",function(){
    console.log("dentro del click");
})













