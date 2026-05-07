import { TOP_PAGE } from '@/constants/pages/top.constant';

export function Top() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">{TOP_PAGE.BodyHelloSekai}</h1>
    </main>
  );
}
