/**
 * 3) NODE CORE MODULES OVERVIEW
 

/*
CORE MODULES:

1. console → logging
2. process → system + CLI args
3. os → system information
4. util → utilities (formatting, debug)
*/

console.log("\n--- CORE MODULES INTRO ---");


/**
 * 4) CORE MODULES FULL PROGRAM (50+ lines)
***/

const os = require("os");
const util = require("util");

/* PROCESS ARGV */
console.log("\n--- PROCESS ARGV ---");
console.log(process.argv);

/* SIMPLE ARGUMENT HANDLING */
const args = process.argv.slice(2);
console.log("User args:", args);

/* OS INFORMATION */
console.log("\n--- OS INFO ---");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU count:", os.cpus().length);
console.log("Free memory:", os.freemem());
console.log("Total memory:", os.totalmem());

/* UTIL FORMATTING */
const formatted = util.format(
  "System: %s | CPUs: %d | Platform: %s",
  os.type(),
  os.cpus().length,
  os.platform()
);

console.log("\n--- UTIL FORMAT ---");
console.log(formatted);

/* MORE LOGS */
console.log("\nApp started successfully");
console.warn("This is a warning example");
console.error("This is an error example");

/**
 * 5) CONSOLE MODULE METHODS
 ***/

console.log("\n--- CONSOLE METHODS ---");

console.log("Normal log message");
console.warn("Warning message");
console.error("Error message");

/* TABLE */
console.table([
  { name: "Node", type: "runtime" },
  { name: "React", type: "library" }
]);

/* TIME */
console.time("loop");

for (let i = 0; i < 100000; i++) {}

console.timeEnd("loop");


/**
 * 6) PROCESS MODULE (argv, env, exit)
 ***/

console.log("\n--- PROCESS MODULE ---");

console.log("Arguments:", process.argv);
console.log("Environment:", process.env.NODE_ENV || "not set");

// Example exit (commented to avoid stopping script)
// process.exit(0);


/**
 * 7) OS MODULE DETAILS
***/

console.log("\n--- OS MODULE ---");

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPUs:", os.cpus().length);
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());


/***
 * 8) UTIL MODULE EXAMPLES
***/

console.log("\n--- UTIL MODULE ---");

// format
console.log(util.format("Hello %s, number: %d", "User", 42));

// inspect
const obj = { a: 1, b: { c: 2 } };
console.log(util.inspect(obj, { depth: 2 }));

// callbackify example
async function asyncFn() {
  return "Hello from async";
}

const callbackFn = util.callbackify(asyncFn);

callbackFn((err, result) => {
  if (err) throw err;
  console.log("Callbackified result:", result);
});


/**
 * 9) FULL SYSTEM ANALYSIS PROGRAM
**/

console.log("\n--- SYSTEM ANALYSIS ---");

function systemReport() {
  return {
    platform: os.platform(),
    arch: os.arch(),
    cpus: os.cpus().length,
    memoryFree: os.freemem(),
    memoryTotal: os.totalmem(),
    nodeVersion: process.version
  };
}

const report = systemReport();

console.log(util.format("System Report: %j", report));


/*
 * 10) NODE.JS REVIEW SECTION
/*
Node.js is:
- JavaScript runtime (outside browser)
- used for backend development
- used for APIs, servers, CLI tools

CORE FEATURES:
- event-driven
- non-blocking I/O
- fast performance

MODULES USED:
- console → debugging
- process → system + args
- os → system info
- util → formatting tools
*/

console.log("\nNode.js allows backend development using JavaScript");

console.log("\n--- END OF FILE ---");