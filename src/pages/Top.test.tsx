import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { TOP_PAGE } from '@/constants/pages/top.constant';
import { Top } from './Top';

describe('Topページ', () => {
  test(`"${TOP_PAGE.BodyHelloSekai}" が表示される`, () => {
    render(
      <MemoryRouter>
        <Top />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: TOP_PAGE.BodyHelloSekai })).toBeInTheDocument();
  });
});
