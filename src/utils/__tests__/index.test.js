import { getLowestPrice, isEmpty, isPrimitive } from "../";

describe("[UTILS]", () => {
  it("getLowerPrice should return the lowest number in array", () => {
    const data = [5, 2, 5, 6, 7, 800];
    const expected = getLowestPrice(data);

    expect(expected).toBe(Math.min(...data));
  });

  it("getLowerPrice should return an empty array", () => {
    const data = [];
    const expected = getLowestPrice(data);

    expect(expected).toBe(0);
  });

  it.each([10, null, undefined, "string", false])(
    "getLowerPrice should return an error if the value pass like argument is %s",
    (result) => {
      expect(() => getLowestPrice(result)).toThrow();
    }
  );

  it.each([
    ["", true],
    [0, true],
    [true, true],
  ])("isPrimitive should return true if value us typeof %s", (value, result) => {
    const expected = isPrimitive(value);

    expect(expected).toBe(result);
  });
});
