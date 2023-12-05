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
      user_id: "son",
      user_name: "손흥민",
      nickname: "sonny",
      email: "son@example.com",
      password: "password1",
      distance: 120,
    },
    {
      user_id: "lee",
      user_name: "이강인",
      nickname: "lee",
      email: "lee@example.com",
      password: "password2",
      distance: 100,
    },
    {
      user_id: "hwang",
      user_name: "황희찬",
      nickname: "hwang",
      email: "hwang@example.com",
      password: "password3",
      distance: 110,
    }
  ]
};

server.listen(port, function (req, res) {
  console.log("server run: " + port);
});

// 회원가입 데이터
server.post("/signup", function (req, res) {
  const { user_name, user_id, email, password } = req.body;

  const newUser = {
    user_id,
    user_name,
    distance: 0,
    rank: data.User.length + 1
  };

  data.User.push(newUser);

  console.log('Received data:', { user_name, user_id, email, password });

  updateRankings();

  res.json({ success: true });
});

// 랭킹 데이터
server.get("/ranking", function (req, res) {
  updateRankings();
  res.json(data);
});

// 랭킹 업데이트
function updateRankings() {
  data.User.sort((a, b) => b.distance - a.distance);

  data.User.forEach((user, index) => {
    user.rank = index + 1;
  });
}
