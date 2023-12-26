import '../css/TextStyleGroupe.css'

//אוביקט טקסט וסטייל שבתוכו יש יצור ספאן לפי \N
function TextStyleGroup({ textStyle }) {
  let totalText = textStyle.text;
  let config=0;
  try{
    return (
    <>
      {totalText.split('\n').map((text, i) =>
      (<span key={config++} style={{ color: textStyle.styleColor, fontSize: textStyle.styleSize,
        fontFamily:textStyle.styleFont,fontWeight:textStyle.isBold,
        textDecoration:textStyle.isUnderLine, fontStyle:textStyle.isInclined}}>
        {text}{(i+1) != totalText.split('\n').length && <br />}</span>))}
    </>
  );}
  catch(e){
    console.log(e);
    alert(e.message);
  }
}

export default TextStyleGroup;