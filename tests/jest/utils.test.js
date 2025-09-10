import {sum, multiply} from "./utils.js";

test("Adding two numbers", ()=>{
  expect(sum(11,22)).toBe(33);
});

test("Multyplying two numbers", ()=>{
  expect(multiply(1,2)).toBe(2);
});

