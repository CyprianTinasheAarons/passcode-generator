import { render, screen } from '@/test-utils';
import { Generator } from './Generator';

describe('Generator component', () => {
  it('renders the password generator correctly', () => {
    render(<Generator />);
    expect(screen.getByText('Password Generator')).toBeInTheDocument();
  });
});
