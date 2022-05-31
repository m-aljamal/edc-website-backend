import { MdWork as icon } from "react-icons/md";

export default {
  name: "projects",
  title: "Projects",
  type: "document",
  icon,
  initialValue: () => ({
    showOnHomePage: false,
  }),
  fields: [
    {
      name: "image",
      type: "array",
      of: [{ type: "image" }],
      title: "project images",
      options: {
        hotspot: true,
      },
      validation: (Role) => Role.required().error("iamge is required"),
    },
    {
      name: "projectName",
      type: "localeString",
      title: "Project name",
    },
    {
      name: "title",
      title: "Title",
      type: "localeString",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "video",
      type: "string",
      title: "video",
    },
    {
      name: "videoPoster",
      type: "string",
      title: "video poster",
    },

    {
      name: "projectIntro",
      type: "localeBlock",
      title: "مقدمة المشروع",
    },

    {
      name: "shortDescription",
      type: "localeString",
      title: "Short description",
    },

    {
      name: "maingoal",
      type: "localeBlock",
      title: "هدف المشروع",
    },

    {
      name: "projectGoals",
      type: "array",
      title: "أهداف اخرى للمشروع",
      of: [{ type: "goal" }],
    },
    {
      name: "projectDescription1",
      type: "localeBlock",
      title: " وصف المشروع 1",
    },
    {
      name: "projectDescription2",
      type: "localeBlock",
      title: " وصف المشروع 2",
    },
  ],
};
