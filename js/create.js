var obj = [];

function settingItemsLocal(key, value) {
  var users = JSON.stringify(value);
  localStorage.setItem(key, users);
  console.log(value);
}

function gettingItemsLocal(key) {
  let listOfUsers = localStorage.getItem(key);
  return JSON.parse(listOfUsers);
}

function add() {
  var requestBody = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  obj.push(requestBody);
  settingItemsLocal("user", obj);
  console.log(obj);
}
