function ImageAboutUs({ data }) {
  return (
    <li className="text-center">
      <img className="rounded-md" src={data.image} alt={`image/${data.name}`} />
      <span className="text-lg ">{data.name}</span>
      <br />
      <span className="text-slate-500 text-base">{data.job}</span>
    </li>
  );
}

export default ImageAboutUs;
