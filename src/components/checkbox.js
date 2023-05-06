import './checkbox.css'

export default function Checkbox({label, isChecked, setChecked, disabled, preventUncheck}) {
    return (
        <label className={`checkboxWrapper ${disabled ? 'disabled' : 'enabled'}`}>
            <input type='checkbox' checked={isChecked} onClick={preventUncheck && isChecked ? () => {} : () => setChecked(!isChecked)} disabled={disabled}/>
            <span className={`checkmark ${disabled ? 'disabledCheckmark' : ''}`}></span>
            <span>{label}</span>
        </label>
    )
    
}