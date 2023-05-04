import { useEffect, useState } from 'react';
import Checkbox from './checkbox';
import './generator.css';
import Radio from './radio';
import Slider from './slider';
import { generatePassword } from '../passwordGenerator';
import Result from './result';

export default function Generator() {

    let optionsChecked = 0;

    const [password, setPassword] = useState('');
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSymbols] = useState(true);
    const [onlyLetters, setOnlyLetters] = useState(false);
    const [easyToRead, setEasyToRead] = useState(false);
    const [allCharacters, setAllCharacters] = useState(true);
    const [pswdLength, setPswdLength] = useState('8');

    const onChangeVariant = (elem) => {
        const { name } = elem.target;
        if (name === 'onlyLetters') {
          setOnlyLetters(true);
          setEasyToRead(false);
          setAllCharacters(false);
          setNumbers(false);
          setSymbols(false);
        }
        else if (name === 'easyToRead') {
            setOnlyLetters(false);
            setEasyToRead(true);
            setAllCharacters(false);
            setNumbers(false);
            setSymbols(false);
        }
        else {
            setOnlyLetters(false);
            setEasyToRead(false);
            setAllCharacters(true);
            setNumbers(true);
            setSymbols(true);
        }
    }

    const generatePswd = () => {
        if(onlyLetters) {
            setPassword(generatePassword(pswdLength, 'onlyLetters', lowercase, uppercase, symbols, numbers));
        }
        else if(easyToRead) {
            setPassword(generatePassword(pswdLength, 'easyToRead', lowercase, uppercase, symbols, numbers));
        }
        else {
            setPassword(generatePassword(pswdLength, 'allCharacters', lowercase, uppercase, symbols, numbers));
        }
    }


    useEffect(() => {
        generatePswd();

        optionsChecked = 0;
        for(let option of [uppercase,lowercase,numbers,symbols]){
            if(option) optionsChecked +=1;
        }
        console.log(optionsChecked)
    },[uppercase,lowercase,numbers,symbols,onlyLetters,easyToRead,allCharacters,pswdLength])
    

    return(
        <div className='wrapper generator'>
            <h2>Your password options</h2>
            <div className='variantsWrapper'>
                <Radio label='Only letters' checked={onlyLetters} onChange={onChangeVariant} id='onlyLetters'/>
                <Radio label='Easy to read' checked={easyToRead} onChange={onChangeVariant} id='easyToRead'/>
                <Radio label='All characters' checked={allCharacters} onChange={onChangeVariant} id='allCharacters'/>
            </div>
            <hr/>
            <div className='optionsWrapper'>
                <Checkbox label='Uppercase' isChecked={uppercase} setChecked={setUppercase}/>
                <Checkbox label='Lowercase' isChecked={lowercase} setChecked={setLowercase}/>
                <Checkbox label='Numbers' isChecked={numbers} setChecked={setNumbers} disabled={onlyLetters}/>
                <Checkbox label='Symbols' isChecked={symbols} setChecked={setSymbols} disabled={onlyLetters}/>
            </div>
            <hr/>
            <Slider value={pswdLength} setValue={setPswdLength} />  
            <br/>
            <Result password={password} generate={generatePswd}/>          
        </div>
    )
}