import Board from './Board';

function DiceApp(){
  return(
    <div>
      <Board name="나" color="blue"></Board>
      <Board name="상대" color="red"></Board>
    </div>
  )
}

export default DiceApp;