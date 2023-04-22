/*console.log ("Estamos Conectados");
alert("Mensaje de Alerta al documento html");
document.write("<h1> mensaje al documento desde javascript </h1>" );*/

/*var vProm = 5.3;
if(vProm>4){console.log("Asignatura aprobada");}

else{console.log("Asignatura Reprobada");}

var N1 = 1.3;
var N2 = 2.8;
var N3 = 5.2;

console.log ((N1 + N2 + N3) / 3);
console.log("su Promedio es: " + (N1 + N2 + N3) / 3 );

for(var x = 0; x <3; x++ ) {
    console.log("Promedio...");
}

var vArr = ["Juan Perez", 50 , 5.7 , true ]
console.log (vArr);
console.log ("Su edad es: " + vArr[1]);
for(var y=0;y<vArr.length;y++){
    console.log(vArr[y]);
}

var c=0;
while(c<vArr.length){
    console.log(vArr[c]);
    c++;
}*/


//Funciones//
/*
function mensaje1(){

    alert("Hola Como Estas.....");
}

var nt1 = 1.3;
var nt2 = 2.8;
var nt3 = 5.2;

function Promedio(nt1,nt2,nt3){
    console.log("Su promedio es: " + (nt1+nt2+nt3)/3);
    
}

Promedio(nt1,nt2,nt3); */

var nt1 = 1.3;
var nt2 = 2.8;
var nt3 = 5.2;

function Promedio(nt1,nt2,nt3){
    return((nt1+nt2+nt3)/3);    
}

vProm= Promedio(5.0,3.0,4.9);

if(vProm>4){

    console.log("Usted a aproboado el ramo con nota: " + vProm);

}
else{
    console.log("Usted ha reprobado el ramo con nota: " + vProm);
}

console.log(Promedio(7.0,1.0,4.9,2));

Promedio(nt1,nt2,nt3);

