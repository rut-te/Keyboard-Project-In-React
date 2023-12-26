import '../css/Choices.css'
import { actionStack } from '../../App.jsx';
import action from '../../data/action.jsx';

const sStyles = ["9px", "10px", "12px", "14px", "16px", "20px", "24px", "28px", "34px", "40px"];
const fStyles = ["Cochin", "Tahoma", "Cambria", "Courier", "Georgia", "Times", "serif", "arial", "monospace", "cursive"];

//מראה אפשריות בחירה של פונט וגודל
function Choices({ listName, changeStyle, setShowOptions, allIsChosen, setSettings }) {
    let list = listName === "font" ? fStyles : sStyles;
    try{
    return (
        <ul className='choices'>
            {list.map((style, index) => (
                <li
                    key={index}
                    className={`${style}`}
                    onClick={() => changeTheStyle(style, changeStyle, allIsChosen, setShowOptions, listName, setSettings)}
                > {style}
                </li>
            ))
            }
        </ul >
    );}
    catch(e){
        console.log(e);
        alert(e.message);
      }
}

export default Choices;

//שינוי גודל או סוג גופן
function changeTheStyle(style, changeStyle, allIsChosen, setShowOptions, listName, setSettings) {
    changeStyle(text => {
        const updatedText = [...text];
        if (allIsChosen) {//במקרה שנבחר control a
            return changeFontStyleAll(text, setSettings, setShowOptions, listName, style, updatedText);
        }
        const lastObject = {//שמירת האוביקט האחרון עבור Control z
            ...text[updatedText.length - 1],
            styleSize: listName === "fontsize" ? style : updatedText[updatedText.length - 1].styleSize,
            styleFont: listName === "font" ? style : updatedText[updatedText.length - 1].styleFont, text: ""
        };
        actionStack.push(new action('styleFont', listName == "fontsize" ? updatedText[updatedText.length - 1].styleSize : updatedText[updatedText.length - 1].styleFont));
        if (updatedText[updatedText.length - 1].text == "") {//בדיקה אם הספאן האחרון ריק
            updatedText[updatedText.length - 1] = lastObject;}
        else {
            updatedText.push(lastObject);
        }
        setShowOptions(false);
        return updatedText;
    })
}

//שינוי במקרה שהנבחר Control a
function changeFontStyleAll(text, setSettings, setShowOptions, listName, style, updatedText) {
    actionStack.push(new action('ctrl-aFont', [...text]));
    text = text.map(t => {
        return {
            ...t,
            styleSize: listName === "fontsize" ? style : t.styleSize,
            styleFont: listName === "font" ? style : t.styleFont
        }
    })
    setSettings(last => { return { ...last, allIsChosen: false } });
    setShowOptions(false);
    return [...text];
}
