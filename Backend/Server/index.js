// Cors and server
const server = require("./config/middleWare")

const user = require("./auth/user");
server.use('/user', user);

const repos = require("./auth/repos");
server.use('/repos', repos);

const languages = require("./auth/languages");
server.use('/languages', languages);

server.listen(8080, () => {
    console.log("Server Connected");
});


