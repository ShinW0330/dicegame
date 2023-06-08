import { useState } from 'react';
import Button from './Button';
import HandButton from './HandButton';
import HandIcon from './HandIcon';
import { compareHand, generateRandomHand } from './utils';


// 두 카드 승리 비교 
function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return '승리';
  if (comparison < 0) return '패배';
  return '무승부';
}



function App() {
  const [hand, setHand] = useState("rock");
  const [otherHand, setOtherHand] = useState("rock");
  const [gameHistory , setGameHistory] = useState([]);
  const [meSocre, setMeScore] = useState(0);
  const [otherSocre, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);
  

  // 가위 바위 보 선택 
  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    console.log(nextHand);
    console.log("nextOther = " + nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand)
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
  
    if(comparison > 0) setMeScore(meSocre +bet);
    if(comparison < 0) setOtherScore(otherSocre +bet);
    console.log(gameHistory);
  };
  
  
  // 초기화 
  const handleClearClick = () => {
    setHand('rock');
    setOtherHand('rock');
    setGameHistory([]);
    setMeScore(0);
    setOtherScore(0);
    setBet(1);
  };
  
  // 배점 설정 
  const handleBetChange = (event) => {
    const chkValue = event.target.value; // string 타입 
    //console.log(typeof chkValue);
    const betNumber = Number(chkValue);
    setBet(betNumber);
  }

  
  return (


      <div>
        <Button onClick={handleClearClick}>처음부터</Button>
        <div>
          {meSocre} : {otherSocre}
        </div>
      <div>
        <HandIcon value={hand}></HandIcon>
        VS
        <HandIcon value={otherHand}></HandIcon>
        <div>
          <input type="number" value={bet} min={1} max={9} onChange={handleBetChange} />
        </div>
        <p>승부 기록 : {gameHistory.join(',')}</p>
      </div>
      
      <HandButton value="rock" onClick={handleButtonClick} />
      <HandButton value="scissor" onClick={handleButtonClick} />
      <HandButton value="paper" onClick={handleButtonClick} />
    </div>
  );
}

export default App;
