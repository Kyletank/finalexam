var titleV, authorV, bookidV, departmentV;

function readFom() {
  titleV = document.getElementById("title").value;
  authorV = document.getElementById("author").value;
  bookidV = document.getElementById("bookid").value;
  departmentV = document.getElementById("department").value;
  console.log(titleV, authorV, bookidV, departmentV);
}

document.getElementById("create").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + titleV)
    .set({
      title: titleV,
      author: authorV,
      bookid: bookidV,
      department: departmentV,
    });
  alert("Data Inserted");
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("bookid").value = "";
  document.getElementById("department").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + titleV)
    .on("value", function (snap) {
      document.getElementById("title").value = snap.val().title;
      document.getElementById("author").value = snap.val().author;
      document.getElementById("bookid").value = snap.val().bookid;
      document.getElementById("department").value = snap.val().department;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + titleV)
    .update({
      //   title: titleV,
      author: authorV,
      bookid: bookidV,
      department: departmentV,
    });
  alert("Data Update");
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("bookid").value = "";
  document.getElementById("department").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + titleV)
    .remove();
  alert("Data Deleted");
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("bookid").value = "";
  document.getElementById("department").value = "";
};
