import { useTheme } from "next-themes";
import Image from "next/image";
import addressData from "../../data/addressData";

const AddressTwo = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {addressData.slice(0, 2).map((item, i) => (
        <div
          key={i}
          style={{
            background: `${theme === "dark" ? "#212425" : item?.bg}`,
          }}
          className="dark:bg-transparent p-[30px]  border-[#A6A6A6] gap-2 rounded-xl"
        >
          <div className="flex justify-center">
            <span className="w-8 mt-2 mr-5 mb-3">
              <Image
                src={item.icon}
                width={30}
                height={20}
                alt="icon"
                className="text-4xl dark:text-white"
              />
            </span>
            <p className="text-xl font-semibold dark:text-white pt-2">
              {item?.title} :
            </p>
          </div>
            <p className="text-sm md:text-xl font-semibold dark:text-white text-center">
              {item?.info}
            </p>
        </div>
      ))}
    </>
  );
};

export default AddressTwo;
