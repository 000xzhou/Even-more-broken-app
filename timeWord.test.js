const { timeWord, convert } = require("./timeWord");

describe("#covert", () => {
  test("function that coverts numbers into words", () => {
    expect(convert(1)).toBe("one");
    expect(convert(10)).toBe("ten");
    expect(convert(40)).toBe("forty");
    expect(convert(13)).toBe("thirteen");
    expect(convert(5)).toBe("five");
    expect(convert(86)).toBe("eighty six");
  });
});

describe("#timeword", () => {
  test("function that coverts time into words", () => {
    expect(timeWord("00:00")).toBe("midnight");
    expect(timeWord("00:12")).toBe("twelve twelve am");
    expect(timeWord("01:00")).toBe("one o’clock am");
    expect(timeWord("06:01")).toBe("six oh one am");
    expect(timeWord("06:10")).toBe("six ten am");
    expect(timeWord("06:18")).toBe("six eighteen am");
    expect(timeWord("06:30")).toBe("six thirty am");
    expect(timeWord("10:34")).toBe("ten thirty four am");
    expect(timeWord("12:00")).toBe("noon");
    expect(timeWord("12:09")).toBe("twelve oh nine pm");
    expect(timeWord("23:23")).toBe("eleven twenty three pm");
  });
});
