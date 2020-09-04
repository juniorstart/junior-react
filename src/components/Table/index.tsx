import React from 'react';
import { useTable, Column, useSortBy } from 'react-table';
import { ReactComponent as ArrowDown } from './arrow-down.svg';
import { ReactComponent as ArrowUp } from './arrow-up.svg';

type Data = Record<string, any>;

type Props<T extends Data> = {
  data: T[];
  columns: Column<Data>[];
};

const Table: React.FC<Props<Data>> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
  );

  return (
    <table
      {...getTableProps()}
      className="w-full mt-4 overflow-hidden border-none border-collapse rounded-lg"
    >
      <thead className="bg-gray-300 border-gray-300 rounded-lg">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                <div className="mx-2 text-xs text-gray-600 px-4 py-3 font-semibold flex justify-center select-none">
                  {column.render('Header')}
                  <div className="w-4 ml-2">
                    {column.isSorted ? (
                      <span>{column.isSortedDesc ? <ArrowDown /> : <ArrowUp />}</span>
                    ) : null}
                  </div>
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td className="p-4 text-center border-b border-gray-200" {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
