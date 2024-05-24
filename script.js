let products = [];
let productId = 1;
// let carts = [];

document.querySelector("#title").addEventListener("submit", function (event) {
	event.preventDefault();

    const productName = document.querySelector("#productName").value;
	const priceAmount = document.querySelector("#priceAmount").value;
    const imageUrl= document.querySelector("#imageUrl").value;


    const newProduct = {

		id: productId++,
		caption: productName,
        price: parseFloat(priceAmount).toFixed(2),
        imageUrl: imageUrl,
		
	};
    
	products.push(newProduct);

	displayUpload(newProduct);


	// document.getElementById("title").reset();

});



function displayUpload(newProduct) {
	const productList = document.querySelector("#itemBox");

	const productItem = document.createElement("div");
	productItem.className =
		"p-4 flex space-x-4";

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.className = "form-checkbox accent-pink-600 ";
	// checkbox.addEventListener("change", updateTotalValue);

	const img = document.createElement("img");
	img.src = newProduct.imageUrl;
	img.alt = newProduct.caption;
	img.className = "h-36 w-36 object-scale-down";

	const productDetails = document.createElement("div");
	
	const productTitle = document.createElement("h2");
	productTitle.className = "font-semibold";
	productTitle.textContent = newProduct.caption;

	const productPrice = document.createElement("h2");
	productPrice.className = "font-semibold";
	productPrice.textContent = `$${newProduct.price}`;


	productDetails.appendChild(productTitle);
	productDetails.appendChild(productPrice);
	
	productItem.appendChild(checkbox);
	productItem.appendChild(img);
	productItem.appendChild(productDetails);
	
	productList.appendChild(productItem);

}


function addToCart() {
	const kfc = document.querySelector('#itemBox');
	const checkboxes = kfc.querySelectorAll('input[type="checkbox"]');
    const cart = document.querySelector("#cart");
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
			const parentLabel = checkbox.parentNode;
			const clonedNode = parentLabel.cloneNode(true);

			// const productTitle = document.createElement("h2");
			// productTitle.className = "font-semibold";
			// productTitle.textContent = text.id;

			const listItem = document.createElement('div');

			// const productDetails = document.createElement("div")

			
			


			
			// productTitle.appendChild(clonedNode);
			// productDetails.appendChild(productTitle);

			// listItem.appendChild(productDetails);
			
			// listItem.appendChild(clonedNode);
			// cart.appendChild(listItem);

			listItem.appendChild(clonedNode);
			cart.appendChild(listItem);
			
        }
    });
}































// toggle add
// function toggleAdd(event) {
// 	const checkbox = event.target;
// 	const uploadId = parseInt(checkbox.getAttribute("data-id"));
// 	const upload = uploads.find((upload) => upload.id === uploadId);

// 	if (upload) {
// 		upload.likes = checkbox.checked;
// 		updateLikeCounter();
// 	}
// }





// Validating image URLs using RegEx
// function isImgUrl(imageURL) {
// 	const input = new URL(imageURL);
// 	return /\.(jpg|jpeg)$/.test(input.pathname);
// }



// function displayUpload(upload) {
// 	const displaySection = document.getElementById("displaySection");
// 	const card = document.createElement("div");
// 	card.className = "bg-white p-4 rounded-lg shadow-lg";

// 	card.innerHTML = `
// 		<img src="${upload.imageURL}" alt="${upload.caption}" class="w-full aspect-[4/3] rounded-md mb-4 object-cover">
//     <p class="text-gray-700 font-semibold text-2xl text-balance overflow-hidden my-4 p-4">${upload.price}</p>
//     <label class="inline-flex items-center mt-2 text-2xl px-4">
//       <input type="checkbox" class="w-8 h-8 text-2xl accent-rose-600">
//       <span class="ml-2 text-gray-700 font-semibold">Love this 😍!</span>
//     </label>
//   `;

// 	displaySection.appendChild(card);
	
// }