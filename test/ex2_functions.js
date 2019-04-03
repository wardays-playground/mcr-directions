let functions = {};

functions.getKeys = function(array) { // Funcion para guardar las estructura de los objetos

    let keysAux = new Set();

    if (array) {
        array.forEach(function (obj) {  // Guardamos las keys
            if (obj) {
                Object.keys(obj).forEach(function (k) {
                    keysAux.add(k);
                });
            }
        });

        return Array.from(keysAux).sort(); // Convertimos en Array para ordenar
    }

}

functions.checkStructure = function (obj) {

    let keysObj = [], check = false;
    
    if (obj) {
        keysObj = Object.keys(obj).sort(); // Ordamos y obtenemos claves del objeto
        if (obj && keys) {
            keysObj.length === keys.length && keysObj.every(function (value, index) {
                check = value === keys.sort()[index];
            });
        }
    }
    return check;
}

functions.equals = function (obj, obj2) {
    let seemValues = false; // Boolean para saber si son identicos
    if (obj && obj2) {
        let keys = Object.keys(obj).sort(), // Obtenemos y ordenamos las keys del objeto principal
            keysStr = keys.join(';'), // Pasamos a String 
            keysAux = Object.keys(obj2).sort(), // Obtenemos y ordenamos keys del objeto a comparar
            keysAuxStr = keysAux.join(';'); // Pasamos a string

        if (keysStr === keysAuxStr) { // comprobamos la estructura 
            seemValues = true;
            keys.forEach(function (prop, i) {
                if (obj[prop] !== obj2[prop]) {  // Para cada key comprobamos los valores de los dos objetos
                    seemValues = false; // Si no son iguales, no son identicos
                }
            });
        } 
    }

    return seemValues;
}


module.exports = functions;
