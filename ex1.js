
function getDirection(d){

    let keysAux = new Set(),
        address = [];

    d.forEach(function(obj){  // Guardamos las keys
        if(obj){
            Object.keys(obj).forEach(function(k){
                keysAux.add(k);
            });
        }
    });
    let keys = Array.from(keysAux).sort(); // Convertimos en Array para ordenar
    
    console.log('____ EJERCICIO 1 ____\n');

    d.forEach(function(obj) {

      let emptyFields = new Set(), // Campos vacios
          emptyFieldsStr = ''; // String del array empty_fields

      if(obj){ //Comprobamos que el objeto exista

        let keysObj = Object.keys(obj).sort();

        if( keysObj.length === keys.length && keysObj.every(function(value, index) { return value === keys.sort()[index]}) ){ // Comprobamos la estructura

        for (const prop in obj) { // Guardamos campos que faltan
          if( !obj[prop] ){ // Podria ser if(obj[prop]){} ????
          emptyFields.add(prop); // Si esta vacio lo guardamos en el array de campos que faltan
          }
        }

        emptyFieldsStr = Array.from(emptyFields).join(','); // Pasamos el array a string para mostralo

        if( emptyFields.has('name') ){ // Comprobamos que falta el nombre( el nombre es comun en los 3 casos)
            showAddress = false;
            address.push(`No se puede mostrar la dirección debido a que faltan las siguientes propiedades: ${emptyFieldsStr}`);
        }else if(emptyFields.size > 0){
          if( emptyFields.has('country') && emptyFields.has('city') && !emptyFields.has('street') && !emptyFields.has('number')){
              address.push(`${obj.name}:${obj.street} ${obj.number}`); // Direccion caso 1
          }else if( emptyFields.has('street') && emptyFields.has('number') && !emptyFields.has('city') && !emptyFields.has('country')){
            address.push(`${obj.city},${obj.country}(${obj.name})`); // Direccion caso 2
          }else{
            showAddress = false;
            address.push(`No se puede mostrar la dirección debido a que faltan las siguientes propiedades: ${emptyFieldsStr}`);
          }
        }else if(emptyFields.size == 0){
             address.push(`${obj.name}: ${obj.street} ${obj.number} ${obj.city} - ${obj.country}`); // Direccion completa
        }
      }else{
        if(obj.name){
          address.push(`${obj.name} no tiene la misma estructura`);
        }else{
          address.push('un elemento no tiene la misma estructura');
        }
        
      }

      }
    });

    return address;
  }

  console.log(getDirection(params));

  

  