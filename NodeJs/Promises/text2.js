const http = require("http");
const fs = require("fs")
const PORT = 2025;
const host = "localhost"
const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-Type": "text/plain" });
    const myReadStream = fs.createReadStream("./text2.txt", "utf8");
    myReadStream.pipe(res)
});

server.listen(PORT, host, () => {
    console.log(`server is listening on host: ${host}:${PORT}`);
})  