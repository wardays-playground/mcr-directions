let assert = require('chai').assert;
let ex1 = require('./ex1_functions');

// parametro debe ser array[ { name:'Adsress', ... } ]
describe('Test Ej1 getDirection(): ', function() {
        it('Should return correct string',function(){
            let array = [{
                name: 'AddressTest',
                country: 'Spain',
                city: 'Barcelona',
                street: 'Diagonal',
                number: '205'
              }];

            result = ex1.getDirection(array);
            assert.equal(result[0], 'AddressTest: Diagonal 205 Barcelona - Spain', `${result[0]} != AddressTest: Diagonal 205 Barcelona - Spain`);
        });
        it('Should return a string(ignores null position): ',function(){
            let array = [
                null,
                {
                name: 'AddressTest',
                country: 'Spain',
                city: 'Barcelona',
                street: 'Diagonal',
                number: '205'
              }];

            result = ex1.getDirection(array);
            assert.lengthOf(result, 1); 
            assert.equal(result[0], 'AddressTest: Diagonal 205 Barcelona - Spain', `${result[0]} != AddressTest: Diagonal 205 Barcelona - Spain`); // Al ser null lo ignorara y devolvera solo el mensaje de la address correcta
        });
        it('Should return a string(ignores undefined position):',function(){
            let array = [
                undefined,
                {
                name: 'AddressTest',
                country: 'Spain',
                city: 'Barcelona',
                street: 'Diagonal',
                number: '205'
              }];

              result = ex1.getDirection(array);
              assert.lengthOf(result, 1); 
              assert.equal(result[0], 'AddressTest: Diagonal 205 Barcelona - Spain', `${result[0]} != AddressTest: Diagonal 205 Barcelona - Spain`); // Al ser undefined lo ignorara y devolvera solo el mensaje de la address correcta
          });
        it('Should return error string(Incorrect structure address(No city)): ',function(){
            let array = [{
                name: 'AddressTest',
                country: 'Spain',
                street: 'Diagonal',
                number: '205'
              },
              {
                name: 'AddressTest2',
                country: 'Spain',
                city: 'Barcelona',
                street: 'Diagonal',
                number: '205'
              }];

            result = ex1.getDirection(array);
            assert.equal(result[0], 'AddressTest no tiene la misma estructura', `${result[0]} != AddressTest no tiene la misma estructura`); // Le Falta la propiedad city
        });
        it('Should return error string(Incorrect address(empty city)): ',function(){
            let array = [{
                name: 'AddressTest',
                country: 'Spain',
                street: 'Diagonal',
                number: '205',
                city: ''
              },
              {
                name: 'AddressTest2',
                country: 'Spain',
                city: 'Barcelona',
                street: 'Diagonal',
                number: '205'
              }];

            result = ex1.getDirection(array);
            assert.equal(result[0], 'No se puede mostrar la dirección debido a que faltan las siguientes propiedades: city', `${result[0]} != No se puede mostrar la dirección debido a que faltan las siguientes propiedades: city`); // Le Falta la propiedad city
        });
        it('Should return error string(Incorrect address(empty name & number)): ',function(){
            let array = [{
                name: '',
                country: 'Spain',
                street: 'Diagonal',
                number: '',
                city: 'Barcelona'
              }];

            result = ex1.getDirection(array);
            assert.equal(result[0], 'No se puede mostrar la dirección debido a que faltan las siguientes propiedades: name,number', `${result[0]} != No se puede mostrar la dirección debido a que faltan las siguientes propiedades: name,number`); 
        });
        it('Should return alternative string(empty country & city): ',function(){
            let array = [{
                name: 'AddressTest',
                country: '',
                street: 'Diagonal',
                number: '205',
                city: ''
              }];

            result = ex1.getDirection(array);
            assert.equal(result[0], 'AddressTest:Diagonal 205', `${result[0]} != AddressTest:Diagonal 205`); 
        });
        it('Should return alternative string(empty street & number): ',function(){
            let array = [{
                name: 'AddressTest',
                country: 'Spain',
                street: '',
                number: '',
                city: 'Barcelona'
              }];

            result = ex1.getDirection(array);
            assert.equal(result[0], 'Barcelona,Spain(AddressTest)', `${result[0]} != Barcelona,Spain(AddressTest)`); 
        });
});   