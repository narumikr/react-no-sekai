import type { RouteObject } from 'react-router-dom';
import { NotFound } from '@/pages/NotFound';
import { Top } from '@/pages/Top';

export const routes: RouteObject[] = [
  { path: '/', element: <Top /> },
  { path: '*', element: <NotFound /> },
];
