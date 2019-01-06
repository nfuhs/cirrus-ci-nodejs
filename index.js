const packageDetails = require('./package.json');

console.log(" Hello World nodejs Cirrus CI App\n Using:")

console.log('Platform: ', process.platform);
console.log('Node version: ', process.version);
console.log('Node dependencies: ', process.versions);
console.log('Server version: ', packageDetails.version);