/* eslint no-undef: 0 */
const convertHTML = require("./convertHTMLEntities");

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
