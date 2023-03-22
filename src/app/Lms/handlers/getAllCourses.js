const getAllCourseService = require("../services/getAllUser");

function getAllCourseHandler(fastify) {
  const getAllCourse = getAllCourseService(fastify);
  return async (request, reply) => {
    const { logTrace } = request;
    const response = await getAllCourse({ logTrace });
    return reply.code(200).send(response);
  };
}

module.exports = getAllCourseHandler;
