import { GrInProgress as icon } from "react-icons/gr";

export default {
  name: "progress",
  title: "project progress",
  type: "object",
  icon,
  fields: [
    {
      name: "title",
      type: "string",
      title: "progress title",
    },
    {
      name: "image",
      type: "image",
      title: "progress icon",
      options: {
        hotspot: true,
      },
    },
    {
      name: "date",
      title: "progress date",
      type: "date",
    },
    {
      name: "description",
      title: "progress description",
      type: "text",
    },
  ],
};
