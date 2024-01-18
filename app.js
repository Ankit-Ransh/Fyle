// require('dotenv').config();

// const express = require('express');
// const cors = require('cors');
// const https = require('https');

// const API = "https://api.github.com/users/";

// const app = express();
// app.use(express.json());
// app.use(cors());

// const token = process.env.token;

// app.post('/api/user', async (req, res) => {
//     const { username } = req.body;
//     console.log(username);
//     const apiUrl = `${API}${username}`;
//     console.log(apiUrl);

//     try {
//         const response = await fetch(apiUrl, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });

//         if (!response.ok) {
//             throw new Error(response.statusText);
//         }

//         const data = await response.json();
//         console.log("userData -> OK");
//         res.json(data);
//     }
//     catch (error) {
//         res.status(500).json({ error: 'Error fetching GitHub user data' });
//     }
// });

// app.post('/api/repos', async (req, res) => {
//     let { username, pageNumber, reposPerPage } = req.body;
//     console.log(req.body);
//     const apiUrl = `${API}${username}/repos?page=${pageNumber}&per_page=${reposPerPage}`;
//     console.log(apiUrl);

//     try {
//         const response = await fetch(apiUrl, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });

//         if (!response.ok) {
//             throw new Error(response.statusText);
//         }

//         const data = await response.json();
//         console.log("reposData -> OK");
//         res.json(data);
//     } 
//     catch (error) {
//         res.status(500).json({ error: 'Error fetching GitHub user repositories' });
//     }
// });

// app.post('/api/languages', async (req, res) => {
//     const { languagesUrl } = req.body;

//     try {
//         const response = await fetch(languagesUrl, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });

//         if (!response.ok) {
//             throw new Error(response.statusText);
//         }

//         const languagesData = await response.json();
//         console.log("languagesData -> OK");
//         res.json(languagesData);
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching languages data' });
//     }
// });

// app.listen(8080, () => {
//     console.log(`Server is running on port`);
// });


require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const API = "https://api.github.com/users/";

const app = express();
app.use(express.json());
app.use(cors()); // Allow all origins. Adjust as needed.

const token = process.env.token;

app.post('/api/user', async (req, res) => {
    const { username } = req.body;
    const apiUrl = `${API}${username}`;

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching GitHub user data' });
    }
});

app.post('/api/repos', async (req, res) => {
    const { username, pageNumber, reposPerPage } = req.body;
    const apiUrl = `${API}${username}/repos?page=${pageNumber}&per_page=${reposPerPage}`;

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching GitHub user repositories' });
    }
});

app.post('/api/languages', async (req, res) => {
    const { languagesUrl } = req.body;

    try {
        const response = await axios.get(languagesUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching languages data' });
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
