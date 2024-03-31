function Product(name, price, img) {
  this.name = name;
  this.price = price;
  this.img = img;
}

var san_pham = [
  new Product("ip 1", 30000, ["./img/ip.jpg", "./img/test.jpg"]),
  new Product("ip 2", 30000, ["./img/ip.jpg", "./img/test.jpg"]),
  new Product("ip 3", 30000, ["./img/ip.jpg", "./img/test.jpg"]),
  new Product("ip 4", 30000, ["./img/ip.jpg", "./img/test.jpg"]),
  new Product("ip 5", 30000, ["./img/ip.jpg", "./img/test.jpg"]),
];

var table = document.getElementsByTagName("table")[0];
var i = 1;
san_pham.forEach((element, index) => {
  var row =
    `<tr>
    <td>` +
    i++ +
    `</td>
    <td>` +
    element["name"] +
    `</td>
    <td>` +
    element["price"] +
    `</td>
    <td><img width="50px" height="50px" src="` +
    element["img"][0] +
    `" /></td>
    <td><a href="update_product.html?index=` +
    index +
    `">Sua</a></td>
    <td><a href="#">Xoa</a></td>
  </tr>`;

  table.innerHTML += row;
});
