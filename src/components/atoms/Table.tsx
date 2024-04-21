import { useState, useEffect } from 'react';
import { useTable, Column } from 'react-table';

interface TableProps<T extends Record<string, unknown>> {
  columns: Column<T>[];
  data: T[];
  showCheckboxes?: boolean;
  onSelectionChange?: (selectedIds: string[]) => void;
}

const Table = <T extends Record<string, unknown>>({
  columns,
  data,
  showCheckboxes,
  onSelectionChange,
}: TableProps<T>) => {
  const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({});

  //! selected row

  useEffect(() => {
    const defaultSelectedRows: Record<string, boolean> = {};
    data.forEach((_, index) => {
      defaultSelectedRows[index.toString()] = false;
    });
    setSelectedRows(defaultSelectedRows);
  }, [data]);

  useEffect(() => {
    const selectedIds = Object.entries(selectedRows)
      .filter(([, value]) => value)
      .map(([key]) => key);

    if (onSelectionChange) {
      onSelectionChange(selectedIds);
    }
  }, [selectedRows, onSelectionChange]);

  const toggleRowSelection = (id: string) => {
    setSelectedRows((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const toggleAllRowsSelection = () => {
    const allRowsSelected = Object.values(selectedRows).every((selected) => selected);
    const newSelectedRows: Record<string, boolean> = {};

    data.forEach((_, index) => {
      newSelectedRows[index.toString()] = !allRowsSelected;
    });

    setSelectedRows(newSelectedRows);
  };
  // !

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<T>({ columns, data });

  return (
    <table {...getTableProps()} className='w-full border-collapse border border-gray-200'>
      <thead className='bg-gray-100'>
        {headerGroups.map((headerGroup, headerGroupsIndex) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={`headerGroups-${headerGroupsIndex}`}>
            {showCheckboxes && (
              <th className='p-3 text-left'>
                <input
                  type='checkbox'
                  onChange={toggleAllRowsSelection}
                  checked={Object.values(selectedRows).every((selected) => selected)}
                />
              </th>
            )}
            {headerGroup.headers.map((column, headerGroupIndex) => (
              <th
                {...column.getHeaderProps()}
                key={`headerGroup-${headerGroupIndex}`}
                className={`p-3 text-left ${
                  headerGroupIndex !== headerGroup.headers.length - 1 ? 'border-r border-gray-200' : ''
                }`}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className='bg-white hover:bg-gray-50' key={`${rowIndex} + row`}>
              {showCheckboxes && (
                <td className='p-3 border-t border-gray-200'>
                  <input
                    type='checkbox'
                    checked={selectedRows[rowIndex.toString()] || false}
                    onChange={() => toggleRowSelection(rowIndex.toString())}
                  />
                </td>
              )}
              {row.cells.map((cell, index) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    key={`${index} + row-cell`}
                    className={`p-3 border-t border-gray-200 ${
                      index !== row.cells.length - 1 ? 'border-r border-gray-200' : ''
                    }`}>
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
