import { describe, it } from "node:test";
import assert from "node:assert";
import { sum, multiply } from "../utils.js";
describe("Utils Test Suite: sum", () => {
it("Should sum two numbers", () => {
assert.strictEqual(sum(1, 2), 3);
});
});
describe("Utils Test Suite: multiply", () => {
it("Should multiply two numbers", () => {
assert.strictEqual(multiply(5, 3), 15);
});
});
