import { render } from '@testing-library/vue';
import Avatar from '../../src/components/Avatar.vue';

describe('Avatar', () => {
  test('renders two images', () => {
    const { container } = render(Avatar);
    const imgs = container.querySelectorAll('img');
    expect(imgs.length).toBeGreaterThanOrEqual(2);
    const srcs = Array.from(imgs).map((i) => i.getAttribute('src'));
    expect(srcs.some((s) => s && s.includes('Epcot.avif'))).toBe(true);
  });
});
