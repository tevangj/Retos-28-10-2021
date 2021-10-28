var cosa = [["*"],["**"],["***"],["****"],["*****"]];

function imprimir(arreglo){
    for(index = 0; index < arreglo.length;index++){
        for(jndex = 0; jndex < arreglo[index].length;jndex++){
            console.log(cosa[index][jndex]);
        }
    }
}
imprimir (cosa);
