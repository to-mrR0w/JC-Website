function Input(props) {
  const {
    onChange,
    type,
    id,
    placeholder = "placeholder",
    className = "",
    name = "name",
    required = false,
  } = props;
  return (
    <>
      <input
        required={required}
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
      ></input>
    </>
  );
}

export default Input;
