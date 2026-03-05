
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
      expect(classifyTriangle(1, 1, 1)).toBe('Equilateral');
      expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');
    });

    test('should classify an Isosceles triangle', () => {
      expect(classifyTriangle(12, 12, 20)).toBe('Isosceles');
      expect(classifyTriangle(200, 200, 1)).toBe('Isosceles');
      expect(classifyTriangle(50, 50, 90)).toBe('Isosceles');
    });

    test('should classify a Scalene triangle', () => {
      expect(classifyTriangle(27, 36, 10)).toBe('Scalene');
      expect(classifyTriangle(21, 10, 25)).toBe('Scalene');
      expect(classifyTriangle(190, 195, 200)).toBe('Scalene');
    });
  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
      expect(classifyTriangle(.9, .9, .9)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(200.1, 200.1, 200.1)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(.9, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(10, .9, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(10, 10, .9)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(200.1, 190, 190)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(190, 200.1, 190)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(190, 190, 200.1)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
      expect(classifyTriangle(10, 20, 40)).toBe('Not a Triangle');
      expect(classifyTriangle(70, 70, 150)).toBe('Not a Triangle');
      expect(classifyTriangle(60, 90, 200)).toBe('Not a Triangle');
      expect(classifyTriangle(20, 20, 90)).toBe('Not a Triangle');
    });
});