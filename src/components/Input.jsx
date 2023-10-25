function Input(props) {
  const { onChange, type, id, placeholder, className } = props;
  return (
    <>
      <input
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
