import {
  numToUUID,
  replaceUUID,
  replaceUUIDs,
  UUID_PLACEHOLDER,
  UUID_REGEX,
} from "../../src/helpers/uuid";

describe("UUID helpers", () => {
  describe("numToUUID", () => {
    it("should convert a number into a UUID-like string", () => {
      expect(numToUUID(0)).toMatch("00000000-0000-0000-0000-000000000000");
      expect(numToUUID(1)).toMatch("00000000-0000-0000-0000-000000000001");
      expect(numToUUID(10)).toMatch("00000000-0000-0000-0000-00000000000A");
      expect(numToUUID(11)).toMatch("00000000-0000-0000-0000-00000000000B");
      expect(numToUUID(100)).toMatch("00000000-0000-0000-0000-000000000064");
      expect(numToUUID(101)).toMatch("00000000-0000-0000-0000-000000000065");
      expect(numToUUID(Number.MAX_SAFE_INTEGER)).toMatch("00000000-0000-0000-001F-FFFFFFFFFFFF");
    });
  });

  describe("replaceUUID", () => {
    const foundUUIDs = new Map();

    foundUUIDs.set("00000000-0000-0000-0000-000000000000", "0");
    foundUUIDs.set("00000000-0000-0000-0000-000000000001", "1");
    foundUUIDs.set("00000000-0000-0000-0000-000000000002", "2");

    it("should replace UUID with substitute value from map if found", () => {
      expect(replaceUUID(foundUUIDs, "00000000-0000-0000-0000-000000000000")).toMatch("0");
      expect(replaceUUID(foundUUIDs, "00000000-0000-0000-0000-000000000001")).toMatch("1");
      expect(replaceUUID(foundUUIDs, "00000000-0000-0000-0000-000000000002")).toMatch("2");
    });

    it("should replace UUID with and create substitute value in map if not found", () => {
      expect(replaceUUID(foundUUIDs, "3")).toMatch("00000000-0000-0000-0000-000000000003");
      expect(replaceUUID(foundUUIDs, "4")).toMatch("00000000-0000-0000-0000-000000000004");
      expect(replaceUUID(foundUUIDs, "5")).toMatch("00000000-0000-0000-0000-000000000005");
    });
  });

  describe("replaceUUIDs", () => {
    it("should replace UUIDs deeply in an object", () => {
      // 10000000-0000-0000-0000-000000000000 => 00000000-0000-0000-0000-000000000000
      // 20000000-0000-0000-0000-000000000000 => 00000000-0000-0000-0000-000000000001
      // 30000000-0000-0000-0000-000000000000 => 00000000-0000-0000-0000-000000000002
      expect(
        replaceUUIDs({
          foo: "10000000-0000-0000-0000-000000000000",
          bar: "20000000-0000-0000-0000-000000000000",
          zeta: {
            a: "10000000-0000-0000-0000-000000000000",
            b: "30000000-0000-0000-0000-000000000000",
          },
        })
      ).toMatchObject({
        foo: "00000000-0000-0000-0000-000000000000",
        bar: "00000000-0000-0000-0000-000000000001",
        zeta: {
          a: "00000000-0000-0000-0000-000000000000",
          b: "00000000-0000-0000-0000-000000000002",
        },
      });
    });
  });

  describe("UUID_PLACEHOLDER", () => {
    it("should match UUID_REGEX", () => {
      expect(UUID_PLACEHOLDER).toMatch(UUID_REGEX);
    });
  });
});
