let producto = prompt("Ingrese el producto que desea comprar (Escriba fin para finalizar)");
while(producto != "fin"){

if ((producto == "Aro Margarita Grande") || (producto == "aro margarita grande")){
    console.log("El precio del Aro Margarita Grande por unidad es $600");
}else if ((producto == "Prendedor Colibri") || (producto =="prendedor colibri")){
    console.log("El precio del Prendedor Colibri es $400");
}else if ((producto == "Atrapasueños 30cm") || (producto =="atrapasueños 30cm")){
    console.log("El precio del Atrapasueños 30cm es $1500");
}else if ((producto == "Llavero Mandala") || (producto =="llavero mandala")){
    console.log("El precio del Llavero Mandala es $500");
}else if ((producto == "Colgante Frase") || (producto =="colgante frase")){
    console.log("El precio del Colgante Frase es $550");
}else{
    alert("Producto sin stock!");
}
producto = prompt("Ingrese el producto que desea comprar (Escriba fin para finalizar");
}
