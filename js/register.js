var form = document.getElementsByTagName("form")[0];

form.onsubmit = function () {
  //   e.preventDefault();
  var email = form.email.value;
  var pass = form.password.value;
  var newpass;
  var xn;

  if (email.length == 0 || pass.length == 0) {
    alert("cac truong du lieu khong duoc trong");
  }

  if (pass.length < 8) {
    alert("mat khau khong duoc it hon 8 ki tu");
  }
};
