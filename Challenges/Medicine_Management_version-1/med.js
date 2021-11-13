// "use strict";

// localStorage.clear();
let formData = {};
let subbtn = document.getElementById("subbtn");
let SavenClose = document.getElementById("SavenClose");
let dynamicHere = document.getElementById("dynamicHere");
showTask();

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  resetForm();
}

//Reset the data
function resetForm() {
  subbtn.style.display = "block";
  SavenClose.style.display = "block";
  savebtn.style.display = "none";
  document.getElementById("Mname").value = "";
  document.getElementById("content").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("price").value = "";
  document.getElementById("sName").value = "";
  document.getElementById("contact").value = "";
}

// Save current & Add more Medicine
subbtn.addEventListener("click", function () {
  saveTask();
  showTask();
  resetForm();
});

// Save current and close form
SavenClose.addEventListener("click", () => {
  saveTask();
  resetForm();
  closeForm();
  showTask();
});

// Save Task
function saveTask() {
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
      showNotification("Medicine added successfully!");
    } else {
      alert("Mobile number is invalid");
      showNotification("Mobile number is Invalid!");
    }
  } else {
    showNotification("Please fill all the fields!");
  }
}

function phonenumber(inputtxt) {
  if (inputtxt.length == 10) {
    return true;
  } else {
    return false;
  }
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
  document.getElementById("SavenClose").style.display = "none";
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
  //   showNotification("Edit clicked!!!");
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
  closeForm();
});

// Delete row
function onDelete(index) {
  if (confirm("Do you want to delete a record?")) {
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showNotification("Record deleted successfully!");
    showTask();
  }
}

// Delete All
let deletebtn = document.getElementById("delete");
deletebtn.addEventListener("click", function () {
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
    showNotification("All records are deleted!");
  }
});

document.querySelector(".add").addEventListener("click", function () {
  openForm();
});

// search med
function searchMed() {
  var input, filter, table, tr, td, i, txtValue, txt2;
  input = document.getElementById("sMed");
  filter = input.value.toUpperCase();
  table = document.getElementById("dynamicHere");
  tr = table.getElementsByTagName("tr");
  // console.log(tr);

  for (i = 0; i < tr.length; i++) {
    tp = tr[i].getElementsByTagName("td")[0];
    td = tr[i].getElementsByTagName("td")[1];

    if (td || tp) {
      // console.log(td);
      txtValue = td.textContent || td.innerText;
      txt2 = tp.textContent || tp.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else if (txt2.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// selecting element for Sorting
document.addEventListener(
  "click",
  function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
      text = target.textContent || target.innerText;
    console.log(text);
    if (text === "Medicine Name ▲" || text === "Medicine Name ▼") {
      element = document.getElementById("1");
      colAttr = element.getAttribute("data_column");
      orderAttr = element.getAttribute("data-order");
    } else if (text === "Contents ▲" || text === "Contents ▼") {
      element = document.getElementById("2");
      colAttr = element.getAttribute("data-column");
      orderAttr = element.getAttribute("data-order");
    } else if (text === "Quantity ▲" || text === "Quantity ▼") {
      element = document.getElementById("3");
      colAttr = element.getAttribute("data-column");
      orderAttr = element.getAttribute("data-order");
    } else if (text === "Price per UNIT ▲" || text === "Price per UNIT ▼") {
      element = document.getElementById("4");
      colAttr = element.getAttribute("data-column");
      orderAttr = element.getAttribute("data-order");
      console.log(element);
      console.log(colAttr);
    } else if (text === "Supplier Name ▲" || text === "Supplier Name ▼") {
      element = document.getElementById("5");
      colAttr = element.getAttribute("data-column");
      orderAttr = element.getAttribute("data-order");
    } else if (
      text === "Supplier's Contact ▲" ||
      text === "Supplier's Contact ▼"
    ) {
      element = document.getElementById("6");
      colAttr = element.getAttribute("data-column");
      orderAttr = element.getAttribute("data-order");
    } else {
      text = field;
    }

    sortt(text, orderAttr, colAttr);
  },
  false
);

// Sort logic
const sortt = (text, order, col) => {
  if (orderAttr === "asc") {
    element.textContent = field(text);
    element.setAttribute("data-order", "desc");
    orderAttr = element.getAttribute("data-order");

    // console.log(col);
    taskObj = taskObj.sort((a, b) => (a[colAttr] > b[colAttr] ? 1 : -1));
  } else {
    element.textContent = field(text);
    element.setAttribute("data-order", "asc");
    orderAttr = element.getAttribute("data-order");

    // console.log(col);
    taskObj = taskObj.sort((a, b) => (a[colAttr] < b[colAttr] ? 1 : -1));
  }

  localStorage.setItem("localtask", JSON.stringify(taskObj));
  showTask();
};

// Symbol changer in textField
const field = (text) => {
  first_part = text.slice(0, -1);
  sym = text.slice(-1);

  return sym == "▼" ? first_part + "▲" : first_part + "▼";
};

function showNotification(message) {
  let note = document.getElementById("message").textContent;
  // console.log(note.textContent)
  document.getElementById("message").textContent = message;
  setTimeout(() => {
    document.getElementById("message").textContent = note;
  }, 3000);
}
