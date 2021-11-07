// "use strict";
// document.getElementById("myForm").style.display = "block";
// document.getElementById("list").style.display = "block";

// localStorage.clear();
let formData = {};
let subbtn = document.getElementById("subbtn");
let list = document.querySelector(".list");
let dynamicHere = document.getElementById("dynamicHere");

// Add Medicine
subbtn.addEventListener("click", function () {
  formData["Mname"] = document.getElementById("Mname").value;
  formData["content"] = document.getElementById("content").value;
  formData["quantity"] = document.getElementById("quantity").value;
  formData["price"] = document.getElementById("price").value;
  formData["sName"] = document.getElementById("sName").value;
  formData["contact"] = document.getElementById("contact").value;

  if (
    formData["Mname"].trim() != 0 &&
    formData["content"].trim() != 0 &&
    formData["quantity"].trim() != 0 &&
    formData["price"].trim() != 0 &&
    formData["sName"].trim() != 0 &&
    formData["contact"].trim() != 0
  ) {
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {
      taskObj = [];
    } else {
      taskObj = JSON.parse(webtask);
    }

    if (phonenumber(formData["contact"])) {
      taskObj.push(formData);
      localStorage.setItem("localtask", JSON.stringify(taskObj));
      showNotification("Medicine added successfully!!!");
    } else {
      alert("Mobile number is invalid");
      showNotification("Mobile number is Invalid!!!");
      return;
    }
  } else {
    showNotification("Please fill all the fields!!!");
  }

  showTask();
  resetForm();
});

list.addEventListener("click", function () {
  showTask();
  showNotification("Medicines listed!!!");
});

function phonenumber(inputtxt) {
  if (inputtxt.length == 10) {
    return true;
  } else {
    return false;
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  // showNotification("Form is open!!!");
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  showNotification("Form closed!!!");
  resetForm();
}

function closelist() {
  document.getElementById("list").style.display = "none";
  showNotification("List closed!!!");
}

function closeSearch() {
  let th = document.getElementById("listSearch");
  th.style.display = "none";
  showNotification("Searches closed!!!");
  location.reload();
}

//Reset the data
function resetForm() {
  subbtn.style.display = "block";
  savebtn.style.display = "none";
  document.getElementById("Mname").value = "";
  document.getElementById("content").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("price").value = "";
  document.getElementById("sName").value = "";
  document.getElementById("contact").value = "";
}

// Display task
function showTask() {
  let webtask = localStorage.getItem("localtask");
  if (webtask == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(webtask);
  }

  while (dynamicHere.firstChild) {
    dynamicHere.firstChild.remove(dynamicHere.firstChild);
  }
  let index = -1;
  taskObj.forEach((onebyone) => {
    var table = document
      .getElementById("storeList")
      .getElementsByTagName("tbody")[0];
    index++;
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = onebyone.Mname;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = onebyone.content;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = onebyone.quantity;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = onebyone.price;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = onebyone.sName;
    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = onebyone.contact;
    var cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<button onClick='onEdit(${index})'>📝Edit</button> <button onClick='onDelete(${index})'>🗑Delete</button>`;
    // showNotification("List updated!!!");
  });
}

// Edit task
function onEdit(index) {
  openForm();
  let saveindex = document.getElementById("saveindex");
  let subbtn = document.getElementById("subbtn");
  let savebtn = document.getElementById("savebtn");
  saveindex.value = index;
  let webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);
  let temp = taskObj[index];

  document.getElementById("Mname").value = temp.Mname;
  document.getElementById("content").value = temp.content;
  document.getElementById("quantity").value = temp.quantity;
  document.getElementById("price").value = temp.price;
  document.getElementById("sName").value = temp.sName;
  document.getElementById("contact").value = temp.contact;

  subbtn.style.display = "none";
  savebtn.style.display = "block";
  showNotification("Edit clicked!!!");
}

// save edited task
let savebtn = document.getElementById("savebtn");
savebtn.addEventListener("click", function () {
  let webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);
  let saveindex = document.getElementById("saveindex").value;
  taskObj[saveindex].Mname = document.getElementById("Mname").value;
  taskObj[saveindex].content = document.getElementById("content").value;
  taskObj[saveindex].quantity = document.getElementById("quantity").value;
  taskObj[saveindex].price = document.getElementById("price").value;
  taskObj[saveindex].sName = document.getElementById("sName").value;
  taskObj[saveindex].contact = document.getElementById("contact").value;

  //   console.log(taskObj);
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  showNotification("Changes saved successfully!!!");
  showTask();
  resetForm();
});

// Delete row
function onDelete(index) {
  let webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);
  taskObj.splice(index, 1);
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  showNotification("Record deleted successfully!!!");
  showTask();
}

// Delete All
let deletebtn = document.getElementById("delete");
deletebtn.addEventListener("click", function () {
  document.getElementById("list").style.display = "block";
  showTask();

  setTimeout(function () {
    if (confirm("Want to Delete all records?")) {
      let subbtn = document.getElementById("subbtn");
      let savebtn = document.getElementById("savebtn");
      let webtask = localStorage.getItem("localtask");
      let taskObj = JSON.parse(webtask);

      if (webtask == null) {
        taskObj = [];
      } else {
        taskObj = JSON.parse(webtask);
        taskObj = [];
      }
      subbtn.style.display = "block";
      savebtn.style.display = "none";
      localStorage.setItem("localtask", JSON.stringify(taskObj));
      document.getElementById("list").style.display = "block";
      showTask();
    }
  }, 750);
  showNotification("All records are deleted!!!");
});

// Search Medicine
let search = document.getElementById("search");
search.addEventListener("click", function () {
  let item = document.getElementById("sMed").value;
  //   console.log(item);
  let webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);
  let temp = taskObj;
  //   console.log(temp.length);

  let row = -1;

  for (let index = 0; index < temp.length; index++) {
    // console.log(temp[index].Mname);
    if (item === temp[index].Mname) {
      row = index;
    }
  }
  if (row != -1) {
    let th = document.getElementById("listSearch");
    th.style.display = "block";

    var table = document
      .getElementById("searchList")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = temp[row].Mname;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = temp[row].content;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = temp[row].quantity;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = temp[row].price;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = temp[row].sName;
    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = temp[row].contact;
    //   console.log(row);
    showNotification("Search is Successful!!!");
  } else {
    showNotification("Search not found!!!");
  }
});

document.querySelector(".add").addEventListener("click", function () {
  // console.log("Medicine added");
  // showNotification("Add button clicked!!!");
  openForm();
});

document.querySelector(".list").addEventListener("click", function () {
  // console.log("Medicine listed");
  // showNotification("List button clicked!!!");
  document.getElementById("list").style.display = "block";
});

let sort = document.getElementById("sort");
sort.addEventListener("click", function () {
  let webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);
  // console.log(taskObj);

  selectElement = document.querySelector("#ip");
  output = selectElement.value;

  if (output === "Mname") {
    taskObj.sort((a, b) =>
      a.Mname > b.Mname ? 1 : b.Mname > a.Mname ? -1 : 0
    );
    showNotification("List sorted by Medicine's Name");
  } else if (output === "content") {
    taskObj.sort((a, b) =>
      a.content > b.content ? 1 : b.content > a.content ? -1 : 0
    );
    showNotification("List sorted by Medicine's Content");
  } else if (output === "sName") {
    taskObj.sort((a, b) =>
      a.sName > b.sName ? 1 : b.sName > a.sName ? -1 : 0
    );
    showNotification("List sorted by Supplier's Name");
  }

  localStorage.setItem("localtask", JSON.stringify(taskObj));
  document.getElementById("list").style.display = "block";
  showTask();
});

function showNotification(message) {
  let note = document.getElementById("message").textContent;
  // console.log(note.textContent)
  document.getElementById("message").textContent = message;
  setTimeout(() => {
    document.getElementById("message").textContent = note;
  }, 3000);
}
