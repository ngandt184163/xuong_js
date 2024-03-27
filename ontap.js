console.log("js ben ngoai");
var array = [
  {
    id: 1,
    img: "./img/ip.jpg",
    name: "Ip 3s",
    price: 20000,
    soluong: 20,
    giamgia: "",
  },
  {
    id: 2,
    img: "./img/ip.jpg",
    name: "Ip 4s",
    price: 20000,
    soluong: 20,
    giamgia: "",
  },
  {
    id: 3,
    img: "./img/ip.jpg",
    name: "Ip 5s",
    price: 20000,
    soluong: 20,
    giamgia: "",
  },
  {
    id: 4,
    img: "./img/ip.jpg",
    name: "Ip 6s",
    price: 20000,
    soluong: 20,
    giamgia: "",
  },
  {
    id: 5,
    img: "./img/ip.jpg",
    name: "Ip 7s",
    price: 20000,
    soluong: 20,
    giamgia: "",
  },
  {
    id: 6,
    img: "./img/ip.jpg",
    name: "Ip 8s",
    price: 20000,
    soluong: 20,
    giamgia: "",
  },
  {
    id: 7,
    img: "./img/giay.jpg",
    name: "NIKE",
    price: 2010,
    soluong: 60,
    giamgia: "co giam gia",
  },
  {
    id: 8,
    img: "./img/giay.jpg",
    name: "Ip 7s",
    price: 20000,
    soluong: 20,
    giamgia: "",
  },
];
array.forEach((element) => {
  var pro = document.getElementsByTagName("div")[0];
  var node =
    '<div class="product">' +
    '<div class="img">' +
    '<img width="100px" height="50px" src="' +
    element["img"] +
    '" alt="" />' +
    "</div>" +
    "</div>" +
    '<div class="title">' +
    "<h2>" +
    element["name"] +
    "</h2>" +
    "</div>" +
    '<div class="info">' +
    "<b>" +
    element["price"] +
    "</b>" +
    "<i>" +
    element["soluong"] +
    "</i>" +
    "</div>" +
    "</div>";
  var test = "<p>ho</p>";
  //   pro.appendChild(test);
  pro.innerHTML += node;
});
