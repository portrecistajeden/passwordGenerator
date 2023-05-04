import './slider.css';
import { useEffect, useState } from "react"

export default function Slider ({value, setValue}) {

    const [sliderColor, setSliderColor] = useState(value);

    useEffect(() => {
        if(value < 8) {
            setSliderColor('red');
        }
        else if(value < 11) {
            setSliderColor('orange');
        }
        else if(value < 14) {
            setSliderColor('yellow');
        }
        else {
            setSliderColor('green');
        }
    },[value])


    const onChangeSlider = (event) => {
        setValue(event.target.value);
        const min = event.target.min;
        const max = event.target.max;
        const val = event.target.value;
        
        event.target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
    }

    return (
        <div className='sliderComponentWrapper'>
            <h3>Password length</h3>
            <div className='sliderWrapper'>
                <label className='sliderValue'>
                    {value}
                </label>
                <input 
                    type="range"
                    onChange={onChangeSlider}
                    min={1}
                    max={30}
                    value={value}
                    className={`slider ${sliderColor}`}
                    id='slider'/>
            </div>
        </div>
    )
}