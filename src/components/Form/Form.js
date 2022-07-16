import { useState } from 'react';

function Form(props) {
  const [colorHEX, setColorHEX] = useState('#34495e')
  const [colorRGB, setColorRGB] = useState('rgb(52, 73, 94)')
  
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
    `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
     : null;
  }

  const changeColor = (col, evt) => {
    if (evt.key === 'Enter') {
      if (col.length === 7){
        let tempCol = hexToRgb(col)
        tempCol !== null ? setColorRGB(tempCol)
        : setColorRGB('Ошибка!')
      } else {
        setColorRGB('Ошибка!')
      }
    }
  }

  return (
    <div className="Form"
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: colorRGB,
        display: 'flex',
        flexDirection: 'column',

        alignItems: 'center',
        justifyContent: 'center'
    }}>
      <input className='hex' type='text' onChange={evt => setColorHEX(evt.target.value)} 
      onKeyPress={evt => changeColor(evt.target.value, evt)} maxLength='7' placeholder={colorHEX} />
      <input type='text' placeholder={colorRGB} disabled={true} />
    </div>
  );
}

export default Form;
