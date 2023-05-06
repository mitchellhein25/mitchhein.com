const Intro = () => {
  return (
    <>
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-10">
        <h2 className="after-effect after:left-52">About Me</h2>
        {/* About page title */}

        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center  ">
          <div className="col-span-12 space-y-2.5">
            <div className="">
              <p className="text-gray-lite  dark:text-color-910 leading-7">
              Hello! I&apos;m Mitch, a software developer based in Bryan, Texas. From my roots in Iowa (Go Hawks!) to my current home in the Lone Star State, I&apos;ve developed a passion for creating maintainable, scalable, and high-quality software that empowers businesses and users alike.
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
              When I&apos;m not coding, I enjoy cheering on my favorite sports teams, spending quality time with my wife and family, and exploring the latest tech trends. With a tireless work ethic and an unquenchable thirst for learning, I&apos;m always striving to make every day count.
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
              Thank you for visiting my portfolio, and please feel free to reach out to me to learn more about my work or discuss potential collaborations.
              </p>
              {/* <br></br>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910 font-bold" >
              Bullets about my Development Experience:
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
              - Software Developer with experience building applications primarily with C#, Flutter, React, and Python.
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
              - Full-stack mobile development using Flutter and NoSQL databases.
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
              - Full-stack web development with React, Javascript, CSS, and HTML.
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
              - Proficient with SQL, MongoDB, Java, and other languages, frameworks, and technologies.
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
              - Built various web scraping tools, automation scripts, and data science programs in Python.
              </p> */}
            </div>
          </div>
        </div>
      </div>
      {/* End pt-12 */}
    </>
  );
};

export default Intro;
