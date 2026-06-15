import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { NOT_FOUND_PAGE } from '@/constants/pages/notfound.constant';
import { NotFound } from './NotFound';

describe('NotFoundページ', () => {
  test(`"${NOT_FOUND_PAGE.Title}" タイトルが表示される`, () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      </HelmetProvider>,
    );
    expect(screen.getByRole('heading', { name: NOT_FOUND_PAGE.Title })).toBeInTheDocument();
  });

  test(`"${NOT_FOUND_PAGE.BodyPageNotFound}" が表示される`, () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      </HelmetProvider>,
    );
    expect(screen.getByText(NOT_FOUND_PAGE.BodyPageNotFound)).toBeInTheDocument();
  });

  test(`"${NOT_FOUND_PAGE.LinkToTop}" リンクが / を指している`, () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      </HelmetProvider>,
    );
    expect(screen.getByRole('link', { name: NOT_FOUND_PAGE.LinkToTop })).toHaveAttribute('href', '/');
  });

  test(`タイトルが "${NOT_FOUND_PAGE.MetaTitle}" に設定される`, () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      </HelmetProvider>,
    );
    expect(document.title).toBe(NOT_FOUND_PAGE.MetaTitle);
  });
});
