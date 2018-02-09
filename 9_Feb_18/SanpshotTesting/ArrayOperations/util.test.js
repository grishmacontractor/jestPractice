//import util from './util.js'
//import deepFreeze from 'deep-freeze'
util = require('./util.js')
deepFreeze = require('deep-freeze')
test("Add Item to a list", function(){
   let jslibs = ['React', 'Mobx']
    deepFreeze(jslibs)
   let result = util.addItemToList(jslibs,"Redux")
   //let expected = ['React', 'Mobx', 'Jest']
   expect(result).toMatchSnapshot()
});

test("Remove Item frm a list", function(){
    let jslibs = ['React', 'Mobx']
   deepFreeze(jslibs)
    let result = util.removeItemToList(jslibs,1)
    //let expected = ['React']
    expect(result).toMatchSnapshot()
});

test("Update Item frm a list", function(){
    let jslibs = ['React', 'Mobx']
    deepFreeze(jslibs)
    let result = util.updateItemFromList(jslibs,1,'Redux')
    //let expected = ['React','Redux']
    expect(result).toMatchSnapshot()
});