process.env.NEXT_TEST_WASM = "1";
process.argv = [process.execPath, "next", "dev", "--webpack", "--port", "3000"];
require("./node_modules/next/dist/bin/next");
