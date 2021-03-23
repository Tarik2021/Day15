function checkVariableScope() {
  "use strict";
  let i = "function variable";
  //promijeni ovo

  if (true) {
    const i = "block variable";
    // i ovo
    console.log("Scope i is: ", i);
  }
  console.log("Scope i is: ", i);
  return i;
}
checkVariableScope();
module.exports = checkVariableScope;
