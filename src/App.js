import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{width: "100%", height: "100%", margin : "0px"}}>
    <div style={{backgroundColor: "rgb(33, 41, 71)", width: "100%", height: "5vh", display:"flex", justifyContent: "end"}}>
        <div style={{height: "5vh"}}>
             <button style={{height: "100%", backgroundColor: "transparent"}}>
            로그인</button>
            <button style={{backgroundColor: "rgb(33, 35, 43)", height: "100%", color: "white"}}>
            회원가입</button>
            </div>
    </div>
    <div style={{backgroundColor: "rgb(48, 51, 73)", width: "100%", height: "95vh", display:"flex", justifyContent: "center"}}>
        <div style={{height: "minContent", width: "minContent", marginTop: "100px"}}>
            <div style={{color: "white", width: "300px", fontSize: "small"}}>사용자 이름
            </div>
            <input type="text" name="st_id1" placeholder="예)최탐김" style={{width: "300px", height: "25px", borderRadius: "5px", border: "5px double red"}}/>
            <div style={{color: "white", width: "300px", fontSize: "small"}}>이메일
            </div>  
            <input type="text" name="st_id2" placeholder="talmkc11@naver.com" style={{width: "300px", height: "25px", border: "5px double red"}}/>
            <div style={{color: "white", width: "300px", fontSize: "small"}}>패스워드
            </div>
            <input type="password" name="st_id3" placeholder="비밀번호를 6자리 이상 입력하세요." style={{width: "300px", height: "25px", border: "5px double red"}}/>
            <div style={{color: "white", width: "300px", fontSize: "small"}}>패스워드 확인
            </div>
            <input type="password" name="st_id3" placeholder="비밀번호를 한 번 더 입력하세요." style={{ width: "300px", height: "25px", border: "5px double red"}}/>
            <button style={{backgroundColor: "white", width: "49%", height: "40px"}}>회원가입
            </button>
            <button style={{backgroundColor: "white", width: "49%", height: "40px"}}>취소
            </button>
        </div>
    </div>
</div>
  );
}

export default App;
