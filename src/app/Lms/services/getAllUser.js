const courseRepo = require("../repository/courses");

function getAllCoursesService(fastify) {
  const { getCourseList } = courseRepo(fastify);

  return async ({ logTrace }) => {
    fastify.log.info({
      message: "get All courses service",
      logTrace
    });
    const knex = await fastify.knex;
    const response = await getCourseList.call(knex, {
      logTrace
    });
    return response; // User transformer in case transformation is needed
  };
}
module.exports = getAllCoursesService;
