//שמירת נתוני סטייל עבור טקסט מסוים
export default class textStyleGroup {
    constructor(text = '', styleSize = '20px', styleColor = 'rgb(78, 70, 76)', styleFont = 'Arial',isBold='500',isInclined='unset',isUnderLine='none') {
        this.text = text;
        this.styleSize = styleSize;
        this.styleColor = styleColor;
        this.styleFont = styleFont;
        this.isBold=isBold;
        this.isInclined=isInclined;
        this.isUnderLine=isUnderLine;
    }
}