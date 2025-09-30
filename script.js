let table = document.querySelector("table tbody");
let productJ = localStorage.getItem("products");
let products = JSON.parse(productJ);
//add product
let model = document.querySelector("#model");
let productName = document.querySelector("#productName");
let productPrice = document.querySelector("#productPrice");
let productQty = document.querySelector("#productQty");
//edit product
let model2 = document.querySelector("#model2");
let productName2 = document.querySelector("#productName2");
let productPrice2 = document.querySelector("#productPrice2");
let productQty2 = document.querySelector("#productQty2");
let productIndex = null;
let showItem = () => {
  table.innerHTML = "";
  products.forEach((el, index) => {
    
    let row = `
         <tr>
            <td>${index + 1}</td>
            <td>${el.name}</td>
            <td>${el.price}</td>
            <td>${el.qty}</td>
            <td>
                <button onclick="showEditProduct(${index})"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onclick="deleteProduct(${index})"><i class="fa-solid fa-trash"></i></button>
            </td>
          </tr>
        `;
    table.innerHTML += row;
  });
};
showItem();
let NewProduct = () => {
  productName.value = "";
  productPrice.value = "";
  productQty.value = "";
  model.style.display = "flex";
};

let deleteProduct = (index) => {
  Swal.fire({
    icon: "warning",
    title: "Do you Sure to delete this product?",
    showDenyButton: true,
    denyButtonText: "No, Cancel",
    confirmButtonText: "Yes, Delete",
  }).then((result) => {
    if (result.isConfirmed) {
      products.splice(index, 1);
      localStorage.setItem("products", JSON.stringify(products));
      showItem();
      Swal.fire("Deleted!", "", "success");
    }
  });
};
let addProduct = () => {
  let product = {
    name: productName.value,
    price: +productPrice.value,
    qty: +productQty.value,
  };
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  model.style.display = "none";
  Swal.fire("Added", "", "success");
  showItem();
};

let showEditProduct = (index) => {
    productIndex = index;
  model2.style.display = "flex";
  let productEdit = products[index];
  productName2.value = productEdit.name;
  productPrice2.value = productEdit.price;
  productQty2.value = productEdit.qty;
};


let editProduct = () => {
     let product = {
    name: productName2.value,
    price: +productPrice2.value,
    qty: +productQty2.value,
  };
  products[productIndex] = product;
  localStorage.setItem("products", JSON.stringify(products));
  model2.style.display = "none";
  Swal.fire("Updated", "", "success");
  showItem();
};

let closeModel = () => {
  model.style.display = "none";
  model2.style.display = "none";
};
