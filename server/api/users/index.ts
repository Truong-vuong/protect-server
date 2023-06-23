import protectRouters from "../../utils/protectRouters";
import { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  const query: any = getQuery(event);
  try {
    if (query.rank !== 1) {
      await protectRouters(event);
    };
    
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
