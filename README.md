# Exception

An Exception base class for Javascript/Typescript that extends the built-in Error class with code and context properties.

## Install

For npm users:

```
npm install @forward-steady/exception
```

for yarn users:

```
yarn add @forward-steady/exception
```

## Usage

The Exception class derives from the Error class and can be use in a similiar manner. It includes optional code and context properties that can be provided in the constructor.

```
const message = 'Unable to perform action X';
const code = 'action-x-failed';
const context = {
  recordId: 5003
}

throw new Exception(message, code, context);
```

Since the Exception class derives from the Error class, it will have a stack property just as an Error instance would.

```
const exception = new Exception(message, code, context);
console.log(exception.stack)
```

It is also easy to convert an Error instance into an Exception instance and preserve the message and stack trace of the error. This allows a code and context to be include with the error message and stack trace.

```
const error = new Error(message)
const exception = Exception.fromError(error, code, context);

expect(exception.message).toBe(error.message);
expect(exception.stack).toBe(error.stack);

expect(exception.code).toBe(code);
expect(exception.context).toBe(context);
```
