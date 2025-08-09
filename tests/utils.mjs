import {it, describe} from "node:test";
import assert from "node:assert";


const sum=(a,b)=> a+b;

describe("Utils Test suite", ()=>{
  it("Should add Two numbers", ()=>{
    assert.strictEqual(sum(1,2), 3);
  });
});

