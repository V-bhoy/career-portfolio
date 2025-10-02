import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="h-[100px] w-[100px] cursor-pointer">
      <a href={icon.link} target="_blank" rel="noopener noreferrer">
        <img className="h-full w-full" src={icon.imgPath} alt={icon.name} />
      </a>
    </div>
  );
};

const LogoShowcase = () => (
  <>
    <h3 className="text-center text-3xl">Companies Worked At</h3>
    <div className="md:my-20 my-10 flex align-center justify-center gap-5">
      {logoIconsList.map((icon, index) => (
        <LogoIcon key={index} icon={icon} />
      ))}
    </div>
    {/* <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />

    <div className="marquee h-42">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
    </div> */}
  </>
);

export default LogoShowcase;
