import Product from './productFile'
export default class ProductConsumer {
    constructor()
    {
        this.Product = new Product();
    }

    getProductMenu(){
        console.log('getProductMenu of productConsumerFile executed......')
        this.Product.getMenu()
    }
}
