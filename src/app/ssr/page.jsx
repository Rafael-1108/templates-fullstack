import axios from "axios";

export default async function GetPage() {
  let series = [];

  try {
    const resp = await axios.get(`${process.env.NEXT_URL_SERIES}?limit=50`, {
      headers: { "x-api-key": process.env.API_KEY },
    });

    const data = resp.data;
    series = Array.isArray(data)
      ? data
      : Array.isArray(data?.data)
        ? data.data
        : Array.isArray(data?.series)
          ? data.series
          : [];
  } catch (error) {
    console.error(error);
  }

  return (
    <main>
      <h2>Busca feito pelo servidor, com a api-key privada.</h2>
      <p>
        DevTools - Network: essa chamada nem aparece lá, pois ela acontece no
        servidor.
      </p>
      <p>
        Axios.get direto na API, mas rodando no servidor, a api-key nunca chega
        no navegador.
      </p>
      <ul>
        {series.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </main>
  );
}
