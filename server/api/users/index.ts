import protectRouters from "../../utils/protectRouters";
import { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  try {
    await protectRouters(event);
    let data = await $fetch(`https://fakestoreapi.com/users`);

    if (!data) {
      throw createError({
        statusCode: 401,
        statusMessage: "Data not found",
      });
    }
    return data;
  } catch (e) {
    return e;
  }
});
