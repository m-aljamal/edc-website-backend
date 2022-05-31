import { GrInProgress as icon } from "react-icons/gr";

export default {
  name: "event",
  title: "الفعاليات و النشاطات",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "العنوان",
    },
    {
      name: "slug",
      type: "slug",
      title: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "mainImage",
      type: "image",
      title: "الصورة الرئيسية",
      options: {
        hotspot: true,
      },
    },
    {
      name: "video",
      type: "string",
      title: "رابط فيديو",
    },
    {
      name: "videoPoster",
      type: "image",
      title: "video poster",
    },
    {
      name: "shortDescription",
      type: "localeText",
      title: "شرح مختصر",
    },
    {
      name: "date",
      type: "date",
      title: "التاريخ",
    },
    {
      name: "location",
      type: "localeString",
      title: "المكان",
    },

    {
      name: "panner",
      type: "image",
      title: "صورة البانر",
      options: {
        hotspot: true,
      },
    },
    {
      name: "paragraph1",
      type: "localeBlock",
      title: "نص 1",
    },
    {
      name: "imageOfText",
      type: "array",
      of: [{ type: "image" }],
      title: "صور للنص",
      options: {
        hotspot: true,
      },
    },
    {
      name: "paragraph2",
      type: "localeBlock",
      title: "نص 2",
    },
  ],
};
