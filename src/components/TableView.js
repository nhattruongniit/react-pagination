import React from "react";

import { DataTable } from "carbon-components-react";
const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader
} = DataTable;

// We would have a headers array like the following
const headers = [
  {
    // `key` is the name of the field on the row object itself for the header
    key: "id",
    // `header` will be the name you want rendered in the Table Header
    header: "Id"
  },
  {
    key: "title",
    header: "Title"
  },
  {
    key: "body",
    header: "Body"
  }
];

const TableView = ({ posts }) => {
  return (
    <>
      <h4>Table View</h4>
      <DataTable
        rows={posts}
        headers={headers}
        render={({ rows, headers, getHeaderProps }) => (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {headers.map(header => (
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.id}>
                    {row.cells.map(cell => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      />
    </>
  );
};

export default TableView;
