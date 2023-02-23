var obj = [];
var found;
var notUser = document.getElementById("showingNotResult");

function settingItemsLocal(key, value) {
  var users = JSON.stringify(value);
  localStorage.setItem(key, users);
  console.log(value);
}

function gettingItemsLocal(key) {
  let listOfUsers = JSON.parse(localStorage.getItem(key));
  if (listOfUsers == undefined) {
    return;
  }
  return listOfUsers;
}

function findItem(filterd) {
  var uInput = gettingItemsLocal("user");
  found = uInput.filter((e) => {
    return e.username.toLowerCase().includes(filterd.toLowerCase());
  });
  console.log("نتيحه", found);
  if (found.length == 0) {
    return null;
  } else return found;
}

function addOneUser(username, password) {
  console.log("user and pass", username, password);
  obj = gettingItemsLocal("user");
  var requestBody = {
    username: username,
    password: password,
  };

  obj.push(requestBody);
  settingItemsLocal("user", obj);
  console.log("obj", obj);
  return obj;
}

function deleteItem(filterd) {
  console.log("filtr", filterd.username);
  if (filterd != null) {
    var uu = gettingItemsLocal("user");
    result = uu.filter((e) => {
      return !e.username
        .toLowerCase()
        .includes(filterd[0].username.toLowerCase());
    });
    console.log("remove", result);
    settingItemsLocal("user", result);

    return result;
  } else "please make a choice for specific user";
}

function deleteClick() {
  let searchResult = findItem(document.getElementById("searchInput").value);

  let res = deleteItem(searchResult);
  settingItemsLocal("user", res);
  console.log("delete", res);
}

function update() {
  let pass;
  let removeOldItem = findItem(document.getElementById("old-name").value);
  let newItemName = document.getElementById("new-name").value;
  pass = removeOldItem[0]?.password;
  let newElement = deleteItem(removeOldItem);
  console.log("old", newElement);

  show(addOneUser(newItemName, pass));
}

function searchforelement() {
  let searchResult = findItem(document.getElementById("searchInput").value);
  console.log(searchResult);
  if (searchResult == null) {
    notUser.innerHTML = "no data found";
  } else show(searchResult);
  // console.log(searchResult);
}

function showUI() {
  show(gettingItemsLocal("user"));
}

function show(sUser) {
  var html = "<table border='1|1' background-color='white' border-color='red'>";

  if (sUser != undefined) {
    for (var i = 0; i < sUser.length; i++) {
      html += "<tr>";
      html += "<td>" + "name" + "</td>";
      html += "<td>" + sUser[i].username + "</td>";
      html += "<td>" + "password" + "</td>";
      html += "<td>" + sUser[i].password + "</td>";
      html += "</tr>";
    }
  }

  html += "</table>";
  document.getElementById("box").innerHTML = html;
}
