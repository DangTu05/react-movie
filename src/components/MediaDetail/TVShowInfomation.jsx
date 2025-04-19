const TVShowInfomation = ({ tvInfo = {} }) => {
  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Infomation</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{tvInfo.original_name}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>

        {(tvInfo.origin_country || []).map((countryCode) => (
          <img
            key={countryCode}
            src={`https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`}
            alt="countryCode"
          />
        ))}
      </div>
      <div className="mb-4">
        <p className="font-bold">NetWork</p>

        {(tvInfo.networks || []).map((network) => (
          <img
            className="invert"
            key={network.id}
            src={`https://image.tmdb.org/t/p/h30${network.logo_path}`}
            alt={network.name}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default TVShowInfomation;
