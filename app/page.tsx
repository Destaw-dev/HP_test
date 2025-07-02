import { Categories } from './components/Categories';
import Header from './components/Header';
import SearchPanel from './components/SearchPanel';

export default function Home() {
  return (
    <main >
      <div className="bg-[url('/images/backgroundMobile.png')] md:bg-[url('/images/backgroundDesktop.png')] bg-no-repeat sm:bg-cover ">
      <Header />
      <SearchPanel />
      </div>
      <Categories />
    </main>
  );
}
