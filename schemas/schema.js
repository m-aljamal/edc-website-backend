import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import partners from "./partners";
import banners from "./banners";
import otherHeroImg from "../schemas/otherHeroImgs";
import workShops from "./workShops";
import projects_achievements from "./projectsAchievements";
import projects from "./project";
import progress from "./progress";
import goal from "./goal";
import events from "./events";
import imagesSlide from "./imageSlides";
import localeString from "./localeString";
import localeText from "./localeText";
import blockText from "./blockText";
import localeBlock from "./localeBlock";
import report from "./report";
import gallaryImage from "./gallery_image";
import galleryVideo from "./galleryVideo";
export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    goal,
    localeText,
    localeString,
    partners,
    banners,
    otherHeroImg,
    workShops,
    projects_achievements,
    projects,
    progress,
    events,
    imagesSlide,
    blockText,
    localeBlock,
    report,
    gallaryImage,
    galleryVideo,
  ]),
});
