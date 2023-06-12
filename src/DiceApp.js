import Board from './Board';
import Button from './Button';
import {useState} from 'react';

function random(n){
  return Math.ceil(Math.random() * n);
}

function DiceApp(){
  // 숫자 state 설정
  const [gameMyHistory, setGameMyHistory] = useState([]);
  const [gmaeOtherHistory, setGameOtherHistory] = useState([]);

    const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
  
    setGameMyHistory([...gameMyHistory, nextMyNum])
    setGameOtherHistory([...gmaeOtherHistory, nextOtherNum]);

    /*  ->  setOtherGameHistory([...otherGameHistory, nextOtherNum]); 와 같음
    const otherGameHistoryCopy = [...otherGameHistory];
    otherGameHistoryCopy.push(nextOtherNum);
    setOtherGameHistory(otherGameHistoryCopy);
    */
  };

  const handleClearClick = () => { 
    setGameMyHistory([]);
    setGameOtherHistory([]);

  }
  return(
    <div>
      <div>
        <Button onClick ={handleRollClick}>던지기</Button>
        <Button onClick ={handleClearClick}>처음부터</Button> 
      </div>
      <div>
        <Board name="나" color="blue" gameHistory={gameMyHistory}></Board>
        <Board name="상대" color="red" gameHistory={gmaeOtherHistory}></Board>
      </div>
    </div>
  )
}

export default DiceApp;