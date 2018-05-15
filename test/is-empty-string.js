import { expect } from "chai";
import isEmptyString from "../src/is-empty-string";

describe("Is empty string", () => {
 
  it("should test if a value is an empty string or not", () => {
    expect(isEmptyString("")).to.be.true;
    expect(isEmptyString(new String(""))).to.be.true;
    expect(isEmptyString(" ", { trim: true })).to.be.true;
    expect(isEmptyString(" ")).to.be.false;
    expect(isEmptyString("Hello, World")).to.be.false;
    expect(isEmptyString(new String("Hello, World"))).to.be.false;
    expect(isEmptyString(1)).to.be.false;
    expect(isEmptyString(true)).to.be.false;
    expect(isEmptyString(null)).to.be.false;
    expect(isEmptyString(undefined)).to.be.false;
    expect(isEmptyString([])).to.be.false;
    expect(isEmptyString({})).to.be.false;
    expect(isEmptyString(/^.*$/)).to.be.false;
  });

});
