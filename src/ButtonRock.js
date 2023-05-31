function ButtonRock({children , onClick}){
  return (
    <button onClick={onClick}>{children}</button>
  );
}

export default ButtonRock;