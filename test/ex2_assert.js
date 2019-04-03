let assert = require('chai').assert;
let ex2 = require('./ex2_functions');

describe('Test Ej2 getKeys(): ', function() {
        it('Should return all keys',function(){
            let array = [{
                name: 'AddressTest',
                country: 'Spain',
                city: 'Barcelona',
                street: 'Diagonal',
                number: '205'
              }];

            result = ex2.getKeys(array);
            assert.equal(result.join(','), 'city,country,name,number,street', `${result.join(',')} != city,country,name,number,street`);
        });
        it('Should return all keys(1 object without property)',function(){
            let array = [{
                name: 'AddressTest',
                country: 'Spain',
                city: 'Barcelona',
                street: 'Diagonal',
                number: '205'
              },
              {
                street: 'Diagonal',
                name: 'AddressTest',
                number: '205',
                country: 'Spain'
              }];

            result = ex2.getKeys(array);
            assert.equal(result.join(','), 'city,country,name,number,street', `${result.join(',')} != city,country,name,number,street`);
        });
        it('Should return all keys(2 ojects with differents keys)',function(){
            let array = [{
                name: 'AddressTest',
                number: '205'
              },
              {
                street: 'Diagonal',
                country: 'Spain',
                city: 'Barcelona'
              }];

            result = ex2.getKeys(array);
            assert.equal(result.join(','), 'city,country,name,number,street', `${result.join(',')} != city,country,name,number,street`);
        });

});   

describe('Test ej2 checkStructure(): ', function() {
    it('Should return true(2 objects with same keys)',function(){
        let array = [{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'C/ Berlin',
            number: '305'
          }];
        let obj = {
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '205'
          };
        keys = ex2.getKeys(array);
        result = ex2.checkStructure(obj);
        assert.equal(result, true, `${keys.join(',')} != ${Object.keys(obj).sort().join(',')}`);
    });
    it('Should return false(Object without one key)',function(){
        let array = [{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'C/ Berlin',
            number: '305'
          }];
        let obj = {
            name: 'AddressTest',
            country: 'Spain',
            street: 'Diagonal',
            number: '205'
          };
        keys = ex2.getKeys(array);
        result = ex2.checkStructure(obj);
        assert.equal(result, false, `${keys.join(',')} == ${Object.keys(obj).sort().join(',')}`);
    });
    it('Should return false(Object null)',function(){
        let array = [{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'C/ Berlin',
            number: '305'
          }];
        let obj = null;
        keys = ex2.getKeys(array);
        result = ex2.checkStructure(obj);
        assert.equal(result, false, `${keys.join(',')} == null`);
    });
});   

describe('Test ej2 equals(): ', function() {
    it('Should return true(same objects)',function(){
        let obj = {
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '205'
          },
          obj2 = {
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '205'
          };
        result = ex2.equals(obj, obj2);
        assert.equal(result, true, `Obj != Obj2`);
    });
    it('Should return false(One object with different property value)',function(){
        let obj = {
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '205'
          },
          obj2 = {
            name: 'AddressTest2',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '205'
          };
        result = ex2.equals(obj, obj2);
        assert.equal(result, false, `Obj == Obj2`);
    });
    it('Should return false(One object without property)',function(){
        let obj = {
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '205'
          },
          obj2 = {
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            number: '205'
          };
        result = ex2.equals(obj, obj2);
        assert.equal(result, false, `Obj == Obj2`);
    });
    it('Should return false(One object null)',function(){
        let obj = {
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '205'
          },
          obj2 = null;
        result = ex2.equals(obj, obj2);
        assert.equal(result, false, `Obj == Obj2`);
    });
});   