import { JSX } from 'react';
import NavBar from './NavBar';
import { AccessibilityIcon } from './icons';


export default function Header(): JSX.Element {
  return (
    <header className="text-white bg-[#16254F]">
      <div className="flex justify-between items-center px-2 py-1">
      <NavBar />
        <div className="hidden items-center lg:flex">
          <button className="text-white" aria-label="נגישות">
          <AccessibilityIcon className="w-8 h-8"/>
          </button>
        </div>
      </div>
    </header>
  );
}