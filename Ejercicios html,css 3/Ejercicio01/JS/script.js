let imagenes = [];
let vcontrol = false;
function llenarArreglo() {
    for (let i = 1; i <= 20; i++){
        //imagenes.push(`mascota${i}.jpg`);
        imagenes.push(`/Ejercicios html,css 3/Ejercicio01/img/producto${i}.jpg`);
    }
}
llenarArreglo();

function agregarImg(){
    if(vcontrol==false){
        for(let i = 0; i < imagenes.length; i++) {
        let contenedor = document.getElementById(`${i}`);
        contenedor.insertAdjacentHTML("beforeend",`<img src="${imagenes[i]}" alt="productos" class="imgBody">`);
        }
    }  
    vcontrol = true;
}

function quitarImg(){
    for(let i = 0; i < 20; i++){
            const remover = document.getElementById(`${i}`);
            remover.childNodes[0].remove();
    }
    vcontrol=false;
}
