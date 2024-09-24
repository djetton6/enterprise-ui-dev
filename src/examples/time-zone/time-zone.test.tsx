import { test, expect, vi,beforeEach, afterEach } from 'vitest';
import { render } from 'test/utilities';
import TimeZone from '.';


//use fake timers and setting the time to the fake time.
beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(11132323232232);
});

afterEach(() => {
  vi.useRealTimers();
});

test('it should render successfully', () => {
  render(<TimeZone />);
});

test.fails('should match the snapshot', async () => {
  const { container } = render(<TimeZone />);
  expect(container).toMatchSnapshot();
});
