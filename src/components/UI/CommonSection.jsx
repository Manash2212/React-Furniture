import Common_img from "../../assets/images/common-bg.jpg";

const CommonSection = ({ title }) => {
  return (
    <section className="min-w-full box-border mt-[70px]">
      <div className="container min-w-full">
        <div className="item h-[30vh] max-md:h-[27vh] max-sm:h-[24vh] relative">
          <img
            src={Common_img}
            alt="common-bg"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="headings absolute inset-0 flex items-center justify-center">
            <h1 className="text-white font-style text-3xl font-bold max-md:text-2xl max-sm:text-xl max-sm:text-center">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonSection;
