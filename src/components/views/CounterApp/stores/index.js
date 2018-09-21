import { observable } from "mobx";

const counterState = observable({
  count: 0
});

counterState.increment = function() {
  this.count++;
};

counterState.decrement = function() {
  this.count--;
};

export default counterState;
