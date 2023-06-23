export default defineEventHandler(async (event: any) => {
  console.log("product2111");
  try {
    const data = await $fetch(`https://fakestoreapi.com/products`, { method: 'GET'});
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 3000);
    });
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
});
