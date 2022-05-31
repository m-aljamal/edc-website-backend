import { IoIosPeople as icon } from "react-icons/io";

export default {
  name: "imagesSlide",
  title: "slides image",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "aboutPageSlide",
      type: "array",
      of: [{ type: "image" }],
      title: "about image slide",
      description: "about image slide",
    },
  ],
};
