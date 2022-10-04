let productos = prompt("Ingrese el producto que desea comprar (Escriba fin para finalizar)");
while(productos != "fin"){

if ((productos == "Aro Margarita Grande") || (productos == "aro margarita grande")){
    console.log("El precio del Aro Margarita Grande por unidad es $600");
}else if ((productos == "Prendedor Colibri") || (productos =="prendedor colibri")){
    console.log("El precio del Prendedor Colibri es $400");
}else if ((productos == "Atrapasueños 30cm") || (productos =="atrapasueños 30cm")){
    console.log("El precio del Atrapasueños 30cm es $1500");
}else if ((productos == "Llavero Mandala") || (productos =="llavero mandala")){
    console.log("El precio del Llavero Mandala es $500");
}else if ((productos == "Colgante Frase") || (productos =="colgante frase")){
    console.log("El precio del Colgante Frase es $550");
}else{
    alert("Producto sin stock!");
}
productos = prompt("Ingrese el producto que desea comprar (Escriba fin para finalizar");
}

function saludar(){
    alert("Gracias por su compra!!!")
}
saludar();
















