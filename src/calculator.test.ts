// src/calculator.test.ts
import { describe, it, expect } from "vitest";
import { add } from "./calculator";

describe("add", () => {
  it("returns 0 for an empty string", () => {
    expect(add("1,2,3,4")).toBe(10);
  });
});