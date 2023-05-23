import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { Home } from './Home'

describe('Home', () => {
  test('should render the title', () => {
    const { getByText } = render(<Home />)
    expect(getByText('homeTitle')).toBeInTheDocument()
  })
})
