import {run_tests} from "./test/test_util.js"
import "./test/test_import_all.js"

let total = await run_tests(() => {});
if (!total.passed) {
    throw new Error("Some tests failed");
}
