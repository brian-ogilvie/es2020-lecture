import { spacer } from './utils.mjs';

const hugeInt = Number.MAX_SAFE_INTEGER;
const squareHugeInt = hugeInt * hugeInt;
console.log(squareHugeInt);
console.log(squareHugeInt + 1);

spacer();

const hugeBigInt = BigInt(Number.MAX_SAFE_INTEGER);
const squareHugeBigInt = hugeBigInt * hugeBigInt;
console.log(squareHugeBigInt);
console.log(squareHugeBigInt + 1n);

/*
  How to create a BigInt
  1. with a literal, e.g. 123456789n
  2. BigInt constructor with an int
    BigInt(123456789)
  3. BigInt constructor with a string representing an int
    BigInt("123456789")

  Note: Cannot operate on BigInt and Number together.
  Must convert them to same type

  100n + 100 -> throws
  100n + 9n -> works
*/
