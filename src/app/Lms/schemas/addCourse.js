const { errorSchemas } = require("../../commons/schemas/errorSchemas");

const postAddCourse = {
  tags: ["Courses"],
  summary: "This API is to create a Course",
  headers: { $ref: "request-headers#" },
  body: {
    type: "object",
    required: ["course_name", "class_link","date","topic_name","time","mentor_name"],
    additionalProperties: false,
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
  },
  response: {
    201: {
      type: "object",
      properties: {
        course_id: { type: "string", format: "uuid" }
      }
    },
    ...errorSchemas
  }
};

module.exports = postAddCourse;
