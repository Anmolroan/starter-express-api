const createCourseService = require("../services/createUsers");

function createCourseHandler(fastify) {
  const createCourse = createCourseService(fastify);
  return async (request, reply) => {
    const { body, params, logTrace } = request;
    const response = await createCourse({ body, params, logTrace });
    return reply.code(201).send(response);
  };
}

module.exports = createCourseHandler;
