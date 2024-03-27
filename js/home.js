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

var list_product = document.getElementsByClassName("list-product")[0];
san_pham.forEach(function (element, index) {
  var product =
    `<div class="product">
<div class="img">
  <img
    src="` +
    element["img"][0] +
    `"
    alt=""
  />
</div>
<div class="info">
  <h3><a href="product_detail.html?index=` +
    index +
    `">` +
    element["name"] +
    `</a></h3>
  <i>Price: ` +
    element["price"] +
    `</i>
</div>
<div class="xxx">
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-regular fa-star"></i>
  <i class="fa-regular fa-star"></i>
  <b>Đã bán 15.6k</b>
</div>
</div>`;

  list_product.innerHTML += product;
});

// xu li ve trang chu

var back_home = document.getElementById("back_home");

back_home.onclick = function () {
  window.location.href = "index.html";
};

// xu li tim kiem

var form = document.getElementsByTagName("form")[0];

form.onsubmit = function (e) {
  e.preventDefault();
  var search = form.search.value;
  //   console.log(search);

  var item;
  var i;
  san_pham.forEach(function (element, index) {
    if (search == element["name"]) {
      item = element;
      i = index;
      return;
    }
  });
  var product =
    `<div class="product">
<div class="img">
  <img
    src="` +
    item["img"][0] +
    `"
    alt=""
  />
</div>
<div class="info">
  <h3><a href="product_detail.html?index=` +
    i +
    `">` +
    item["name"] +
    `</a></h3>
  <i>Price: ` +
    item["price"] +
    `</i>
</div>
<div class="xxx">
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-regular fa-star"></i>
  <i class="fa-regular fa-star"></i>
  <b>Đã bán 15.6k</b>
</div>
</div>`;

  list_product.innerHTML = product;
};
