import { GrGroup as icon } from "react-icons/gr";

export default {
  name: "workShops",
  title: "work shops",
  type: "document",
  icon,
  fields: [
    {
        name: "image",
        type: "image",
        title: "work shop image",
        options: {
          hotspot: true,
        },
        validation: (Role) => Role.required().error("iamge is required"),
      },
  ],
};
