const express = require("express");
const router = express.Router();

router.post("/fooddata", (req, res) => {
    try {
        console.log(global.dishes)
        res.json(global.dishes); 
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
