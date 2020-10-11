import { ArrayBufferConverter } from "./arrayBufferConverter";

test("ArrayBufferConverter test", () => {
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  let arrayBufferConverter = new ArrayBufferConverter();
  let bufferConv = arrayBufferConverter.load(
    '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'
  );
  const received = arrayBufferConverter.toString(bufferConv);

  expect(received).toEqual(expected);
});