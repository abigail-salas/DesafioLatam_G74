import React, { useEffect, useState } from "react";

function ConsumoApis() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    consultaApi();
  }, []);

  const consultaApi = async () => {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=salta&APPID=799edad109b009ce1a9a4a6bc519ccf1";
    // const url = "https://api.gameofthronesquotes.xyz/v1/random";
    const response = await fetch(url);
    const data = await response.json();

    /* Api Game of Thrones */
    //setInfo(`${data.sentence} - ${data.character.name}`);

    console.log(data, "<---- data en la consulta");

    /* Api Weather Map */
    setInfo(`${data.name}, ${data.sys.country} - °K ${data.main.temp}`);
  };

  return (
    <div>
      <h4>{info}</h4>
    </div>
  );
}

export default ConsumoApis;
