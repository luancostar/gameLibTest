
import PropTypes from "prop-types"

TextInput.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func,
    label: PropTypes.string
}

export default function TextInput ({id, value, setValue, label}) {
    
    return (
    <div style={{display: "flex"}}>
    <label htmlFor={id}>{label}</label>
    <input type={id}
    name={id}
    id={id}
    value={value}
    onChange={(e) => setValue(e.target.value)}
        />
    </div>
    )
}