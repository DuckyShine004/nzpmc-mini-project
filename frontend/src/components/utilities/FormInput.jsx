const FormInput = ({label, type, value, onChange, placeholder}) => {
  return (
    <label>
      {label}:
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  )
}

export default FormInput
