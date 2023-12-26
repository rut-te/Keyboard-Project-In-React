import { useState } from 'react';
import './App.css';
import Keyboard from './components/js/Keyboard.jsx';
import TextArea from './components/js/TextArea.jsx';
import textStyleGroup from './data/textStyleGroup.jsx';
import { languages } from './data/keyBoardArrays.jsx';

export const actionStack=[];//מחסנית עבור control z

function App() {
  const [text,setText]=useState([new textStyleGroup()]);//שומר אוביקטים עבור הסטייל
  const [settings, setSettings]=useState({languageIndex: 0, allIsChosen:false});// הגדרת מקלדת, שפה והכול נבחר
  try{
    return (
    <div className="App">
      <TextArea  text={text}/>
      <Keyboard languageArr={languages[settings.languageIndex].language}
       text = {text} setText={setText} setSettings={setSettings} settings={settings}/>
    </div>
  );}
  catch(e){
    console.log(e);
    alert(e.message);
  }
}

export default App;
