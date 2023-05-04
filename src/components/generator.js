import { useEffect, useState } from 'react';
import Checkbox from './checkbox';
import './generator.css';
import Radio from './radio';
import Slider from './slider';
import { generatePassword } from '../passwordGenerator';
import Result from './result';

export default function Generator() {

    const [password, setPassword] = useState('');
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSymbols] = useState(true);
    const [easyToSay, setEasyToSay] = useState(false);
    const [easyToRead, setEasyToRead] = useState(false);
    const [allCharacters, setAllCharacters] = useState(true);
    const [pswdLength, setPswdLength] = useState('8');

    const onChangeVariant = (elem) => {
        const { name } = elem.target;
        if (name === 'easyToSay') {
          setEasyToSay(true);
          setEasyToRead(false);
          setAllCharacters(false);
          setNumbers(false);
          setSymbols(false);
        }
        else if (name === 'easyToRead') {
            setEasyToSay(false);
            setEasyToRead(true);
            setAllCharacters(false);
            setNumbers(false);
            setSymbols(false);
        }
        else {
            setEasyToSay(false);
            setEasyToRead(false);
            setAllCharacters(true);
            setNumbers(true);
            setSymbols(true);
        }
    }

    const generatePswd = () => {
        if(easyToSay) {
            setPassword(generatePassword(pswdLength, 'easyToSay'));
        }
        else if(easyToRead) {
            setPassword(generatePassword(pswdLength, 'easyToRead'));
        }
        else {
            setPassword(generatePassword(pswdLength, 'allCharacters'));
        }
    }

    useEffect(() => {
        generatePswd();
    },[uppercase,lowercase,numbers,symbols,easyToSay,easyToRead,allCharacters,pswdLength])
    

    return(
        <div className='wrapper generator'>
            <h2>Your password options</h2>
            <div className='variantsWrapper'>
                <Radio label='Easy to say' checked={easyToSay} onChange={onChangeVariant} id='easyToSay'/>
                <Radio label='Easy to read' checked={easyToRead} onChange={onChangeVariant} id='easyToRead'/>
                <Radio label='All characters' checked={allCharacters} onChange={onChangeVariant} id='allCharacters'/>
            </div>
            <hr/>
            <div className='optionsWrapper'>
                <Checkbox label='Uppercase' isChecked={uppercase} setChecked={setUppercase}/>
                <Checkbox label='Lowercase' isChecked={lowercase} setChecked={setLowercase}/>
                <Checkbox label='Numbers' isChecked={numbers} setChecked={setNumbers} disabled={easyToSay}/>
                <Checkbox label='Symbols' isChecked={symbols} setChecked={setSymbols} disabled={easyToSay}/>
            </div>
            <hr/>
            <Slider value={pswdLength} setValue={setPswdLength} />  
            <br/>
            <Result password={password} generate={generatePswd}/>          
        </div>
    )
}