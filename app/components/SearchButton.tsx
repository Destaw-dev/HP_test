import { FaSearch } from 'react-icons/fa';

interface SearchButtonProps {
  activeTab: 'business' | 'people';
}

export const SearchButton = ({ activeTab }: SearchButtonProps) => {
  return (
    <button
      type="button"
      className={`flex items-center gap-2 text-white px-8 py-3 rounded-full mx-auto font-bold size-fit ${
        activeTab === 'business'
          ? 'bg-gradient-to-r from-[#FF725E] to-[#FF8C2B]'
          : 'bg-gradient-to-t from-[#90EBFF] via-[#42A3FF] to-[#42A3FF]'
      }`}
    >
      חיפוש <FaSearch />
    </button>
  );
};
