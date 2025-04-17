import './Button.css';
import { React, useState } from 'react';

function Button({ text, onClick }) {
    return (
        <button className='button accent' onClick={onClick}>{text}</button>
    )
}

export default Button;




// import './Button.css';
// import { React, useState } from 'react';

// function Button() {
//     const [text, setText] = useState('Сохранить');
//     console.log('Ререндер')

//     const clicked = () => {
//         setText('Закрыть');
//         console.log(text);
//     }

//     return (
//         <button onClick={clicked} className='button accent'>{text}</button>
//     )
// }

// export default Button;