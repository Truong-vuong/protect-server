
export default async (event: Event) => {
  const authorization = event.node.req.headers?.authorization;
  const { isAccess } = getQuery(event);
  if (!authorization) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Loggin for view data',
      message: "Unauthorized",
    });
  };
  if (isAccess === 'false') {
    throw createError({
      statusCode: 405,
      statusMessage: 'you do not have access',
      message: "Unauthorized",
    });
  }
};
