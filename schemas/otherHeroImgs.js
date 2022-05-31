import { BsImages as icon } from "react-icons/bs";

export default {
  name: "other_hero_imgs",
  title: "Pages hero images",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      type: "string",
      title: "image name",
      validation: (Rule) =>
        Rule.required().error("A title of min. 10 characters is required"),
    },
    {
      name: "image",
      type: "image",
      title: "hero image",
      options: {
        hotspot: true,
      },
      validation: (Role) => Role.required().error("iamge is required"),
    },
    {
      name: "name",
      type: "string",
      title: "text title",
      validation: (Role) => Role.required().error("title is required"),
    },
  ],
};
