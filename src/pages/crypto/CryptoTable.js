import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ReactTable from "../../components/ReactTable";

const CryptoTable = () => {
  const [tableData, setTableData] = useState([]);
  const Styles = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;

    .rank {
      text-align: center;
      font-weight: bold;
    }
    .symbol {
      text-align: center;
    }
    .alignRight {
      text-align: right;
    }

    .user {
      background-color: blue;
      color: white;
    }

    thead {
      background-color: rgb(44, 44, 44);
      color: white;
      text-align: center;
    }

    table {
      border-spacing: 0;
      border: 1px solid black;

      tr {
        :last-child {
          td {
            border-bottom: 0;
          }
        }
      }

      th,
      td {
        margin: 0;
        padding: 0.5rem;
        border-bottom: 1px solid black;
        border-right: 1px solid black;

        :last-child {
          border-right: 0;
        }
      }
    }
  `;

  const columns = [
    {
      Header: "Rank",
      accessor: "rank",
      className: "rank",
    },
    {
      Header: "Symbol",
      accessor: "symbol",
      className: "symbol",
      Cell: ({ value, row }) => {
        return (
          <a href={row.original.websiteUrl} alt={value}>
            <img src={row.original.icon} width="30px" />
          </a>
        );
      },
    },
    {
      Header: "Name",
      accessor: "name",
      className: "symbol",
      style: {
        width: 220,
      },
    },
    {
      Header: "Price",
      accessor: "price",
      className: "alignRight",
      style: {
        width: 120,
      },
      Cell: ({ value }) => {
        return Number.parseFloat(value.toFixed(2)).toLocaleString("ro-RO");
      },
    },
    {
      Header: "Change/Day",
      accessor: "priceChange1d",
      className: "alignRight",
      Cell: ({ value }) => (
        <span className={value < 0 ? "red" : "green"}>{value}</span>
      ),
    },
  ];

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://api.coinstats.app/public/v1/coins?skip=0&limit=25&currency=USD"
      );

      setTableData(response.data.coins);
    };

    getData();
  }, []);

  return (
    <Styles>
      <ReactTable columns={columns} data={tableData} />;
    </Styles>
  );
};

export default CryptoTable;
