require('dotenv').config();
const router = require("../config/router")
const axios = require("axios");

const API = process.env.API;
const token = process.env.token;

router.post("/languages", async (req, res) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    const { languagesUrl } = req.body;

    try {
        const response = await axios.get(languagesUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json', // Add headers as needed
            },
        });
        
        console.log("languagesData -> OK");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching languages data' });
    }
});

module.exports = router;