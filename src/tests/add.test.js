const add = (a,b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test('Should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('Should return a greeting with the name passed in', () => {
  const result = generateGreeting('Dustin');
  expect(result).toBe('Hello Dustin!');
});

test('Should return a greeting with no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
});