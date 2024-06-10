// http: 요청, 응답 처리 관련 패키지(객체)
const http = require("http"); // http 객체 리턴 -> 속성, 메서드 사용 가능 / node 내장 객체

function handleRequest(request, response) {
    if (request.url === "/currenttime") {
        response.statusCode = 200; // http 통신이 성공적일 때 상태 코드 = 200
        response.end("<h1>" + new Date().toISOString() + "</h1>");
    } else if (request.url === "/") {
        response.statusCode = 200; // http 통신이 성공적일 때 상태 코드 = 200
        response.end("<h1>Hello World!</h1>");
    }
} // response가 없는 서버는 계속해서 무한으로 요청을 받음 -> time out

const server = http.createServer(handleRequest); // 웹 서버 생성 - 서버 기능 포함된 객체 리턴
// node js로 자체 서버를 생성할 때, 들어오는 요청을 수신할 포트 설정
// 배포할 때는 80 또는 443으로 변경함
server.listen(3000); // 포트 번호에서 수신 대기 (포트: 서버 접속을 위한 entrypoint(진입점))
// amazon.com => 아마존 서버에 요청 전송
// amazon.com:443 => SSL
