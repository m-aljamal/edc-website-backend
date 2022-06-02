export default {
  name: "gallaryVideo",
  title: "Gallary video",
  type: "document",

  fields: [
    {
      name: "viedo",
      type: "string",
      title: "viedo url",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
  ],
};
