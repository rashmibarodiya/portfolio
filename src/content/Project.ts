
import recipe from "/recipe.jpg"
import evt2 from "/evt2.jpg"
import evt from "/evt.jpg"
export const PROJECTS = [
    {
      title: "RecipeWorld",
      image: recipe,
      time:"Sep 2024 - Oct 2024",
      description:
        `A recipe-sharing platform that empowers users to explore, add, rate and search for 40+ recipes across
        diverse categories including Chinese, Italian, vegan, dessert, and vegetarian. and user authentication.`,
      technologies: ["Nextjs","Claudinary", "Typescript", "Tailwind CSS", "Next-Auth", "React", "MongoDB"],
    },
    {
      title: "EvenTTracker",
      image: evt2,
      time:"Oct 2024 - Nov 2024",
      description:
        `An application for managing events and projects, with features such as addition, deletion, modification 
        as well as email notification of events`,
      technologies: ["MERN", "Nodemailer", "JWT", "Passport","Node-Cron", "Tailwind CSS","Typescript"],
    },
    // {
    //   title: "Portfolio Website",
    //   image: project3,
    //   description:
    //     "A personal portfolio website showcasing projects, skills, and contact information.",
    //   technologies: ["HTML", "CSS", "React",],
    // }
  ];
  