const { logQuery } = require("../../commons/helpers");
const { COURSE } = require("../commons/constants");

function courseRepo(fastify) {
  async function createCourse({ data, logTrace }) {
    const knex = this;
    const query = knex(COURSE.NAME).returning("*").insert(data);
    logQuery({
      logger: fastify.log,
      query,
      context: "Create Course",
      logTrace
    });
    const response = await query;
    return response[0];
  }
  async function getCourseList({ logTrace }) {
    const knex = this;
    const query = knex.select("*").from(COURSE.NAME);
    logQuery({
      logger: fastify.log,
      query,
      context: "get Course List",
      logTrace
    });
    const response = await query;
    return response;
  }


  return {
    getCourseList,
    createCourse
  };
}

module.exports = courseRepo;
