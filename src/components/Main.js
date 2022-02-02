import React, { useState } from 'react';

function Main() {
    const WordList = ["엉터리","미나리","아리랑","언청이","머나먼","나날이","마나님","듕ㅅ돗","갈무리","개나리",
    "감또개","나들목","내미손","넉걷이","넘나물","늦김치","다님길","도르리","도사리","돋을볕",
    "든해솔","도둑눈","든해솔","들때밑","땅보탬","마중물","먼지잼","바깥말","바람꽃","방울꽃",
    "보람줄","보자기","볼가심","부사리","붉덩물","비게질","비마중","산꼬대","산돌림","샘받이",
    "생인손","석얼음","섞사귐","세뚜리","손씻이","송아리","쇠구들","술적심","숫눈길","숲정이",
    "얼거리","엉그름","여우별","열구름","오래뜰","입씻이","장맞이","재넘이","졸가리","지며리",
    "집들이","집알이","콩멍석","파골집","해감내","헛삶이","흙다리","데이트","비행기","골짜기",
    "다람쥐","기상청","나룻배","모닥불","자스민","떡볶이","꾸러기","아시아","프린스","지식인",
    "테라스","비비큐","부동산","교집합","합집합","피크닉","아귀찜","크로키","수제화","파일럿",
    "자격증","가그린","제주도","경기도","미역국","바나나","메모장","클리너","드라이","드롭율"];
    const [num, setNum] = useState("");
    const [score, setScore] = useState(0);
    const [fail, setFail] = useState(0);
    const [input, setInput] = useState(""); 
    const [ifStart, setIfStart] = useState(0);
    const change = (e) => {
        setInput(e.target.value);  
    };
    const check = (e) => {
        if(ifStart==1) {
            if(e.target.value==WordList[num]) {
                setScore(score+1);
            }
            else {
                setFail(fail+1);
            }
            setInput("");
            setNum(Math.floor(Math.random() * (99 - 0)));
        }
    };
    const start = () => {
        if(ifStart==0) {
            setIfStart(1);
            setNum(Math.floor(Math.random() * (99 - 0)));
        }
    };
    return(
        <main>
            <span id="fail">틀린 개수<br/> { fail } </span>
            <span id="score">맞춘 개수<br/> { score } </span>
            <div id="view">
                <div id="NowWord">{ WordList[num] }</div>
                <button onClick={ (e) => start() }>시작</button>
            </div>
            <label>
                <div id="input" max="10">
                    <input placeholder="단어 입력" onKeyPress={ (e) => { if(e.key==='Enter') check(e) }} onChange={ (e) => change(e) } id="input" value={ input }/>
                </div>
            </label>
        </main>
    );
}

export default Main; 