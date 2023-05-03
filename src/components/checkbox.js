import './checkbox.css'

export default function Checkbox({label, isChecked, setChecked, disabled}) {
    return (
        <label className={`checkboxWrapper ${disabled ? 'disabled' : 'enabled'}`}>
            <input type='checkbox' checked={isChecked} onChange={() => setChecked(!isChecked)} disabled={disabled}/>
            <span className={`checkmark ${disabled ? 'disabledCheckmark' : ''}`}></span>
            <span>{label}</span>
        </label>
    )
    
}