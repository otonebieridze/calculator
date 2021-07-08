let value = document.querySelector("#display");

let arr = [];
let regex = /[/*+-]/;
function fun1(e) {
  if (value.textContent == 0) {
    arr = [];
  }
  if (e == '.' && value.textContent[value.textContent.length-1] == '.') {
    value.textContent = value.textContent;
  } else if (e == '.' && fun2() == true) {
    value.textContent = value.textContent;
  } else {
    if (regex.test(value.textContent[value.textContent.length-1]) == true && regex.test(e) == true && e != '-') {
      arr.pop();
      if (e != '-' && regex.test(arr[arr.length-1]) == true) {
        arr.pop();
        arr.push(e);
      } else {
        arr.push(e);
      }
      value.textContent = arr.join("");
    } else {
      arr.push(e);
      value.textContent = arr.join("");
    }
  }
}
function cl() {
  arr = [0];
  value.textContent = arr.join("");
}
function eq() {
  arr = [eval(value.textContent)];
  value.textContent = arr.join("");
}

function fun2() {
  for (let i = arr.length-1; i >= 0; i--) {
    if (arr[i] == ".") {
      return true;
    }
    if (regex.test(arr[i]) == true) {
      return false;
    }
  }
}
