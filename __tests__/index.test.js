const { helloNpm } = require("..");

describe("helloNpm", () => {
  it("should return an success response", () => {
    const result = helloNpm();
    expect(result).toBe("Hello NPM !");
  });
});
