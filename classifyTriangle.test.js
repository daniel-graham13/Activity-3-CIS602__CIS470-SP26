
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
      expect(classifyTriangle(1, 1, 1)).toBe('Equilateral'); // 1, BVT
      expect(classifyTriangle(200, 200, 200)).toBe('Equilateral'); // 2, BVT
    });

    test('should classify an Isosceles triangle', () => {
      expect(classifyTriangle(12, 12, 20)).toBe('Isosceles'); // 3, ECP
      expect(classifyTriangle(200, 200, 1)).toBe('Isosceles'); // 4, BVT
      expect(classifyTriangle(50, 50, 90)).toBe('Isosceles'); // 5, ECP
    });

    test('should classify a Scalene triangle', () => {
      expect(classifyTriangle(27, 36, 10)).toBe('Scalene'); // 6, ECP
      expect(classifyTriangle(21, 10, 25)).toBe('Scalene'); // 7, ECP
      expect(classifyTriangle(190, 195, 200)).toBe('Scalene'); // 8, BVT
    });
  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
      expect(classifyTriangle(.9, .9, .9)).toBe('Error: Input conditions C1, C2, or C3 failed.'); // 9. BVT
      expect(classifyTriangle(200.1, 200.1, 200.1)).toBe('Error: Input conditions C1, C2, or C3 failed.'); // 10, BVT
      expect(classifyTriangle(.9, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.'); // 11, BVT
      expect(classifyTriangle(10, .9, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.'); // 12, BVT
      expect(classifyTriangle(10, 10, .9)).toBe('Error: Input conditions C1, C2, or C3 failed.'); // 13, BVT
      expect(classifyTriangle(200.1, 190, 190)).toBe('Error: Input conditions C1, C2, or C3 failed.'); // 14, BVT
      expect(classifyTriangle(190, 200.1, 190)).toBe('Error: Input conditions C1, C2, or C3 failed.'); // 15, BVT
      expect(classifyTriangle(190, 190, 200.1)).toBe('Error: Input conditions C1, C2, or C3 failed.'); // 16, BVT
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
      expect(classifyTriangle(10, 20, 40)).toBe('Not a Triangle'); // 17, ECP
      expect(classifyTriangle(70, 70, 150)).toBe('Not a Triangle'); // 18, ECP
      expect(classifyTriangle(60, 90, 200)).toBe('Not a Triangle'); // 19, ECP
      expect(classifyTriangle(20, 20, 90)).toBe('Not a Triangle'); // 20, ECP
    });
});