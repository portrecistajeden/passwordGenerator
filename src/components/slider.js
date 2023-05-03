export default function Slider ({value, onChange}) {
    return (
        <div>
            <input value={value}/>
            <input 
            type="range"
            onChange={onChange}
            min={1}
            max={50}
            value={value}
            className="slider"/>
        </div>
    )
}