import getStr, {data} from '../chkstr'
//import data from './chkstr'
test('returns a string', () => {
    expect(getStr("hello")).toBe("hello");
});

test('object assignment', () => {
    const data = {one: 1};
data['two'] = 2;
expect(data).toEqual({one: 1, two: 2});
});
