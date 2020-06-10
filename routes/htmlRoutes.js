const path = require("path");
const router = require("express").Router()




  router.get("/service-worker.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/src/js/service-worker.js"));
  });  

  router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });

  module.exports = router;