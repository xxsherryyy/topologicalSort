const sortOrder = require('./main');
const mockData = require('./mockData');

test('sorts array of objects items into order of dependency', () => {
    console.log(mockData)
    const sortedItems = sortOrder(mockData);

    const expectedSortOrder = [
        't-shirt', 'dress shirt', 'left sock', 'right sock',
        'pants', 'belt', 'tie', 'suit jacket',
        'left shoe', 'right shoe', 'sun glasses', 'overcoat'
      ];
  expect(sortedItems).toEqual(expectedSortOrder);
});