import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { TOP_PAGE } from '@/constants/pages/top.constant';
import { Top } from './Top';

describe('Topページ', () => {
  test(`"${TOP_PAGE.BodyHelloSekai}" が表示される`, () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <Top />
        </MemoryRouter>
      </HelmetProvider>,
    );
    expect(screen.getByRole('heading', { name: TOP_PAGE.BodyHelloSekai })).toBeInTheDocument();
  });

  test(`タイトルが "${TOP_PAGE.Title}" に設定される`, () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <Top />
        </MemoryRouter>
      </HelmetProvider>,
    );
    expect(document.title).toBe(TOP_PAGE.Title);
  });
});
