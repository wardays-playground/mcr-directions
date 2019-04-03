
let ex2 = require('./ex2_functions');

class Ej2 {

    constructor(address) {
        this.address = address;
    }

    getNumEmpty() {
        let numEmpty = 0, // Total de direcciones vacias
            numComplete = 0; // Total de direcciones vacias
            console.log('\n ____ getNumEmpty() ____\n');
        this.address.forEach(function (e) {
            let emptyProperty = false; // Boolean de la direccion actual
            if (typeof (e)) {
                let structureOk = ex2.checkStructure(e); // Si tiene las estructura correcta
                for (let prop in e) {
                    if ((e[prop] == '' || !e[prop] || !structureOk) && !emptyProperty) { // Si la propiedad esta vacia y no teniamos constancia que tenia un campo vacio sumamos 1
                        numEmpty++;
                        emptyProperty = true;
                    }
                }
                if (!emptyProperty) numComplete++
            }
        });
        return numEmpty;
        //console.log(`Hay ${numComplete} direcciones con todos los datos.`);
    }

    getUniqAddress() {
        // V1
        let address = this.address,
            addressAux = address; // Copia de address, sera el array final

        address.forEach(function (obj, i) {
            if (obj) {
                let keys = Object.keys(obj).sort(), // Obtenemos y ordenamos las keys del objeto principal
                    keysStr = keys.join(';'); // Pasamos a String 

                addressAux.forEach(function (objAux, j) {

                    if (objAux && j > i) { // la posicion del objeto actual es mayor q la del principal, evitamos que se compare con el mismo
                        let keysAux = Object.keys(objAux).sort(), // Obtenemos y ordenamos keys del objeto a comparar
                            keysAuxStr = keysAux.join(';'); // Pasamos a string

                        if (keysStr === keysAuxStr) { // comprobamos la estructura 
                            
                            let seemValues = true; // Boolean para saber si son identicos
                            keys.forEach(function (prop, i) {
                                if (obj[prop] !== objAux[prop]) {  // Para cada key comprobamos los valores de los dos objetos
                                    seemValues = false; // Si no son iguales, no son identicos
                                }
                            });
                            if (seemValues) {  // Si son identicos borramos el duplicado
                                addressAux.splice(j, 1);
                            }
                        }

                    }
                });
            }
        });

        return addressAux;

        // V2 
        /*var address = this.address; 
        var unique_address =  []; // Copia de address, sera el array final

        address.forEach(function(obj) {
            let unique = true;
            let i = 0;
            while (i < unique_address.length && unique) {
                if (equals(obj, unique_address[i])) unique = false;
                ++i;
            }
            if (unique) unique_address.push(obj);
        });

        console.log(unique_address);*/
    }

    orderProp(prop, type = 'asc') { // Ordenar array por propiedad

        if (prop) {
            let address = this.address;

            address.sort(function (o1 = '', o2 = '') {  // Ordenamos array por la propiedad que pasamos
                if (o1 && o2) {
                    if (o1[prop] > o2[prop]) {
                        if (type == 'desc') { // Decidimos el orden
                            return -1;
                        } else {
                            return 1;
                        }
                    } else if (o1[prop] < o2[prop]) {
                        if (type == 'desc') {
                            return 1;
                        } else {
                            return -1;
                        }
                    }
                }
            });
            return address;

        } else {
            return 'Falta introducir un campo';
        }
    }

    filter(...args) {
        let addressArray = this.address,
            addressFilter = [], // Direcciones filtradas
            totalConditions = args.length;

        addressArray.forEach(function (address) { // Address
            let coincidences = 0,
                coincidenceArgs = [];
            for (const key in address) { // Key
                args.forEach(function (textToFind) { // Args
                    if (address[key]) {
                        if (address[key].toString().toUpperCase().indexOf(textToFind.toUpperCase()) > -1 && !coincidenceArgs[textToFind]) {
                            coincidences++;
                            coincidenceArgs[textToFind] = true; // Esta opcion se cumple
                        }
                    }
                });
            }
            if (coincidences >= totalConditions) {
                addressFilter.push(address);
            }
        });

        //console.log(`Filtros: ${args.join(',')}`);
        return addressFilter;
    }

    getMaxMinNum(cond = 'max') {

        let arrayAddress = this.address,
            address = {}, // Direccion con el numero mas bajo
            number = null; // Numero mas bajo

        arrayAddress.forEach(function (e, i) {

            if (e) {
                if (e['number']) {
                    if (i == 0 || number == null) { // Guardamos primer numero o uno de los siguientes si 'min' es null
                    number = e.number;
                    }
                    if ( cond === 'min' ) { // Si el numero es mas pequeño que el minimo actual, este pasa a ser el mas bajo
                        if(e.number < number){
                            number = e.number;
                            address = e;
                        }
                    }else{
                        if(e.number > number){
                            number = e.number;
                            address = e;
                        }
                    }
                }
            }
        });
        if (number) {
            //console.log(`La direccion es: \n${address.name}: ${address.street} ${address.number} ${address.city} - ${address.country}`);
            return number;
        } else {
            return 'No se puede obtener';
            //console.log('No se puede obtener');
        }
    }

    getCoincidences(...args) {
        return this.filter(...args).length;
    }

}

module.exports = Ej2;
