import React from "react";

import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";

import DefaultColumnFilter from "./table/filter/DefaultColumnFilter";
import HeaderFilter from "./table/filter/HeaderFilter";
import FuzzyTextFilter from "./table/filter/FuzzyTextFilter";
import NumberRangeColumnFilter from "./table/filter/NumberRangeColumnFilter";

// Create a default prop getter
const defaultPropGetter = () => ({});

const ReactTable = ({
  columns,
  data,
  getHeaderProps = defaultPropGetter,
  getColumnProps = defaultPropGetter,
  getRowProps = defaultPropGetter,
  getCellProps = defaultPropGetter,
}) => {
  const filterTypes = React.useMemo(
    () => ({
      // Add a new FuzzyTextFilter filter type.
      fuzzyText: FuzzyTextFilter,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    rows, // rows for the table based on the data passed
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
    },
    useFilters,
    useGlobalFilter
  );

  // Render the UI for your table
  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableCell
                {...column.getHeaderProps([
                  {
                    className: column.className,
                    style: column.style,
                  },
                  getColumnProps(column),
                  getHeaderProps(column),
                ])}
              >
                {column.render("Header")}
                <HeaderFilter column={column} />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <TableCell
                    {...cell.getCellProps([
                      {
                        className: cell.column.className,
                        style: cell.column.style,
                      },
                      getColumnProps(cell.column),
                      getCellProps(cell),
                    ])}
                  >
                    {cell.render("Cell")}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MaUTable>
  );
};

export default ReactTable;
