import '../css/Keyboard.css';
import BasicKey from './BasicKey.jsx';
import BoardKey from './BoardKey.jsx';
import StyleKey from './StyleKey';
import { color } from '../../data/boardKeyFunctions.jsx';
import { tags, charachters, numbers, Style } from '../../data/keyBoardArrays.jsx';

function Keyboard({ languageArr, setText, setSettings, text, settings }) {
  try{
    return (
    <div className='keyboard'>
      {numbers.map((obj, i) => {
        let name = `numberKey number${i + 1}`;
        return (<BoardKey className={name} char={obj.char} key={`#${obj.char}`} set={setText} funcToDo={obj.func} />);
      })}
      {charachters.map((obj, i) =>
        (<BoardKey className={`charachterKey number${i + 1}`} char={obj.char} key={`#${obj.char}`} set={setText} funcToDo={obj.func} />))}
      {languageArr.map((obj, i) => {
        let name = `languageKey${Math.floor(i / 9)} number${Math.floor(i % 9) + 1}`;
        return (<BoardKey className={name} char={obj.char} key={`#${obj.char}`} set={obj.char == "⇧" ? setSettings : setText} funcToDo={obj.func} />);
      })}
      {tags.map((obj, i) => {
        let name = obj.char === " " ? "space" : "tagKey";
        name = i > 2 ? `${name} number${i + 4}` : `${name} number${i + 1}`
        return (<BoardKey className={name} char={obj.char} key={`#${obj.char}`} set={setText} funcToDo={obj.func} setSettings={setSettings}/>);
      })}
      <input type="color" className='styleKey number1' onChange={input => color(input, setText, settings, setSettings)} />
      {Style.map((styling, i) => (<StyleKey className={`styleKey number${i + 2} ${styling.discription}`}
        discreption={styling.discription} key={`#${styling.discription}`} text={text}
        setText={setText} onClick={styling.apply} allIsChosen={settings.allIsChosen} setSettings={setSettings} />))}
      <BasicKey className='styleKey number7' onClick={() => { setSettings((settings) => ({ ...settings, languageIndex: 3 })); }} text="😉" />
      <BasicKey className='styleKey number8' onClick={() => {
        setSettings((settings) => ({ ...settings, languageIndex: settings.languageIndex >= 1 ? 0 : settings.languageIndex + 1 }));
      }} text="🌍" />
    </div>
  );}
  catch(e){
    console.log(e);
    alert(e.message);
  }
}

export default Keyboard;
