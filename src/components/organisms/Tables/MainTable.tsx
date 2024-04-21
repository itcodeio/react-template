import { FC, useCallback, useState } from 'react';
import AdvancedTable from '../../molecules/Tables/AdvancedTable/AdvancedTable';

import { UserData, mockData } from './mockData';
import DeleteBtn from '../../molecules/Buttons/DeleteBtn';
import AddBtn from '../../molecules/Buttons/AddBtn';
import { Column } from 'react-table';

const MainTable: FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const getIdsFromIndexes = useCallback(
    (indexes: string[]) => {
      return indexes.map((index) => mockData[parseInt(index)].id);
    },
    [mockData]
  );

  const columns: Column<UserData>[] = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'City',
      accessor: 'city',
    },
  ];

  const handlerAdd = () => {
    console.log(getIdsFromIndexes(selectedIds));
  };

  const handlerDelete = () => {
    console.log(getIdsFromIndexes(selectedIds));
  };

  return (
    <>
      <DeleteBtn text={'delete'} onClick={handlerAdd} />
      <AddBtn text={'add'} onClick={handlerDelete} />
      <AdvancedTable data={mockData} columns={columns} setSelectedIds={setSelectedIds} />
    </>
  );
};

export default MainTable;
