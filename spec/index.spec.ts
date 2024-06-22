import { List } from '../src/index';

describe('List', () => {
    it('should not add element when is read-only', () => {
        const list = new List(true);
        
        list.add(1);
        
        const expectedElements: any[] = [];
        expect(list.elements()).toEqual(expectedElements);
    });
    
    it('should add element', () => {
        const list = new List(false);
        
        list.add(1);
        
        const expectedElements: any[] = [1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        expect(list.elements()).toEqual(expectedElements);
    });
    
    it('should grow list if elements exceed size', () => {
        const list = new List(false);

        for (let value of Array.from(Array(11).keys()).map(x => x + 1)) {
            list.add(value);
        }

        const expectedElements: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        expect(list.elements()).toEqual(expectedElements);
    });
});
