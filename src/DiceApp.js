import Board from './Board';
import Button from './Button';
import {useState} from 'react';

function random(n){
  return Math.ceil(Math.random() * n);
}

function DiceApp(){
  // 숫자 state 설정
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);
  const [otherNum, setOtherNum] = useState(1);
  const [otherSum, setOtehrSum] = useState(0);
  const [otherGameHistory, setOtherGameHistory] = useState([]);

    const handleRollClick = () => {
    const nextNum = random(6);
    const nextOtherNum = random(6);
    const gameHistoryCopy = [...gameHistory];
    setNum(nextNum);
    setSum(sum + nextNum);
    gameHistoryCopy.push(nextNum);
    setGameHistory(gameHistoryCopy)
    
    
    setOtherNum(nextOtherNum);
    setOtehrSum(otherSum + nextOtherNum);
    setOtherGameHistory([...otherGameHistory, nextOtherNum]);

    /*  ->  setOtherGameHistory([...otherGameHistory, nextOtherNum]); 와 같음
    const otherGameHistoryCopy = [...otherGameHistory];
    otherGameHistoryCopy.push(nextOtherNum);
    setOtherGameHistory(otherGameHistoryCopy);
    */
  };

  const handleClearClick = () => {
    setNum(1);
    setSum(0); 
    setGameHistory([]);

    setOtherNum(1); 
    setOtehrSum(0);
    setOtherGameHistory([]);

  }
  return(
    <div>
      <div>
        <Button onClick ={handleRollClick}>던지기</Button>
        <Button onClick ={handleClearClick}>처음부터</Button> 
      </div>
      <div>
        <Board name="나" color="blue" num={num} sum={sum} gameHistory={gameHistory}></Board>
        <Board name="상대" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory}></Board>
      </div>
    </div>
  )
}

export default DiceApp;