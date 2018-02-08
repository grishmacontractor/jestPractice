export default class Product {
    constructor(){
        this.msg = "Food Products Detail"
    }

    getMenu()
    {
        const menu = {"pizza":200,"burger":100}
        console.log("get Menu is called.....");
        console.log(Object.values(menu));
        console.log(Object.values(menu));
    }
}
