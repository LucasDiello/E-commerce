import axios from "axios";

export async function getCategories() {
    const response = axios.get("https://api.mercadolibre.com/sites/MLB/categories");
    return response;
}

export async function getSearchItem(search : string) {
  const response = axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${search}`);
  return response;
}
  
  export async function getProductsFromCategoryAndQuery(categoryId : string, query : string) {
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const response = axios.get(url);
    return response;
  }
  
  export async function getProductById(productId : number) {
    const url = `https://api.mercadolibre.com/items/${productId}`;
    const response = axios.get(url);
    return response;
  }
  