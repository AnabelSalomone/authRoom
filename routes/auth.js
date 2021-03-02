const router = require("express").Router();
const tokens = require("../data.json");

router.post("/", (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(401).json({ msg: "No token passed" });
  }

  if(tokens.validTokens.includes(token)) {
    return res.status(200).json({msg: "AUTHORIZED!"})
  } else {
    return res.status(401).json({msg: "You shall not pass"})
  }

});

module.exports = router;
