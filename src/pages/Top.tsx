import { Helmet } from 'react-helmet-async';
import { TOP_PAGE } from '@/constants/pages/top.constant';

export function Top() {
  return (
    <>
      <Helmet>
        <title>{TOP_PAGE.Title}</title>
      </Helmet>
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">{TOP_PAGE.BodyHelloSekai}</h1>
      </main>
    </>
  );
}
