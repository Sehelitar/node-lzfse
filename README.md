
# node-lzfse

This package provides a module for Node.js to handle compression/decompression using LZFSE algorithm.

## Installation

You can install this module with npm with the following command :

```bash
  npm install node-lzfse
```

## How to use

```ts
// Import module
const lzfse = require('node-lzfse');

const inputBuffer = Buffer.from("Sample Data");

// Compress input buffer
const compressedBuffer = lzfse.compressSync(inputBuffer);

// Decompress input buffer
const decompressedBuffer = lzfse.decompressSync(compressedBuffer);
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Authors

- [afroald / Roald Hacquebord](https://github.com/afroald)
    : Original project developper from the Github repository this project is forked from.

- [Sehelitar](https://github.com/Sehelitar)
    : Current NPM packet maintainer.

## License

[MIT](https://choosealicense.com/licenses/mit/)
