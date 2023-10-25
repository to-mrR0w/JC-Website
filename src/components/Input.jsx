function Input(props) {
  const { onChange, type, id, placeholder } = props;
  return (
    <>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </>
  );
}

export default Input;
