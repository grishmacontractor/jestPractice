import Product from '../productFile';
import ProductConsumer from './product-consumerFile';
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
    // Show that mockClear() is working:
    expect(Product).not.toHaveBeenCalled();

const productConsumerVar = new ProductConsumer();
// Constructor should have been called again:
expect(Product).toHaveBeenCalledTimes(1);

productConsumerVar.getProductMenu().getMenu();

// mock.instances is available with automatic mocks:
const mockProductInstance = Product.mock.instances[0];
const mockGetProductMenu = mockProductInstance.getProductMenu();

expect(mockGetProductMenu).toHaveBeenCalledTimes(1);
});