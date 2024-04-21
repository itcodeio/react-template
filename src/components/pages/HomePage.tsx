import MultiTabs from '../atoms/UI/MultiTabs';
import Sidebar from '../atoms/UI/Sidebar';
import Tooltip from '../atoms/UI/Tooltip';
import AddBtn from '../molecules/Buttons/AddBtn';
import { useStores } from '../shared/models/RootStoreProvider';

const testTooltip = [
  {
    uniqueId: 1,
    textBlock: '1',
    textTooltip: '1',
  },
  {
    uniqueId: 2,
    textBlock: '2',
    textTooltip: '2',
  },
  {
    uniqueId: 3,
    textBlock: '3',
    textTooltip: '3',
  },
  {
    uniqueId: 4,
    textBlock: '4',
    textTooltip: '4',
  },
  {
    uniqueId: 5,
    textBlock: '5',
    textTooltip: '5',
  },
  {
    uniqueId: 6,
    textBlock: '6',
    textTooltip: '6',
  },
  {
    uniqueId: 7,
    textBlock: '7',
    textTooltip: '7',
  },
  {
    uniqueId: 8,
    textBlock: '8',
    textTooltip: '8',
  },
  {
    uniqueId: 9,
    textBlock: '9',
    textTooltip: '9',
  },
  {
    uniqueId: 10,
    textBlock: '10',
    textTooltip: '10',
  },
  {
    uniqueId: 11,
    textBlock: '11',
    textTooltip: '11',
  },
  {
    uniqueId: 12,
    textBlock: '12',
    textTooltip: '12',
  },
  {
    uniqueId: 13,
    textBlock: '13',
    textTooltip: '13',
  },
  {
    uniqueId: 14,
    textBlock: '14',
    textTooltip: '14',
  },
  {
    uniqueId: 15,
    textBlock: '15',
    textTooltip: '15',
  },
];

const tabs = [
  {
    title: 'Tab 1',
    content: <p>Content for Tab 1</p>,
  },
  {
    title: 'Tab 2',
    content: <p>Content for Tab 2</p>,
  },
  {
    title: 'Tab 3',
    content: <p>Content for Tab 3</p>,
  },
];

const HomePage = () => {
  const {
    popupStore: { openPopup },
  } = useStores();
  return (
    <Sidebar>
      <div>
        TestTooltip:
        {testTooltip.map((item, i) => (
          <div key={`tooltipBlock-${item.uniqueId}-${i}`}>
            <Tooltip text={item.textTooltip} id={item.uniqueId}>
              {item.textBlock}
            </Tooltip>
          </div>
        ))}
      </div>
      <div>
        TestPopup:
        <AddBtn text='Open popup' onClick={() => openPopup('SimplePopup')} />
      </div>
      <div>
        TestTabs
        <MultiTabs tabs={tabs} />
      </div>
    </Sidebar>
  );
};

export default HomePage;
