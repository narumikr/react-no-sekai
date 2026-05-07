import { Link } from 'react-router-dom';
import { NOT_FOUND_PAGE } from '@/constants/pages/notfound.constant';

export function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">{NOT_FOUND_PAGE.Title}</h1>
      <p className="text-gray-500">{NOT_FOUND_PAGE.BodyPageNotFound}</p>
      <Link to="/" className="text-blue-500 underline">
        {NOT_FOUND_PAGE.LinkToTop}
      </Link>
    </main>
  );
}
