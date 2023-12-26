import { useState } from 'react';
import '../css/StyleKey.css';
import BasicKey from './BasicKey.jsx';
import Choices from './Choices.jsx';

//כפתורי עיצוב סטייל
function StyleKey({ discreption, setText, onClick, className, setSettings, allIsChosen }) {
  const [showOptions, setShowOptions] = useState(false);//האם להראות תצוגת אפשרויות בחירה
  const funcToDo = (discreption == "fontsize" || discreption == "font") ? setShowOptions : setText;
  try{
    return (
    <>
      <BasicKey className = {className} text={discreption} onClick={() => { onClick(funcToDo, setSettings, allIsChosen); }} />
      {showOptions && (<Choices listName={`${discreption}`} changeStyle={setText}
       setShowOptions={setShowOptions} setSettings = {setSettings} allIsChosen={allIsChosen}/>)}
    </>
  );}
  catch(e){
    console.log(e);
    alert(e.message);
  }
}

export default StyleKey;