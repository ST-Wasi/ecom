const API_URL = "http://localhost:4242";

export async function deleteProduct(product) {
  const response = await fetch(`${API_URL}/product/delete/${product}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      token: JSON.parse(localStorage.getItem("user")).token,
    },
    body: JSON.stringify({ productID: product }),
  });

  if (!response.ok) {
    throw new Error("Deleting Product Failed");
  }

  return await response.json();
}
