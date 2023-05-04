import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './result.css';
import { faCopy } from '@fortawesome/fontawesome-free-solid';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Result({password, generate}) {

    const [toggleMessage, setToggleMessage] = useState(false);

    const changeToggleState = () => {
        setToggleMessage(!toggleMessage);
    }

    const copyToClipBoard = (text) => {
        navigator.clipboard.writeText(text);
    }

    return (
        <div className='result'>
                <input 
                    type='textfield' 
                    className='textfield'
                    readOnly
                    value={password}/>
                <div className='buttonsWrapper'>
                    <button className='button' onClick={() => {
                        copyToClipBoard(password);
                        changeToggleState();
                        }}>
                        <FontAwesomeIcon icon={faCopy} />
                    </button>
                    <button className='button'
                        onClick={() => generate()}>
                        <FontAwesomeIcon icon={faArrowsRotate}/>
                    </button>
                </div>
            <span className={`copiedMessage ${toggleMessage ? 'visible' : ''}`} onAnimationEnd={changeToggleState}>Copied</span>
        </div>
    )
} 