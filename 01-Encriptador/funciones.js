function copiarPortapapeles(){
    //console.log("Entrando a copiar");
    var copiar = document.getElementById('muestraMensaje').innerHTML;

    //var content = document.getElementById('textArea').innerHTML;
    navigator.clipboard.writeText(copiar)
        .then(() => {
        console.log("Texto copiado exitosamente...")
    })
        .catch(err => {
        console.log('Hubo un error al copiar', err);
    })
 
}

function desencriptar(){
    const mapa = new Map();
    mapa.set("e",4);
    mapa.set("i",3);
    mapa.set("a",1);
    mapa.set("o",3);
    mapa.set("u",3);

    var cadenaResultado = ""; 
    const mensaje = document.getElementById("mensaje").value;
    const avisoid = document.getElementById("avisoid");
    const mensajefinal = document.getElementById("muestraMensaje");
    if(mensaje != ""){
        var entradaSeparada = mensaje.split("");
        let iterador = 0;

        while(iterador<entradaSeparada.length){
            element = entradaSeparada[iterador];
            if(mapa.has(element)){
                cadenaResultado = cadenaResultado + element;
                iterador += 1 + mapa.get(element);

            }else{
                cadenaResultado = cadenaResultado + element;
                iterador++;
            }
        }
        console.log(cadenaResultado);
        avisoid.innerHTML = "El mensaje Desencriptadoe es:";
        mensajefinal.innerHTML = cadenaResultado;
        
    } 
}

function encriptar(){
    const mapa = new Map();
    mapa.set("e","enter");
    mapa.set("i","imes");
    mapa.set("a","ai");
    mapa.set("o","ober");
    mapa.set("u","ufat");

    var cadenafinal = "";
    const entrada = document.getElementById("mensaje").value;
    const avisoid = document.getElementById("avisoid");
    const mensajefinal = document.getElementById("muestraMensaje");
    const btnCopiar = document.getElementById("btnCopiar");
    if (mensaje != ""){
        var entradaSeparada = entrada.split("");

        let iterador = 0;
        for(iterador; iterador<entradaSeparada.length; iterador++){
            element = entradaSeparada[iterador];
            if (((element.charCodeAt(0) > 96) && (element.charCodeAt(0) < 123))||(element.charCodeAt(0) == 32)){
                if(mapa.has(element)){
                    cadenafinal = cadenafinal + mapa.get(element);
                }else{
                    cadenafinal = cadenafinal + element;
                }        
                console.log("cadenaFinal= ",cadenafinal);
                avisoid.innerHTML = "El mensaje Encriptado es: ";
                mensajefinal.innerHTML = cadenafinal;
                btnCopiar.style.display = null;
                btnCopiar.style.display = "initial";


            }else{
                console.log("valor inválido");
                alert("Solo letras minúsculas y sin acentos o caracteres especiales");
                break;
                
            }
        }   
    }   
}

