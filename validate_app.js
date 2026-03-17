const fs = require('fs');
const vm = require('vm');

// Minimal Angular stub to validate syntax without requiring Angular.
const angular = {
  module(name, deps) {
    return {
      config() { return this; },
      controller() { return this; }
    };
  }
};

const code = fs.readFileSync('app.js', 'utf8');
vm.runInNewContext(code, { angular });
console.log('app.js parsed successfully');
