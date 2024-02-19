function ImageAboutUs({ data }) {
  return (
    <li className="text-center">
      <img className="rounded-md w-36 h-44" src={data.image} alt={`image/${data.name}`} />
      <span className="text-lg ">{data.name}</span>
      <br />
      <span className="text-slate-500 text-base">{data.job}</span>
    </li>
  );
}

export default ImageAboutUs;
