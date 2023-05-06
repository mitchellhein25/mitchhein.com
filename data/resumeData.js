import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";

module.exports = [
  {
    id: 1,
    title: "Experience",
    icon: <MdOutlineBusinessCenter />,
    items: [
      {
        id: 1,
        date: "July 2020 - Present",
        title: "Product Developer",
        place: "Lisam Systems",
        bg: "#EEF5FA",
      },

      {
        id: 2,
        date: "July 2022 - Present",
        title: "Cross-Platform Mobile Developer",
        place: "Private Startup",
        bg: "#F2F4FF",
      },

      {
        id: 3,
        date: "January 2021 - Present",
        title: "Web Developer",
        place: "Freelance",
        bg: "#EEF5FA",
      },
    ],
  },
  {
    id: 2,
    title: "Projects",
    icon: <FaProjectDiagram />,
    items: [
      {
        id: 1,
        date: "March 2022 - May 2022",
        title: "Crowd-Sourced Fitness App",
        place: "School Project",
        bg: "#FCF4FF",
      },

      {
        id: 2,
        date: "January 2022 - May 2022",
        title: "BCS Real Estate Website",
        place: "Personal Project",
        bg: "#FCF9F2",
      },

      {
        id: 3,
        date: "July 2021 - September 2021",
        title: "Rental Search Application",
        place: "Personal/School Project",
        bg: "#FCF4FF",
      },

      {
        id: 4,
        date: "May 2021 - August 2021",
        title: "Finance Application",
        place: "Personal Project",
        bg: "#FCF4FF",
      },
    ],
  },
  {
    id: 3,
    title: "Education",
    icon: <MdOutlineSchool />,
    items: [
      {
        id: 1,
        date: "2020-2022",
        title: "BS in Computer Science",
        place: "Oregon State University",
        bg: "#FFF4F4",
      },

      {
        id: 2,
        date: "2014 - 2017",
        title: "BS in Exercise Physiology",
        place: "Texas A&M University",
        bg: "#FFF1FB",
      },
    ],
  },
];
