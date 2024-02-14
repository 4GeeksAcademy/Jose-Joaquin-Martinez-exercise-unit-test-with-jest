
const { fromDollarToYen, fromYenToPound, fromEuroToDollar } = require('./app.js');


test('fromDollarToYen should convert dollars to yen correctly', () => {
    expect(fromDollarToYen(100)).toBe(14626.168224299065); // Expected result calculated using the conversion rate
  });


test('fromEuroToDollar should convert euros to dollars correctly', () => {
    expect(fromEuroToDollar(100)).toBe(107); // Expected result calculated using the conversion rate
  });

  test('fromYenToPound should convert yen to pounds correctly', () => {
    expect(fromYenToPound(10000)).toBe(55.59105431309904); // Expected result calculated using the conversion rate
  });


