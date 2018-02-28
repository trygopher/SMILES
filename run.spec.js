const {getLongestChain} = require('./run');
const assert = require('assert');

assert(getLongestChain('CC(C(C))') === 4);
assert(getLongestChain('CCC(C)C(C)C') === 5);
assert(getLongestChain('CC(C)(C)C(C)(C)C') === 4);
assert(getLongestChain('CCCC(C)C') === 5);
assert(getLongestChain('CC(C)C(C(C)C)C(C)C') === 5);
assert(getLongestChain('CC(C)CCCC(C)C(C)C') === 8);
// assert(getLongestChain('C(CC(C)C(C)C)CC(C)C') === 8);
assert(getLongestChain('C(C)CC(C(C)C(C)CC)C') === 7);
