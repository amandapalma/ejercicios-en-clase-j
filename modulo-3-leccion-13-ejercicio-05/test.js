const fizzbuzz = require('./fizzbuzz');

describe('Fizzbuzz', () => {
  test('returns fizz when the input is multiple of 3', () => {
    const number = 3; //Arrange
    const result = fizzbuzz(number); //Act
    expect(result).toBe('fizz'); //Assert
  });
  test('returns fizz when the input is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz');
  });
  test('returns buzz when the input is multiple of 5', () => {
    const number = 5; //Arrange
    const result = fizzbuzz(number); //Act
    expect(result).toBe('buzz'); //Assert
  });
  test('returns fizzbuzz when the input is multiple of 3 and 5', () => {
    const number = 15; //Arrange
    const result = fizzbuzz(number); //Act
    expect(result).toBe('fizzbuzz'); //Assert
  });
  test('returns the same number when in other cases', () => {
    const number = 1; //Arrange
    const result = fizzbuzz(number); //Act
    expect(result).toBe(1); //Assert
    expect(result).toStrictEqual(1); //Assert
  });
});
