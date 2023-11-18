function ImageAboutUs({ data }) {
  return (
    <li className="text-center">
      <img src={data.image} alt={`image/${data.name}`} />
      <span>{data.name}</span>
    </li>
  );
}

export default ImageAboutUs;
