const courseRepo = require("../repository/courses");

function createCourseService(fastify) {
  const { createCourse } = courseRepo(fastify);

  return async ({ body, logTrace }) => {
    fastify.log.info({
      message: "create course service",
      logTrace
    });
    const knex = await fastify.knex;
    const date = new Date();
    const response = await createCourse.call(knex, {
      data: { ...body, date_created: date },
      logTrace
    });
    return response; 
  };
}
module.exports = createCourseService;
