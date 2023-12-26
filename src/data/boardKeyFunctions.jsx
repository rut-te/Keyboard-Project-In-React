import { actionStack } from '../App.jsx';
import action from './action.jsx';
import textStyleGroup from './textStyleGroup.jsx';
import { Emoji } from './keyBoardArrays.jsx';

export function writeChar(char, setText) {
    setText(text => {
        const updatedText = [...text];
        const lastObject = updatedText[updatedText.length - 1];
        actionStack.push(new action('write', updatedText[updatedText.length - 1].text));
        updatedText[updatedText.length - 1] = { ...lastObject, text: `${lastObject.text}${char}` };
        return updatedText;
    });
}
export function controlA(char, setText, setSettings) {
    setSettings(last => { return { ...last, allIsChosen: true } });
}
export function del(char, setText) {
    setText(text => {
        if (text.length == 1 && text[0].text == "")
            return [...text];
        const updatedText = [...text];
        let lastObject = updatedText[updatedText.length - 1];
        actionStack.push(new action('write', updatedText[updatedText.length - 1].text));
        if (lastObject.text == "") {
            updatedText.pop();
            lastObject = updatedText[updatedText.length - 1];
        }
        let newText = lastObject.text;
        if (Emoji.some(emoji => emoji.char === lastObject.text.slice(-2))) {
            newText = lastObject.text.slice(0, -1);
        }
        updatedText[updatedText.length - 1] = { ...lastObject, text: newText.slice(0, -1) };
        return updatedText;
    });
}
export function enter(char, setText) {
    setText(text => {
        const updatedText = [...text];
        const lastObject = updatedText[updatedText.length - 1];
        actionStack.push(new action('write', updatedText[updatedText.length - 1].text));
        updatedText[updatedText.length - 1] = { ...lastObject, text: `${lastObject.text}\n` };
        return updatedText;
    });
}
export function controlZ(char, setText) {
    if (actionStack.length == 0)
        return;
    const lastAction = actionStack.pop();
    switch (lastAction.type) {
        case "write":
            actionStack.pop();
            setText(text => {
                const updatedText = [...text];
                const lastObject = { ...updatedText[updatedText.length - 1], text: lastAction.before };
                updatedText[updatedText.length - 1] = { ...lastObject };
                return [...updatedText];
            });
            break;
        case "ctrl-a":
            actionStack.pop();
            setText(text => {
                let oldText = [...lastAction.before];
                return oldText;
            });
            break;
        case "style":
            actionStack.pop();
            while (actionStack[actionStack.length - 1].type == "style")
                actionStack.pop();
            setText(text => {
                const updatedText = [...text];
                updatedText.pop();
                return [...updatedText];
            });
            break;
        case "styleFont":
            while (actionStack[actionStack.length - 1].type == "style")
                actionStack.pop();
            setText(text => {
                const updatedText = [...text];
                updatedText.pop();
                return [...updatedText];
            });
            break;
        case "ctrl-aFont":
            setText(text => {
                let oldText = [...lastAction.before];
                return oldText;
            });
            break;
    }
}

export function shift(char, setSettings) {
    setSettings((settings) => ({ ...settings, languageIndex: settings.languageIndex == 1 ? 2 : 1 }))
}

export function clearAll(char, setText) {
    setText(text => {
        actionStack.push(new action('ctrl-a', [...text]));
        return [new textStyleGroup()];
    });
}

export function underline(set, setChosen, isChose) {
    set(text => {
        const updatedText = [...text];
        if (isChose) {
            actionStack.push(new action('ctrl-a', [...text]));
            let hasStyle = (text.every(t => (t.isUnderLine == 'none')));
            text = text.map(lastObject => {
                return { ...lastObject, isUnderLine: hasStyle ? 'underline' : 'none' }
            })
            setChosen(last => { return { ...last, allIsChosen: false } });
            return [...text];
        }
        const lastObject = {
            ...text[updatedText.length - 1],
            isUnderLine: updatedText[updatedText.length - 1].isUnderLine == 'none' ? 'underline' : 'none', text: ""
        };
        actionStack.push(new action('style', updatedText[updatedText.length - 1].isUnderLine));
        if (updatedText[updatedText.length - 1].text == "") {
            updatedText[updatedText.length - 1] = {
                ...lastObject, isUnderLine: updatedText[updatedText.length - 1].isUnderLine == 'none' ? 'underline' : 'none'
            }
        }
        else
            updatedText.push(lastObject);
        return updatedText;
    })
}

export function bold(set, setChosen, isChose) {
    set(text => {
        const updatedText = [...text];
        if (isChose) {
            actionStack.push(new action('ctrl-a', [...text]));
            let hasStyle = (text.every(t => (t.isBold == '500')));
            text = text.map(lastObject => {
                return { ...lastObject, isBold: hasStyle ? '700' : '500' }
            })
            setChosen(last => { return { ...last, allIsChosen: false } });
            return [...text];
        }
        const lastObject = {
            ...text[updatedText.length - 1],
            isBold: updatedText[updatedText.length - 1].isBold === '500' ? '700' : '500', text: ""
        };
        actionStack.push(new action('style', updatedText[updatedText.length - 1].isBold));
        if (updatedText[updatedText.length - 1].text == "") {
            updatedText[updatedText.length - 1] = {
                ...lastObject, isBold: updatedText[updatedText.length - 1].isBold === '500' ? '700' : '500'

            }
        }
        else
            updatedText.push(lastObject);
        return updatedText;
    })
}

export function inclien(set, setChosen, isChose) {
    set(text => {
        const updatedText = [...text];
        if (isChose) {
            actionStack.push(new action('ctrl-a', [...text]));
            let hasStyle = (text.every(t => (t.isInclined == 'unset')));
            text = text.map(lastObject => {
                return { ...lastObject, isInclined: hasStyle ? 'italic' : 'unset' }
            })
            setChosen(last => { return { ...last, allIsChosen: false } });
            return [...text];
        }
        const lastObject = {
            ...text[updatedText.length - 1],
            isInclined: updatedText[updatedText.length - 1].isInclined == 'unset' ? 'italic' : 'unset', text: ""
        };
        actionStack.push(new action('style', updatedText[updatedText.length - 1].isInclined));
        if (updatedText[updatedText.length - 1].text == "") {
            updatedText[updatedText.length - 1] = {
                ...lastObject, isInclined: updatedText[updatedText.length - 1].isInclined == 'unset' ? 'italic' : 'unset'
            }
        }
        else
            updatedText.push(lastObject);
        return updatedText;
    })
}

export function color(input, setText, settings, setSettings) {
    setText(text => {
        const updatedText = [...text];
        if (settings.allIsChosen) {
            actionStack.push(new action('ctrl-a', [...text]));
            text = text.map(lastObject => { return { ...lastObject, styleColor: input.target.value } })
            setSettings(last => { return { ...last, allIsChosen: false } });
            return [...text];
        }
        const lastObject = {
            ...text[updatedText.length - 1],
            styleColor: input.target.value, text: ""
        };
        actionStack.push(new action('style', updatedText[updatedText.length - 1].styleColor));
        if (updatedText[updatedText.length - 1].text == "") {
            updatedText[updatedText.length - 1] = {
                ...lastObject, styleColor: input.target.value
            }
        }
        else
            updatedText.push(lastObject);
        return updatedText;
    })
}