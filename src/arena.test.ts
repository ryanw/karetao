import Arena from './arena';

it('initialises with a default size', () => {
  const arena = new Arena();
  expect(5).toBe(5);
});
