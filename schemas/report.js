export default {
  name: "reports",
  title: "Reports",
  type: "document",
  fields: [
    {
      name: "cover",
      type: "image",
      title: "Cover",
      options: {
        hotspot: true,
      },
    },
    {
      name: "pdf_url",
      type: "string",
      title: "PDF url",
    },
  ],
};
