import { GrWorkshop as icon } from "react-icons/gr";

export default {
  name: "projects_achievements",
  title: "Projects achievements",
  type: "document",
  icon,
  fields: [
    {
      name: "image",
      type: "image",
      title: "achievement image",
      options: {
        hotspot: true,
      },
      validation: (Role) => Role.required().error("iamge is required"),
    },
    {
      name: "name",
      type: "localeString",
      title: "achievement name",
      validation: (Role) => Role.required().error("name is required"),
    },
    {
      name: "number",
      type: "number",
      title: "achievement count",
      description: "add work achievement number ",
      validation: (Role) => Role.required().error("number is required"),
    },
  ],
};
