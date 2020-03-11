import { Exception } from '../src';

// -----
// Tests
// -----

describe('Exception', () => {
  describe('constructor()', () => {
    test('accepts no parameters', () => {
      const exception = new Exception();
      expect(exception.message).toBe('');
      expect(exception.code).toBeUndefined();
      expect(exception.context).toBeUndefined();
      expect(exception.stack).toBeDefined();
    });

    test('accepts a message parameter', () => {
      const exception = new Exception('a message');
      expect(exception.message).toBe('a message');
      expect(exception.code).toBeUndefined();
      expect(exception.context).toBeUndefined();
      expect(exception.stack).toBeDefined();
    });

    test('accepts a code parameter', () => {
      const exception = new Exception('a message', 'code');
      expect(exception.message).toBe('a message');
      expect(exception.code).toBe('code');
      expect(exception.context).toBeUndefined();
      expect(exception.stack).toBeDefined();
    });

    test('accepts a context parameter', () => {
      const context = { key: 'value ' };
      const exception = new Exception('a message', 'code', context);
      expect(exception.message).toBe('a message');
      expect(exception.code).toBe('code');
      expect(exception.context).toBe(context);
      expect(exception.stack).toBeDefined();
    });
  });

  describe('fromError()', () => {
    test('accepts an error parameter', () => {
      const error = new Error('an error message');
      const exception = Exception.fromError(error);
      expect(exception.message).toBe('an error message');
      expect(exception.code).toBeUndefined();
      expect(exception.context).toBeUndefined();
      expect(exception.stack).toBe(error.stack);
    });

    test('accepts an Exception instance as an error parameter', () => {
      const innerException = new Exception('an error message');
      const exception = Exception.fromError(innerException);
      expect(exception.message).toBe('an error message');
      expect(exception.code).toBeUndefined();
      expect(exception.context).toBeUndefined();
      expect(exception.stack).toBe(innerException.stack);
    });

    test('accepts a code parameter', () => {
      const error = new Error('an error message');
      const exception = Exception.fromError(error, 'code');
      expect(exception.message).toBe('an error message');
      expect(exception.code).toBe('code');
      expect(exception.context).toBeUndefined();
      expect(exception.stack).toBe(error.stack);
    });

    test('accepts a context parameter', () => {
      const error = new Error('an error message');
      const exception = Exception.fromError(error, 'code', { error });
      expect(exception.message).toBe('an error message');
      expect(exception.code).toBe('code');
      expect(exception.context).toEqual({ error });
      expect(exception.stack).toBe(error.stack);
    });
  });
});
