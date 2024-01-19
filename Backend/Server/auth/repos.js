require('dotenv').config();
const router = require("../config/router")
const axios = require("axios");

const API = process.env.API;
const token = process.env.token;

router.post("/repos", async (req, res) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    const { username, pageNumber, reposPerPage } = req.body;
    const apiUrl = `${API}${username}/repos?page=${pageNumber}&per_page=${reposPerPage}`;

    console.log(req.body);

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json', // Add headers as needed
            },
        });

        console.log("reposRepos -> OK");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching GitHub user repositories' });
    }
});

module.exports = router;