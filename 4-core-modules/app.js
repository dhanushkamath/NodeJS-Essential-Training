// Loading custom modules (our own js files)
// For modules that are imported through npm or core modules, path isn't required.
// But for custom modules (our own js files) path is required.
// Remember you can also destructure (unpack) the components of myModule
// const {inc, dec, getCount} = require("./myModule");
const counter= require("./myModule")

counter.inc();
counter.inc();
counter.inc();

console.log(counter.getCount());

counter.dec();
counter.dec();

console.log(counter.getCount());