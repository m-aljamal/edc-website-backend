export default {
  name: "gallaryImage",
  title: "Gallary image",
  type: "document",

  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
    },

    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category.title",
      media: "mainImage",
    },
    prepare(selection) {
      const { category } = selection;
      return Object.assign({}, selection, {
        subtitle: category && category.length > 0 ? category[0].title : "",
      });
    },
  },
};
