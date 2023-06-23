export default async (event: Event) => {
  console.log('event', event)
  if (event < 3) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }
};
