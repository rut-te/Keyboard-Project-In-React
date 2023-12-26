import '../css/BasicKey.css';

//כפתור בסיסי
function BasicKey({text,onClick, className}) {
  try{
    return (
    <button className = {`BasicKey ${className}`} onClick={onClick} key={text}>{text}</button>
  );}
  catch(e){
    console.log(e);
    alert(e.message);
  }
}

export default BasicKey;