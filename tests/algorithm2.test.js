/* eslint no-undef: 0 */
import dropElements from "../DropIt/dropElements";
import steamrollArray from "../Steamroller/steamrollArray";

// test dropElements
describe("test dropElements", () => {
  it("should return", () => {
    expect(`${dropElements([1, 2, 3, 4], n => n >= 3)}`).toEqual(`${[3, 4]}`);
  });
  it("should return", () => {
    expect(`${dropElements([0, 1, 0, 1], n => n === 1)}`).toEqual(
      `${[1, 0, 1]}`
    );
  });
  it("should return", () => {
    expect(`${dropElements([1, 2, 3], n => n > 0)}`).toEqual(`${[1, 2, 3]}`);
  });
  // it("should return", () => {
  //     expect('' + dropElements([1, 2, 3, 4], function(n) { return n > 5; })).toEqual('[]');
  // });
  it("should return", () => {
    expect(`${dropElements([1, 2, 3, 7, 4], n => n > 3)}`).toEqual(`${[7, 4]}`);
  });
  it("should return", () => {
    expect(`${dropElements([1, 2, 3, 9, 2], n => n > 2)}`).toEqual(
      `${[3, 9, 2]}`
    );
  });
});
// test steamroller
describe("test steamroller", () => {
  it("should return", () => {
    expect(steamrollArray([[["a"]], [["b"]]])).toEqual(["a", "b"]);
  });
  it("should return", () => {
    expect(steamrollArray([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
  });
  it("should return", () => {
    expect(steamrollArray([1, [], [3, [[4]]]])).toEqual([1, 3, 4]);
  });
  it("should return", () => {
    expect(steamrollArray([1, {}, [3, [[4]]]])).toEqual([1, {}, 3, 4]);
  });
});
