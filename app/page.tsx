import { Categories } from './components/Categories';
import Header from './components/Header';
import SearchPanel from './components/SearchPanel';

export default function Home() {
  return (
    <main >
      <div className="bg-[url('/images/heroMobile.png')] md:bg-[url('/images/heroDesktop.png')] bg-no-repeat sm:bg-cover ">
      <Header />
      <SearchPanel />
      </div>
      <Categories />
    </main>
  );
}
