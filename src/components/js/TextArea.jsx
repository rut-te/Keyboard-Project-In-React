import "../css/TextArea.css"
import TextStyleGroup from "./TextStyleGroup";

//יצירת תיבה להכנסת הטקסט
function TextArea({text, setText}) { 
  let config = 0;
    try{
      return (
      <div onSelect = {e=>{console.log(e); console.log(window.getSelection())}} className="TextArea">
        {text.map(text=>
          (<TextStyleGroup key={config++} textStyle = {text} changeText = {setText}/>))}
      </div>
    );}
    catch(e){
      console.log(e);
      alert(e.message);
    }
  }
 
export default TextArea;
