import util from '../util'
import deepFreeze from 'deep-freeze'

test("Add Item to a list", function(){
   let jslibs = ['React', 'Mobx']
    deepFreeze(jslibs)
   let result = util.addItemToList(jslibs,"Jest")
   let expected = ['React', 'Mobx', 'Jest']
   expect(result).toEqual(expected)
});

test("Remove Item frm a list", function(){
    let jslibs = ['React', 'Mobx']
   deepFreeze(jslibs)
    let result = util.removeItemToList(jslibs,1)
    let expected = ['React']
    expect(result).toEqual(expected)
});

test("Update Item frm a list", function(){
    let jslibs = ['React', 'Mobx']
    deepFreeze(jslibs)
    let result = util.updateItemFromList(jslibs,1,'Redux')
    let expected = ['React','Redux']
    expect(result).toEqual(expected)
});