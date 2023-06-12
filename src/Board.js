import {useState} from 'react';
import Button from './Button';
import Dice from './Dice';

function random(n){
  return Math.ceil(Math.random() * n);
}

function Board({name, color}) {
  // 숫자 state 설정
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);
  //const [dot] = useState("");
  //const [reset, setReset] = useState(1);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    //console.log(sum);
    const gameHistoryCopy = [...gameHistory];
    gameHistoryCopy.push(nextNum);
    setGameHistory(gameHistoryCopy)
  };
  const handleClearClick = () => {
    setNum(1); 
    setSum(0); 
    setGameHistory([]);

  }

  return (
    <div>
      <div>
        <Button onClick ={handleRollClick}>던지기</Button>
        <Button onClick ={handleClearClick}>처음부터</Button>
      </div>
        <h2>{name}</h2>
      <Dice color={color} num={num}></Dice>
      <h2>총점</h2>
      <p>{sum}</p>
      <h2>기록</h2>
      <p>{gameHistory.join(', ')}</p>
    </div>
  );
}

export default Board;

