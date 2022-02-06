import Axios from "axios";
import { useEffect, useState } from "react";

const Crypto = () => {
  require("./css/styles.css");

  // Setting up the initial states using
  // react hook 'useState'
  const [search, setSearch] = useState("");
  const [crypto, setCrypto] = useState([]);

  // Fetching crypto data from the API only
  // once when the component is mounted
  useEffect(() => {
    Axios.get(
      `https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR`
    ).then((res) => {
      setCrypto(res.data.coins);
    });
  }, []);

  return (
    <div className="crypto">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        style={{ marginBottom: 25 }}
      />
      <table>
        <thead>
          <tr>
            <td>
              <strong>Rank</strong>
            </td>
            <td>
              <strong>Name</strong>
            </td>
            <td className="alignLeft">
              <strong>Symbol</strong>
            </td>
            <td className="alignLeft">
              <strong>Price</strong>
            </td>
          </tr>
        </thead>
        {/* Mapping all the cryptos */}
        <tbody>
          {/* Filtering to check for the searched crypto */}
          {crypto
            .filter((val) => {
              return val.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((val, id) => {
              return (
                <>
                  <tr id={id}>
                    <td className="rank">{val.rank}</td>
                    <td className="logo">
                      <a href={val.websiteUrl}>
                        <img src={val.icon} alt="logo" width="30px" />
                      </a>

                      <p>{val.name}</p>
                    </td>
                    <td className="alignLeft">{val.symbol}</td>
                    <td className="alignLeft">{val.price.toFixed(2)}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Crypto;
