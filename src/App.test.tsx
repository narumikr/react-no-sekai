import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { routes } from '@/routes';
import { NOT_FOUND_PAGE } from './constants/pages/notfound.constant';
import { TOP_PAGE } from './constants/pages/top.constant';

describe('ルーティング', () => {
  test('ルートパス / でTopページが表示される', () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });
    render(<RouterProvider router={router} />);
    expect(screen.getByRole('heading', { name: TOP_PAGE.BodyHelloSekai })).toBeInTheDocument();
  });

  test('存在しないパスでNotFoundページが表示される', () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/non-existent'] });
    render(<RouterProvider router={router} />);
    expect(screen.getByRole('heading', { name: NOT_FOUND_PAGE.Title })).toBeInTheDocument();
  });
});
