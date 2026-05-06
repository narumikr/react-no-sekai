import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { routes } from '@/routes';

describe('ルーティング', () => {
  test('ルートパス / でTopページが表示される', () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });
    render(<RouterProvider router={router} />);
    expect(screen.getByRole('heading', { name: 'Hello SEKAI!' })).toBeInTheDocument();
  });

  test('存在しないパスでNotFoundページが表示される', () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/non-existent'] });
    render(<RouterProvider router={router} />);
    expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument();
  });
});
