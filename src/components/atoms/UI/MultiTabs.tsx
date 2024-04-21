import { FC, ReactNode, useState } from 'react';

interface MultiTabsProps {
  tabs: {
    title: string;
    content: ReactNode;
  }[];
}

const MultiTabs: FC<MultiTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className='container mx-auto mt-8'>
      <div className='flex'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              activeTab === tab ? 'border-b-2 border-blue-500 focus:outline-none' : 'text-gray-600'
            } text-lg px-4 py-2 mr-4`}
            onClick={() => setActiveTab(tab)}>
            {tab.title}
          </button>
        ))}
      </div>
      <div className='mt-8'>
        <h2 className='text-2xl font-bold mb-4'>{activeTab.title}</h2>
        <div>{activeTab.content}</div>
      </div>
    </div>
  );
};

export default MultiTabs;
