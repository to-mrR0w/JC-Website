function ImageAboutUs({ data }) {
  return (
    <li className="text-center">
      <img src={data.image} alt={`image/${data.name}`} />
      <span className="text-lg ">{data.name}</span>
      <br />
      <span className="text-slate-500 text-base">{data.job}</span>
    </li>
  );
}

export default ImageAboutUs;
