import { useTheme } from "next-themes";
import resumeData from "../../data/resumeData";

const ResumeCardTwo = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div key={1}>
        <div className="flex items-center space-x-2 mb-4">
          <div className="text-6xl text-[#F95054]">{resumeData[0].icon}</div>
          <h4 className="text-5xl dark:text-white font-medium">
            {resumeData[0].title}
          </h4>
        </div>
        {/* end flex */}

        {resumeData[0].items.map((singleItem) => (
          <div
            className="py-1 pl-5 pr-3 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
            style={{
              background: `${
                theme === "dark" ? "transparent" : singleItem?.bg
              }`,
            }}
            key={singleItem.id}
          >
            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
              {singleItem.date}
            </span>
            <h3 className="text-xl dark:text-white"> {singleItem.title} </h3>
            <p className="dark:text-[#b7b7b7]">{singleItem.place}</p>
          </div>
        ))}
        <div className="flex items-center space-x-2 mb-4">
          <div className="text-6xl text-[#F95054]">{resumeData[2].icon}</div>
          <h4 className="text-5xl dark:text-white font-medium">
            {resumeData[2].title}
          </h4>
        </div>
        {/* end flex */}

        {resumeData[2].items.map((singleItem) => (
          <div
            className="py-1 pl-5 pr-3 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
            style={{
              background: `${
                theme === "dark" ? "transparent" : singleItem?.bg
              }`,
            }}
            key={singleItem.id}
          >
            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
              {singleItem.date}
            </span>
            <h3 className="text-xl dark:text-white"> {singleItem.title} </h3>
            <p className="dark:text-[#b7b7b7]">{singleItem.place}</p>
          </div>
        ))}
      </div>
      <div key={2}>
        <div className="flex items-center space-x-2 mb-4">
          <div className="text-6xl text-[#F95054]">{resumeData[1].icon}</div>
          <h4 className="text-5xl dark:text-white font-medium">
            {resumeData[1].title}
          </h4>
        </div>
        {/* end flex */}

        {resumeData[1].items.map((singleItem) => (
          <div
            className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
            style={{
              background: `${
                theme === "dark" ? "transparent" : singleItem?.bg
              }`,
            }}
            key={singleItem.id}
          >
            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
              {singleItem.date}
            </span>
            <h3 className="text-xl dark:text-white"> {singleItem.title} </h3>
            <p className="dark:text-[#b7b7b7]">{singleItem.place}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResumeCardTwo;
