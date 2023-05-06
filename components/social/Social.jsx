import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Social = () => {
  const socialContent = [
    {
      id: 1,
      link: "https://github.com/mitchellhein25",
      icon: <FaGithub className="h-12"/>,
      iconClass: "text-[#bd2c00] ",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/mitchell-hein/",
      icon: <FaLinkedinIn className="h-12"/>,
      iconClass: "text-[#0072b1] ",
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
};

export default Social;
