
class Ej2 {

    constructor(address) {
        this.address = address;
    }

    getNumEmpty() {
        let numEmpty = 0, // Total de direcciones vacias
            numComplete = 0; // Total de direcciones completas
        console.log('\n ____ getNumEmpty() ____\n');
        this.address.forEach(function (e) {
            let emptyProperty = false; // Boolean de la direccion actual
            if (typeof (e)) {
                let structureOk = checkStructure(e); // Si tiene las estructura correcta
                for (let prop in e) {
                    if ((e[prop] == '' || !e[prop] || !structureOk) && !emptyProperty) { // Si la propiedad esta vacia y no teniamos constancia que tenia un campo vacio sumamos 1
                        numEmpty++;
                        emptyProperty = true;
                    }
                }
                if (!emptyProperty) numComplete++
            }
        });
        console.log(`Hay ${numEmpty} direcciones con un dato vacio.`);
        console.log(`Hay ${numComplete} direcciones con todos los datos.`);
    }
    ///// V2 /////

    getNumEmptyV2() {
        console.log('\n ____ getNumEmpty() v2 ____\n');
        return this.address.filter(this.numEmpty);
    }
    numEmpty(obj) {
        if (typeof (obj)) {
            let emptyProperty = false; // Boolean de la direccion actual
            for (let prop in obj) {
                if ((obj[prop] == '' || !obj[prop] || !checkStructure(obj)) && !emptyProperty) { // Si la propiedad esta vacia y no teniamos constancia que tenia un campo vacio sumamos 1
                    emptyProperty = true;
                }
            }
            return emptyProperty;
        }
    }

    ///// Fin V2 /////

    getUniqAddressV2() {
        console.log('\n ____ getUniqAddress() v2____\n');
        let address = this.address.filter(this.uniqAddress);
        return address;
    };

    uniqAddress(obj, i, addressArray) {

        let uniq = false;

        if (obj) {
            console.log('----->Comparamos ');
            console.log(obj);
            console.log('-> con ');

            addressArray.forEach(function (address, j) {
                if (address && j > i) {
                        console.log(address);
                        let keys = Object.keys(obj).sort(),
                            keysStr = keys.join(';'),
                            keys2 = Object.keys(address).sort(),
                            keys2Str = keys2.join(';'),
                            
                        uniq = false;

                        if (keysStr === keys2Str) {
                            keys.forEach(function(key){
                                if(obj[key] !== address[key] ){
                                    uniq = true;
                                }
                            });

                            console.log(`Estos dos objetos son iguales? ${!uniq}`);
                        } else {
                            uniq = true;
                        }

                        console.log(`Per tant es unic? ${uniq}`);
                }
            });
            
        } 
        console.log(`Retornem si es unic: ${uniq}`);
        return uniq;
    }

    equalsV2(o1, o2) {
        let keys = Object.keys(o1).sort(),
            keysStr = keys.join(';'),
            keys2 = Object.keys(o2).sort(),
            keys2Str = keys2.join(';'),
            equals = true;

        if (keysStr === keys2Str) {
            equals = keys.every(prop => {
                return obj[prop] === address[prop];
            });
        } else {
            equals = false;
        }

        return equals
    }

    getUniqAddress() {
        // V1
        let address = this.address,
            addressAux = address.map(obj => obj); // Copia de address, sera el array final
        console.log('\n ____ getUniqAddress() ____\n');
        address.forEach(function (obj, i) {
            if (obj) {
                let keys = Object.keys(obj).sort(), // Obtenemos y ordenamos las keys del objeto principal
                    keysStr = keys.join(';'); // Pasamos a String 

                addressAux.forEach((objAux, j) => {

                    if (objAux && j > i) { // la posicion del objeto actual es mayor q la del principal, evitamos que se compare con el mismo
                        let keysAux = Object.keys(objAux).sort(), // Obtenemos y ordenamos keys del objeto a comparar
                            keysAuxStr = keysAux.join(';'); // Pasamos a string

                        if (keysStr === keysAuxStr) { // comprobamos la estructura 

                            let seemValues = true; // Boolean para saber si son identicos
                            keys.forEach((prop, i) => {
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
        console.log('\n ____ orderProp() ____\n');
        if (typeof (prop) != 'undefined') {
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

    orderPropV2(prop, type = 'desc') {
        console.log('\n ____ orderProp() v2 ____\n');
        if (prop) {
            let address = this.address;

            address.sort((o1, o2) => {
                if (prop === 'number') {
                    return this.sortNumber(parseInt(o1[prop]), parseInt(o2[prop]));
                } else {
                    return this.sort(o1[prop], o2[prop]);
                }
            });

            if (type != 'desc') {
                address.reverse();
            }

            return address;
        } else {
            return 'No property';
        }

    }

    sort(o1, o2) {
        if (!o1) {
            o1 = '';
        } else if (!o2) {
            o2 = '';
        }

        if (o1 > o2) {
            return 1;
        } else {
            return -1;
        }

    }

    sortNumber(o1, o2) {
        if (isNaN(o1)) {
            o1 = 0;
        } else if (isNaN(o2)) {
            o2 = 0;
        }
        return parseInt(o1) - parseInt(o2);
    }

    /*filter(...args) {
        let addressArray = this.address,
            addressFilter = [], // Direcciones filtradas
            totalConditions = args.length;
            console.log('\n ____ filter() ____\n');
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

        console.log(`Filtros: ${args.join(',')}`);
        return addressFilter;
    }*/

    filterV2(...args) {
        console.log('\n ____ filter() v2____\n');

        return this.address.filter(obj => {
            if (obj) {

                let coincidences = new Set();
                for (const prop in obj) {
                    if (obj[prop]) {
                        let val = obj[prop].toString().toUpperCase();
                        args.forEach(function (txt, i) {
                            if (val.indexOf(txt.toUpperCase()) > -1) {
                                coincidences.add(txt);
                            }
                        });
                    }
                }
                if (coincidences.size >= args.length) {
                    return true;
                } else {
                    return false;
                }
            }

        });

    }

    getMaxMinNum(cond = 'max') {

        let arrayAddress = this.address,
            address = {}, // Direccion con el numero mas bajo/alto
            number = null; // Numero mas bajo
        console.log('\n ____ getMaxMin() ____\n');
        arrayAddress.forEach(function (e, i) {

            if (e) {
                if (e['number']) {
                    if (i == 0 || number == null) { // Guardamos primer numero o uno de los siguientes si 'min' es null
                        number = e.number;
                        address = e;
                    }
                    if (cond === 'min') { // Si el numero es mas pequeño que el minimo actual, este pasa a ser el mas bajo
                        if (e.number < number) {
                            number = e.number;
                            address = e;
                        }
                    } else {
                        if (e.number > number) {
                            number = e.number;
                            address = e;
                        }
                    }
                }
            }
        });
        if (number) {
            console.log(`La direccion es: \n${address.name}: ${address.street} ${address.number} ${address.city} - ${address.country}`);
        } else {
            console.log('No se puede obtener');
        }
    }

    getCoincidences(...args) {
        console.log(this.filterV2(...args).length);
    }

}
