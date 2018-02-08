import Product from '../productFile';
import ProductConsumer from '../product-consumerFile';
jest.mock('../productFile'); // Product is now a mock constructor

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    Product.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
    const productConsumerVar = new ProductConsumer();
expect(Product).toHaveBeenCalledTimes(1);
});


it('We can check if the consumer called a method on the class instance', () => {
const productConsumerVar = new ProductConsumer();
expect(Product).toHaveBeenCalledTimes(1);

productConsumerVar.getProductMenu();

const mockProductInstanceVar = Product.mock.instances[0];
//console.log(mockProductInstanceVar);
const mockGetMenuVar = mockProductInstanceVar.getMenu;

expect(mockGetMenuVar).toHaveBeenCalledTimes(1);
});