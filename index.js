const server = require('./api/server');

const port = 8000;

server.listen(port, () => {
    console.log(`server is running on ${port}`)
});