import { render } from '@testing-library/vue';
import App from '../../src/App.vue';

describe('App', () => {
  test('renders Avatar component', () => {
    const { container } = render(App);
    expect(container.querySelector('div.avatar')).toBeTruthy();
  });
});
