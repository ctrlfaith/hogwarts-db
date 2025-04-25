import Link from 'next/link';
import ListUser from '../components/ListUser';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Harry Potter Character Database</h1>
      <div className="flex justify-end mb-4">
        <Link href="/actor/create">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Characters
          </button>
        </Link>
      </div>
      <ListUser />
    </div>
  );
};

export default HomePage;
