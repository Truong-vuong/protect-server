import protectRouters from "../../utils/protectRouters";
import { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  const query: any = getQuery(event);
  // console.log(query)
  try {
    if (query.user != 1) {
      await protectRouters(query.rank);
    }
    let data = await $fetch(`https://fakestoreapi.com/users/${event.context.params.id}`);

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
