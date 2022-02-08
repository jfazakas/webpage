import React from "react";

import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { useTable } from "react-table";

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
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    rows, // rows for the table based on the data passed
  } = useTable({
    columns,
    data,
  });

  /* 
        react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks,
        and it will do its magic automatically
      */
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
    //   return (
    //     <>
    //       <table {...getTableProps()}>
    //         <thead>
    //           {headerGroups.map((headerGroup) => (
    //             <tr {...headerGroup.getHeaderGroupProps()}>
    //               {headerGroup.headers.map((column) => (
    //                 <th
    //                   {...column.getHeaderProps([
    //                     {
    //                       className: column.className,
    //                       style: column.style,
    //                     },
    //                     getColumnProps(column),
    //                     getHeaderProps(column),
    //                   ])}
    //                 >
    //                   {column.render("Header")}
    //                 </th>
    //               ))}
    //             </tr>
    //           ))}
    //         </thead>
    //         <tbody {...getTableBodyProps()}>
    //           {rows.map((row, i) => {
    //             prepareRow(row);
    //             return (
    //               <tr {...row.getRowProps()}>
    //                 {row.cells.map((cell) => {
    //                   return (
    //                     <td
    //                       {...cell.getCellProps([
    //                         {
    //                           className: cell.column.className,
    //                           style: cell.column.style,
    //                         },
    //                         getColumnProps(cell.column),
    //                         getCellProps(cell),
    //                       ])}
    //                     >
    //                       {cell.render("Cell")}
    //                     </td>
    //                   );
    //                 })}
    //               </tr>
    //             );
    //           })}
    //         </tbody>
    //       </table>
    //     </>
  );
};

export default ReactTable;
