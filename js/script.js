var product = [
    {
        name: "iPhone 12",
        price: "53,999",
        old_price: "65,999",
        rate :"4.5",
        image: "images/1.jpg"
    },
    {
        name: "iPhone 13 mini",
        price: "89,999",
        old_price: "94,999",
        rate : "4.7",
        image: "images/2.jpg"
    },
    {
        name: "iPhone 14",
        price: "66,999",
        old_price: "79,999",
        rate : "4.8",
        image: "images/3.jpg"
    },
    {
        name: "Apple Watch SE (2nd Gen) ",
        price: "29,990",
        old_price: "32,000",
        rate : "4.5",
        image: "images/4.jpg"
    },
    {
        name: "Apple Watch Series 8 ",
        price: "41,990",
        old_price: "44,999",
        rate : "4.6",
        image: "images/5.jpg"
    },
    {
        name: "Apple Watch Ultra",
        price: "26,999",
        old_price: "31,999",
        rate : "4.5",
        image: "images/6.jpg"
    }
    ,
    {
        name: "Apple AirPods (2nd gen)",
        price: "10,990",
        old_price: "14,999",
        rate : "4.4",
        image: "images/7.jpg"
    },
    {
        name: "Apple AirPods (3rd gen)",
        price: "19,100",
        old_price: "19,999",
        rate : "4.2",
        image: "images/8.jpg"
    },
    {
        name: "Apple AirPods Pro",
        price: "25,990",
        old_price: "26,999",
        rate : "4.4",
        image: "images/9.jpg"
    }
];

function viewProduct() {
    var productHtml = ``;
    product.map((v, i) => {
        productHtml += `<div class="item">`;
        productHtml += `<image src="${v.image}" />`;
        productHtml += `<div class="content">`;
        productHtml += `<h3>${v.name}</h3>`;
        productHtml += `<h4>New price : ${v.price}</h4>`;
        productHtml += `<h4>Old price : <del>${v.old_price}<del></h4>`;
        productHtml += `<h4>Rating : ${v.rate}</h4>`;
        productHtml += `</div>`;
        productHtml += `<a href="javascript:deleteProduct(${i})"><i class="fa-solid fa-trash"></i></a>`;
        productHtml += "</div>";
    });

    document.getElementById("productList").innerHTML = productHtml;
}

viewProduct();

function deleteProduct(i) {
    product.splice(i, 1);
    alert("Item deleted successfully .");
    viewProduct();
}

function addProduct() {
    var n = prompt("Enter product name : ");
    var p = prompt("Enter product price : ");
    var o = prompt("Enter product old price : ");
    var r = prompt("Enter product rate : ");
    var i = prompt("Enter product image path : ");

    var new_product = {
        name: n,
        price: p,
        old_price: o,
        rate : r,
        image: i
    }

    product.push(new_product);
    alert("Item added successfully .");
    viewProduct();
}