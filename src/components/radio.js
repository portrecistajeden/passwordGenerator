import './radio.css'

export default function Radio({label, checked, onChange, id}) {
    return (
        <label htmlFor={id} className='radioWrapper'>
            <input 
                type='radio' 
                className='radioInput'
                name={id}
                id={id}
                value={id}
                onChange={onChange}
                checked={checked}/>
            <span className='radiomark'/>
            <span className='radioText'>
                {label}
            </span>
        </label>
    )
    
}