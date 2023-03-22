const { errorSchemas } = require("../../commons/schemas/errorSchemas");

const getAllCourses = {
  tags: ["COURSE"],
  summary: "This API is to get All courses ",
  headers: { $ref: "request-headers#" },
  response: {
    200: {
      type: "array",
      items: {
        type: "object",
        properties: {
          course_name: { type: "string" },
          topic_name: {
            type: "object",
            required: ["subject", "sub_subject"],
            additionalProperties: false,
            properties: {
             subject:{ type: "string" },
             sub_subject:{type: "string" },
            }
          },
          class_link: { type: "string" },
          date: { type: "string" },
          time: { type: "string" },
          mentor_name: { type: "string" }
        }
      }
    }
  },
  ...errorSchemas
};

module.exports = getAllCourses;
