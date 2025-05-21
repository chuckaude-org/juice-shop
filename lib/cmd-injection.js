// https://documentation.blackduck.com/bundle/coverity-docs/page/checker-ref/checkers/NO/os_cmd_injection.html

const express = require("express");
const app = express();

app.get("/run", function run(req, res, next) {  // OS_CMD_INJECTION defect
  require("child_process").exec(req.query.cmd);
  res.send("Done");
});
app.listen(1337, function() {
  console.log("Express listening...");
});
