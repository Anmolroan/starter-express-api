const schemas = require("../schemas");
const handlers = require("../handlers");

module.exports = async fastify => {

  fastify.route({
    method: "GET",
    url: "/courses",
    schema: schemas.getAllCourses,
    handler: handlers.getAllCourseHandler(fastify)
  });

  fastify.route({
    method: "POST",
    url: "/courses",
    schema: schemas.postAddCourse,
    handler: handlers.createCourse(fastify)
  });
};
