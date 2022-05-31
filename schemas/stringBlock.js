import { GrInProgress as icon } from "react-icons/gr";

export default {
  name: "stringBlock",
  title: "نص كامل",
  type: "object",
  icon,
  fields: [
    {
      name: "blockOfString",
      type: "array",
      title: "نص كامل",
      of: [
        {
          type: "block",
          title: "Block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
            { title: "Hidden", value: "blockComment" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Number", value: "number" },
            { title: "Normal", value: "normal" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
          },
        },
        {
          name: "image",
          type: "image",
          title: "صور",
        },
      ],
    },
  ],
};
