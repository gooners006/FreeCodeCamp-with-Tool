/* eslint no-undef: 0 */
import booWho from "../BooWho/booWho";
import convertHTML from "../ConvertHTMLEntities/convertHTMLEntities";
import uniteUnique from "../SortedUnion/sortedUnion";
import spinalCase from "../SpinalTapCase/spinalTapCase";
import sumFibs from "../SumAllOddFibonacciNumbers/sumFibs";
import sumPrimes from "../SumAllPrimes/sumPrimes";
// test booWho
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
// test convertHTML
describe("test convertHTML", () => {
  it("should return", () => {
    expect(convertHTML("Dolce & Gabbana")).toEqual("Dolce &amp; Gabbana");
  });
  it("should return", () => {
    expect(convertHTML("Hamburgers < Pizza < Tacos")).toEqual(
      "Hamburgers &lt; Pizza &lt; Tacos"
    );
  });
  it("should return", () => {
    expect(convertHTML("Sixty > twelve")).toEqual("Sixty &gt; twelve");
  });
  it("should return", () => {
    expect(convertHTML('Stuff in "quotation marks"')).toEqual(
      "Stuff in &quot;quotation marks&quot;"
    );
  });
  it("should return", () => {
    expect(convertHTML("Shindler's List")).toEqual("Shindler&apos;s List");
  });
  it("should return", () => {
    expect(convertHTML("<>")).toEqual("&lt;&gt;");
  });
  it("should return", () => {
    expect(convertHTML("abc")).toEqual("abc");
  });
});
// test sorted Union
describe("test sortedUnion", () => {
  it("should return", () => {
    expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([
      1,
      3,
      2,
      5,
      4
    ]);
  });
  it("should return", () => {
    expect(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])).toEqual([
      1,
      3,
      2,
      [5],
      [4]
    ]);
  });
  it("should return", () => {
    expect(uniteUnique([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5]);
  });
  it("should return", () => {
    expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual([
      1,
      2,
      3,
      5,
      4,
      6,
      7,
      8
    ]);
  });
});
// test spinal tap case
describe("test spinalTapCase", () => {
  it("should return", () => {
    expect(spinalCase("This Is Spinal Tap")).toEqual("this-is-spinal-tap");
  });
  it("should return", () => {
    expect(spinalCase("thisIsSpinalTap")).toEqual("this-is-spinal-tap");
  });
  it("should return", () => {
    expect(spinalCase("The_Andy_Griffith_Show")).toEqual(
      "the-andy-griffith-show"
    );
  });
  it("should return", () => {
    expect(spinalCase("Teletubbies say Eh-oh")).toEqual(
      "teletubbies-say-eh-oh"
    );
  });
  it("should return", () => {
    expect(spinalCase("AllThe-small Things")).toEqual("all-the-small-things");
  });
});
// test sumFibs
describe("test sumFibs", () => {
  it("should return", () => {
    expect(sumFibs(1000)).toBe(1785);
  });
  it("should return", () => {
    expect(sumFibs(4000000)).toBe(4613732);
  });
  it("should return", () => {
    expect(sumFibs(4)).toBe(5);
  });
  it("should return", () => {
    expect(sumFibs(75024)).toBe(60696);
  });
  it("should return", () => {
    expect(sumFibs(75025)).toBe(135721);
  });
});
// test sumPrimes
describe("test sumPrimes", () => {
  it("should return", () => {
    expect(sumPrimes(10)).toBe(17);
  });
  it("should return", () => {
    expect(sumPrimes(977)).toBe(73156);
  });
});
