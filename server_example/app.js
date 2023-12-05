const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const server = express();
const port = process.env.PORT || 8080;

server.use(cors());
server.use(bodyParser.json());

const data = {
    User: [
        {
            userid: "test123",
            username: "홍길동"
        }
    ]
};

server.listen(port, function (req, res) {
    console.log("server run: " + port);
});

server.post("/", function (req, res) {
    const { user_id, email, password } = req.body;

    // test data 받는지 확인
    console.log('Received data:', { user_id, email, password });
});
