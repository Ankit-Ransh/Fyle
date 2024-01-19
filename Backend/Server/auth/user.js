require('dotenv').config();
const router = require("../config/router")
const axios = require("axios");

const API = process.env.API;
const token = process.env.token;

router.post("/user", async (req, res) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    const { username } = req.body;
    const apiUrl = `${API}${username}`;

    try{
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json', // Add headers as needed
            },
        });

        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error fetching GitHub user data' });
    }
});

module.exports = router;