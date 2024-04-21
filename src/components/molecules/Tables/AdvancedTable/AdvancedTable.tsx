import { useCallback, FC, Dispatch } from 'react';
import { Column } from 'react-table';
import Table from '../../../atoms/Table';
import { UserData } from '../../../organisms/Tables/mockData';

interface AdvancedTable {
  data: UserData[];
  columns: Column<UserData>[];
  setSelectedIds: Dispatch<React.SetStateAction<string[]>>;
}

const AdvancedTable: FC<AdvancedTable> = ({ setSelectedIds, data, columns }) => {
  const handleSelectionChange = useCallback((selectedIds: string[]) => {
    setSelectedIds(selectedIds);
  }, []);

  return (
    <>
      <Table<UserData> columns={columns} data={data} showCheckboxes onSelectionChange={handleSelectionChange} />
    </>
  );
};

export default AdvancedTable;
