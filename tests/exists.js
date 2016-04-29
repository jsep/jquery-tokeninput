import {describe, it} from "meteor/practicalmeteor:mocha"
import {expect} from "meteor/practicalmeteor:chai"
import {$} from "meteor/jquery"
import "meteor/jsep:jquery.tokeninput"
import "./test.html"

describe("jquery.tokeninput", ()=>{

  it(".TokenList should be define", ()=>{
    expect($.TokenList).to.be.ok;
  });

  it(".tokenInput should be define", ()=>{
    let $obj = $("#jquery.tokeninput");
    expect($obj.tokenInput).to.be.ok;
  });
});

