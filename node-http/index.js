const http = require("node:http")
const fs = require("node:fs")

const server = http.createServer((req, res)=>{
  if(req.url === "/"){
    res.writeHead(200, {"Context-Type": "text/plain"})
    res.end("Home Page")
  } else if (req.url === "/about"){
    res.writeHead(200, {"Context-Type": "text/plain"})
    res.end("About page")
  } else if (req.url === "/api"){
    res.writeHead(200, {"Context-Type": "application/json"})
    res.end(JSON.stringify({
      firstName: "Bruce",
      lastName: "Wayne"
    }))
  } else {
    res.writeHead(404)
    res.end("Page Not Found Budy")
  }
})

server.listen(3000, () => {
  console.log("Server running on port 3000");
})
