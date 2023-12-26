import { enter, shift, del, clearAll, controlA, controlZ, underline, bold, inclien } from "./boardKeyFunctions";
import charachter from "./charachter";

export const Hebrew = [
    new charachter('פ'), new charachter('ם'), new charachter('ן'), new charachter('ו'), new charachter('ט'),
    new charachter('א'), new charachter('ר'), new charachter('ק'), new charachter('ף'), new charachter('ך'),
    new charachter('ל'), new charachter('ח'), new charachter('י'), new charachter('ע'), new charachter('כ'),
    new charachter('ג'), new charachter('ד'), new charachter('ש'), new charachter('ץ'), new charachter('ת'),
    new charachter('צ'), new charachter('מ'), new charachter('נ'), new charachter('ה'), new charachter('ב'),
    new charachter('ס'), new charachter('ז')
];

export const numbers = [
    new charachter('0'), new charachter('9'), new charachter('8'), new charachter('7'),
    new charachter('6'), new charachter('5'), new charachter('4'), new charachter('3'),
    new charachter('2'), new charachter('1')
];

export const charachters = [
    new charachter('!'), new charachter('@'), new charachter('#'), new charachter('&'), new charachter('('),
    new charachter(')'), new charachter('-'), new charachter('?'), new charachter('"'),
    new charachter(","), new charachter(".")
];

export const tags = [
    new charachter("↲", enter), new charachter("cntrl-a", controlA), new charachter(" "),
    new charachter("×", del), new charachter("cntrl-z", controlZ),
    new charachter("clear all", clearAll)
];

export const EnglishUpper = [
    new charachter('P'), new charachter('O'), new charachter('I'), new charachter('U'), new charachter('Y'),
    new charachter('T'), new charachter('R'), new charachter('E'), new charachter('W'), new charachter('Q'),
    new charachter('L'), new charachter('K'), new charachter('J'), new charachter('H'), new charachter('G'),
    new charachter('F'), new charachter('D'), new charachter('S'), new charachter('A'), new charachter('M'),
    new charachter('N'), new charachter('B'), new charachter('V'), new charachter('C'), new charachter('X'),
    new charachter('Z'), new charachter("⇧", shift)
];

export const English = [
    new charachter('p'), new charachter('o'), new charachter('i'), new charachter('u'), new charachter('y'),
    new charachter('t'), new charachter('r'), new charachter('e'), new charachter('w'), new charachter('q'),
    new charachter('l'), new charachter('k'), new charachter('j'), new charachter('h'), new charachter('g'),
    new charachter('f'), new charachter('d'), new charachter('s'), new charachter('a'), new charachter('m'),
    new charachter('n'), new charachter('b'), new charachter('v'), new charachter('c'), new charachter('x'),
    new charachter('z'), new charachter("⇧", shift)
];

export const Emoji = [
    new charachter('😉'), new charachter('🤗'), new charachter('😲'), new charachter('😇'),
    new charachter('😠'), new charachter("🥰"), new charachter("🤣"), new charachter("😈"),
    new charachter("🤩"), new charachter("😚"), new charachter("🤔"), new charachter("😎")
    , new charachter("😁"), new charachter("😥"), new charachter("🥱"), new charachter("🤨")
    , new charachter("🤑"), new charachter("🤪"), new charachter("🤝"), new charachter("👍")
    , new charachter("🧡"), new charachter("💖"), new charachter("💗"), new charachter("💔")
    , new charachter("💕"), new charachter("💘"), new charachter("💝")
];


export const languages = [
    { language: Hebrew, name: 'עיברית' }, { language: English, name: 'English' },
    { language: EnglishUpper, name: 'EnglishUpper' }, { language: Emoji, name: 'Emoji' }
];

export const Style = [
    { discription: 'fontsize', apply: (setShowOptions) => { setShowOptions(show => !show) } },
    { discription: 'font', apply: (setShowOptions) => { setShowOptions(show => !show) } },
    { discription: 'U', apply: underline },
    { discription: 'B', apply: bold },
    { discription: 'I', apply: inclien }
];