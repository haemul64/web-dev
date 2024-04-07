const fs = require("fs"); // 파일 시스템 패키지
const path = require("path"); // 파일 경로 설정 관련 패키지

const express = require("express"); // express는 함수
const app = express();

app.use(express.urlencoded({ extended: false }));
// app.use(): 미들웨어 등록 함수 / 요청의 종류에 관계없이 어떤 종류의 데이터가 들어오는지 확인하고 해당 요청을 처리함
// urlencoded(): 요청에서 들어온 데이터를 자바스크립트 객체로 변환
// {extened: false}: 에러 방지를 위해 추가(???)

// request: 요청에 대한 추가 정보를 제공
// response: 응답을 준비하는 기능을 제공

// route(route handler) - 특정 http 메서드 및 경로를 찾아 일부 로직을 실행하는 요청 핸들러
// http status code는 따로 설정하지 않으면 자동으로 200 리턴
app.get("/currenttime", function (req, res) {
    res.send("<h1>" + new Date().toISOString() + "</h1>"); // 응답을 보내는 메서드
});

app.get("/", function (req, res) {
    res.send(
        '<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button></form>'
    );
}); // form을 제출하면 action 경로로 form에 대한 모든 정보를 전송함

app.post("/store-user", function (req, res) {
    const userName = req.body.username;

    const filePath = path.join(__dirname, "data", "users.json"); // 파일 경로
    const fileData = fs.readFileSync(filePath); // 파일 -> 텍스트로 읽음
    const existingUsers = JSON.parse(fileData); // 제이슨 파일 -> 원시 자바스크립트 객체 또는 배열로 변환

    existingUsers.push(userName); // 배열에 새로운 항목 추가

    fs.writeFileSync(filePath, JSON.stringify(existingUsers)); // 자바스크립트 타입 -> 원시 텍스트 형태로 써야함

    res.send("<h1>Username stored!</h1>");
});

app.get("/users", function (req, res) {
    const filePath = path.join(__dirname, "data", "users.json"); // 파일 경로
    const fileData = fs.readFileSync(filePath); // 파일 -> 텍스트로 읽음
    const existingUsers = JSON.parse(fileData); // 제이슨 파일 -> 원시 자바스크립트 객체 또는 배열로 변환

    let responseData = "<ul>";

    for (const user of existingUsers) {
        responseData += "<li>" + user + "</li>";
    }

    responseData += "</ul>";

    res.send(responseData);
});

app.listen(3000);
