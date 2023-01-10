
function encriptar(){
    const mapa = new Map();
    mapa.set("a","enter");
    mapa.set("e","imes");
    mapa.set("i","ai");
    mapa.set("o","ober");
    mapa.set("u","ufat");

    var cadenafinal = "";
    const entrada = document.getElementById("mensaje").value;
    if (mensaje != ""){
        var entradaSeparada = entrada.split("");
        //console.log(entradaSeparada);

        let iterador = 0;
        for(iterador; iterador<entradaSeparada.length; iterador++){
            element = entradaSeparada[iterador];
            if ((element.charCodeAt(0) > 96) && (element.charCodeAt(0) < 123)){
                if(mapa.has(element)){
                    cadenafinal = cadenafinal + mapa.get(element);
                }else{
                    cadenafinal = cadenafinal + element;
                }        
                console.log("cadenaFinal= ",cadenafinal);

            }else{
                console.log("valor inválido");
                alert("Solo letras minúsculas y sin acentos o caracteres especiales");
                break;
                
            }
        }   
    }   
}

