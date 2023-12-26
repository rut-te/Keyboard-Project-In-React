import '../css/BoardKey.css';
import BasicKey from './BasicKey.jsx';
import { writeChar } from '../../data/boardKeyFunctions.jsx';

//מקש מקלדת
function BoardKey({ char, className, set, funcToDo = writeChar, setSettings = undefined }) {
  try
  {return (
    <BasicKey className={className} text={char} onClick={() => funcToDo(char, set, setSettings)} />
  );}
  catch(e){
    console.log(e);
    alert(e.message);
  }
}

export default BoardKey;