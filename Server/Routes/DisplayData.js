const express = require("express");
const router = express.Router();

router.post("/fooddata", (req, res) => {
    try {
        // console.log(global.dishes)
        res.status(200).json({ dishes: global.dishes, Categories: global.Categories }); 
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
