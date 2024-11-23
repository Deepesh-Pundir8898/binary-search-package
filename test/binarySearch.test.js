const binarySearch = require('../binarySearch');

describe('Binary Search', async () => {
    const { expect } = await import('chai');

    it('should return the correct index for a found target', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 3)).to.equal(2);
    });

    it('should return -1 for a target not in the array', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 6)).to.equal(-1);
    });

    it('should handle an empty array', () => {
        expect(binarySearch([], 1)).to.equal(-1);
    });
});