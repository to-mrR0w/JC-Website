function Produkte(props) {
  const { nameP, img, preis, key } = props;
  return (
    <div>
      <ul>
        <li key={key}>
          <img src={img} />
          <span>{nameP}</span>
          <br />
          <span> Preis:{preis}</span>
        </li>
      </ul>
    </div>
  );
}

export default Produkte;
