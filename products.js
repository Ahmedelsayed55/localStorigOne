let container = document.querySelector("#productsContainer");
let productJ = localStorage.getItem("products");
let products = productJ ? JSON.parse(productJ) : [];

products.length == 0
  ? (container.innerHTML = `<p class="text-center text-muted">No products found.</p>`)
  : products.forEach((p) => {
      let card = `
          <div class="col-md-3 mb-3">
            <div class="card shadow-sm">
              <div class="card-body text-center">
                <img class="w-75" src="./img/51Cida8RecL._UF894,1000_QL80_.jpg" alt="">
                <h5 class="card-title">${p.name}</h5>
                <p class="card-text">Price: <strong>${p.price}</strong></p>
                <p class="card-text">Quantity: <strong>${p.qty}</strong></p>
              </div>
            </div>
          </div>
        `;
      container.innerHTML += card;
    });