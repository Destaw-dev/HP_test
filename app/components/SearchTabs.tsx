import { FC } from 'react';
import { SearchTabButton } from './SearchTabButton';

interface SearchTabsProps {
  activeTab: 'business' | 'people';
  setActiveTab: (tab: 'business' | 'people') => void;
}

export const SearchTabs: FC<SearchTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center gap-4">
      <SearchTabButton
        label="חיפוש עסקים"
        isActive={activeTab === 'business'}
        onClick={() => setActiveTab('business')}
        gradient="to right, #FF725E, #FF8C2B"
      />
      <SearchTabButton
        label="חיפוש אנשים"
        isActive={activeTab === 'people'}
        onClick={() => setActiveTab('people')}
        gradient="90deg, #42A3FF 72.97%, #90EBFF 198.65%"
      />
    </div>
  );
};
