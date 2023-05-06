const Tag = () => {
  const tagList = [
    "C#",
    "Dart",
    "Python",
    "Javascript",
    "Typescript",
    "HTML",
    "CSS",
    "SQL",
    "Flutter",
    "Firebase",
    ".NET",
    "React",
    "Node",
    "Express",
    "Next",
    "Bootstrap",
    "ESLint",
    "Jest",
    "Visual Studio",
    "IIS",
    "PyCharm",
    "Beautiful Soup",
    "Selenium",
    "Pandas",
    "Git",
    "Heroku",
    "Vercel",
    "Wordpress",
  ];
  return (
    <>
      {tagList.map((tag, i) => (
        <button className="resume-btn text-[15px]" key={i}>
          {tag}
        </button>
      ))}
    </>
  );
};

export default Tag;
