function getKeys(array) { // Funcion para guardar las estructura de los objetos

    let keysAux = new Set();

    if (array) {
        array.forEach(function (obj) {  // Guardamos las keys
            if (obj) {
                Object.keys(obj).forEach(function (k) { // Cogemos las keys de cada objeto, y las guardamos
                    keysAux.add(k);
                });
            }
        });

        return Array.from(keysAux).sort(); // Convertimos en Array para ordenar
    }

}

function getKeysV2(array){

    let keysAux = new Set();

    if(array){
        array.forEach(function(obj){
            if(obj){
                for (const key in obj) {
                    keysAux.add(key);
                }
            }
        });
    }

    return Array.from(keysAux).sort();
}

function checkStructure(obj) {

    let keysObj = [], check = false;

    if (obj && keys) {
        keysObj = Object.keys(obj).sort(); // Ordamos y obtenemos claves del objeto
        keysObj.length === keys.length && keysObj.every(function (value, index) {
            check = value === keys.sort()[index];
        });
    }
    return check;
}

function equals(obj, obj2) {

    if (obj && obj2) {
        let keys = Object.keys(obj).sort(), // Obtenemos y ordenamos las keys del objeto principal
            keysStr = keys.join(';'), // Pasamos a String 
            keysAux = Object.keys(obj2).sort(), // Obtenemos y ordenamos keys del objeto a comparar
            keysAuxStr = keysAux.join(';'); // Pasamos a string

        if (keysStr === keysAuxStr) { // comprobamos la estructura 

            //let seemValues = true; // Boolean para saber si son identicos
            /*keys.forEach(function (prop, i) {
                if (obj[prop] !== obj2[prop]) {  // Para cada key comprobamos los valores de los dos objetos
                    seemValues = false; // Si no son iguales, no son identicos
                }
            });*/
            
            // V2

            let seemValues = keys.every( 
                prop => {
                    obj[prop] !== obj2[prop]
                });
            console.log(seemValues);
            return seemValues;
        } else {
            return false;
        }

    }else{
        return false;
    }
}




let addressObj = new Ej2(params);
console.log('\n ____ Address ____\n');
console.log(addressObj.address);
//let keys = getKeys(addressObj.address);
let keys = getKeysV2(addressObj.address);