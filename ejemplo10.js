let encendido = true;
let velocidad = 32;
if(encendido){
    console.log(`Su carro esta encendido`);
    if(velocidad == 0){
        console.log(`carro freno`);
    }else if(velocidad > 0 && valocidad <= 100){
        console.log(`carro en marcha..`)
    }else{
        console.log(`evitese un accidente .. exceso de velocidad`)
    }
}else{
    console.log(`Encienda su vehiculo..`);
}