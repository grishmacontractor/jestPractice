//testing array keeping immutability in javascript
var addItemToList = function (list, newItem) {
   // list.push(newItem)
    return list.concat(newItem);

}

var removeItemToList = function (list, index) {
    //list.splice(index,1)
    return list.filter(function(listItem,i){
        return i !== index
    });
}

var updateItemFromList = function (list,index,newItem) {
   // list[index] = newItem
    //clone array
    var newList = list.slice();
    //new value add
    newList[index] = newItem
    //new array returns
    return newList
}

module.exports = {
    addItemToList,
    removeItemToList,
    updateItemFromList
}