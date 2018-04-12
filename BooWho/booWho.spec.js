/* eslint no-undef: 0 */
const booWho = require("./booWho");

describe("test booWho", () => {
  it("should return", () => {
    expect(booWho(true)).toBe(true);
  });
  it("should return", () => {
    expect(booWho(false)).toBe(true);
  });
  it("should return", () => {
    expect(booWho([1, 2, 3])).toBe(false);
  });
  it("should return", () => {
    expect(booWho([].slice)).toBe(false);
  });
  it("should return", () => {
    expect(booWho({ a: 1 })).toBe(false);
  });
  it("should return", () => {
    expect(booWho(1)).toBe(false);
  });
  it("should return", () => {
    expect(booWho(NaN)).toBe(false);
  });
  it("should return", () => {
    expect(booWho("a")).toBe(false);
  });
  it("should return", () => {
    expect(booWho("true")).toBe(false);
  });
  it("should return", () => {
    expect(booWho("false")).toBe(false);
  });
});
