import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactTable from "../../components/ReactTable";
import CssBaseline from "@material-ui/core/CssBaseline";
import Styles from "./CryptoStyles";
import NumberRangeColumnFilter from "../../components/table/filter/NumberRangeColumnFilter";
import SliderColumnFilter from "../../components/table/filter/SliderColumnFilter";

const CryptoTable = () => {
  const [tableData, setTableData] = useState([]);
  const columns = [
    {
      Header: "Rank",
      accessor: "rank",
      className: "rank",
      disableFilters: true,
    },
    {
      Header: "Logo",
      accessor: "logo",
      disableFilters: true,
      className: "centered",
      Cell: ({ value, row }) => {
        return (
          <a href={row.original.websiteUrl} alt={value}>
            <img src={row.original.icon} width="30px" />
          </a>
        );
      },
    },
    {
      Header: "Symbol",
      accessor: "symbol",
      className: "centered",
      filter: "fuzzyText",
    },
    {
      Header: "Name",
      accessor: "name",
      className: "centered",
      style: {
        width: 220,
      },
    },
    {
      Header: "Price",
      Filter: NumberRangeColumnFilter,
      accessor: "price",
      className: "centered",
      style: {
        width: 120,
      },
      Cell: ({ value }) => {
        return Number.parseFloat(value.toFixed(2)).toLocaleString("hu-HU");
      },
    },
    {
      Header: "% / Day",
      accessor: "priceChange1d",
      className: "centered",
      Filter: SliderColumnFilter,
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
    <>
      <CssBaseline />
      <Styles>
        <ReactTable columns={columns} data={tableData} />
      </Styles>
    </>
  );
};

export default CryptoTable;
