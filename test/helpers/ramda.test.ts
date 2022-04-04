import { recursiveMapValues } from "../../src/helpers/ramda";

describe("Ramda helpers", () => {
  describe("recursiveMapValues", () => {
    it("should recursively map object values", () => {
      const transform = (letter: string) => letter.toUpperCase();

      expect(
        recursiveMapValues(transform, {
          a: "a",
          b: "b",
          c: {
            d: "d",
            e: {
              f: "f",
            },
          },
        })
      ).toMatchObject({
        a: "A",
        b: "B",
        c: {
          d: "D",
          e: {
            f: "F",
          },
        },
      });
    });
  });
});
