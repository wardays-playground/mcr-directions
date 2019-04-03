let assert = require('chai').assert;
let address_module = require('./address_functions');
let ex2 = require('./ex2_functions');
let address = new address_module();

describe('Test Address Class getNumEmpty(): ', function() {
    it('Should return 1 Object(1 object with empty prop)',function(){
        let array = [{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '205'
          },{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: ''
          }
        ];
        address.address = array;
        keys = ex2.getKeys(array);
        result = address.getNumEmpty();
        assert.equal(result, 1);
    });
    it('Should return 1 Object(1 object without property)',function(){
        let array = [{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '205'
          },{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
          }
        ];
        address.address = array;
        keys = ex2.getKeys(array);
        result = address.getNumEmpty();
        assert.equal(result, 1);
    });
    it('Should return 1 Object(null element in array)',function(){
        let array = [{
            name: 'AddressTest',
            country: 'Spain',
            city: '',
            street: 'Diagonal',
            number: '205'
          },null
        ];
        address.address = array;
        keys = ex2.getKeys(array);
        result = address.getNumEmpty();
        assert.equal(result, 1);
    });
});  

describe('Test Address Class getUniqAdress(): ', function() {
    it('Should return 1 Object',function(){
        let array = [{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '205'
          },{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '205'
          }
        ];
        address.address = array;
        result = address.getUniqAddress();
        assert.lengthOf(result, 1);
    });
    it('Should return 2 Object(1 object have 1 property more)',function(){
        let array = [{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '205'
          },{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '205',
            cp: '08015'
          }
        ];
        address.address = array;
        result = address.getUniqAddress();
        assert.lengthOf(result, 2);
    });
});  

describe('Test Address Class orderProp(): ', function() {
    it('Should return asc sort property',function(){
        let array = [{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '100'
          },{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '0'
          },{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '200'
          }
        ];
        address.address = array;
        result = address.orderProp('number');

        assert.equal(result[0].number, 0);
        assert.equal(result[1].number, 100);
        assert.equal(result[2].number, 200);
    });
    it('Should return desc sort property',function(){
        let array = [{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '100'
          },{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '200'
          },{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '0'
          }
        ];
        address.address = array;
        result = address.orderProp('number','desc');

        assert.equal(result[0].number, 200);
        assert.equal(result[1].number, 100);
        assert.equal(result[2].number, 0);
    });
    it('Should return error message',function(){
        let array = [{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '100'
          },{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '200'
          },{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '0'
          }
        ];
        address.address = array;
        result = address.orderProp();

        assert.typeOf(result, 'string');
    });
});  

describe('Test Address Class filter(): ', function() {
    it('Should return 1 object',function(){
        let array = [{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '100'
          },{
            name: 'Address',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '0'
          },{
            name: 'Home',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '200'
          }
        ];
        address.address = array;
        result = address.filter('AddressTest');

        assert.lengthOf(result, 1);
        assert.equal(result[0].name, 'AddressTest');
    });
    it('Should return 2 object',function(){
        let array = [{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '100'
          },{
            name: 'Address',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '0'
          },{
            name: 'Home',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '200'
          }
        ];
        address.address = array;
        result = address.filter('Address');

        assert.lengthOf(result, 2);
        assert.equal(result[0].name, 'AddressTest');
        assert.equal(result[1].name, 'Address');
    });
    it('Should return 0 object',function(){
        let array = [{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '100'
          },{
            name: 'Address',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '0'
          },{
            name: 'Home',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '200'
          }
        ];
        address.address = array;
        result = address.filter('Casa');

        assert.lengthOf(result, 0);
    });
});  
describe('Test Address Class getMaxMin(): ', function() {
    it('Should return highest number',function(){
        let array = [{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '100'
          },{
            name: 'Address',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '0'
          },{
            name: 'Home',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '200'
          }
        ];
        address.address = array;
        result = address.getMaxMinNum();

        assert.equal(result, '200');
    });
    it('Should return lowest number',function(){
        let array = [{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '100'
          },{
            name: 'Address',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '0'
          },{
            name: 'Home',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '200'
          }
        ];
        address.address = array;
        result = address.getMaxMinNum('min');

        assert.equal(result, '0');
    });
    it('Should return error message',function(){
        let array = [{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal'
          },{
            name: 'Address',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal'
          },{
            name: 'Home',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal'
          }
        ];
        address.address = array;
        result = address.getMaxMinNum();

        assert.typeOf(result, 'string');
    });
});  
describe('Test Address Class getCoincidences(): ', function() {
    it('Should return 1 object',function(){
        let array = [{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '100'
          },{
            name: 'Address',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '0'
          },{
            name: 'Home',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '200'
          }
        ];
        address.address = array;
        result = address.getCoincidences('AddressTest');

        assert.equal(result, 1);
    });
    it('Should return 2 object',function(){
        let array = [{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '100'
          },{
            name: 'Address',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '0'
          },{
            name: 'Home',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '200'
          }
        ];
        address.address = array;
        result = address.getCoincidences('Address');

        assert.equal(result, 2);
    });
    it('Should return 0 object',function(){
        let array = [{
            name: 'AddressTest',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '100'
          },{
            name: 'Address',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '0'
          },{
            name: 'Home',
            country: 'Spain',
            city: 'Barcelona',
            street: 'Diagonal',
            number: '200'
          }
        ];
        address.address = array;
        result = address.getCoincidences('Casa');

        assert.equal(result, 0);
    });
});  