import Image from "next/image";
import scalable from "../../../public/undraw_business_plan_re_0v81.svg";
import user from "../../../public/undraw_designer_life_re_6ywf.svg";
import maintance from "../../../public/undraw_maintenance_re_59vn.svg";
import ilustration2 from "../../../public/undraw_revenue_re_2bmg.svg";
import solution from "../../../public/undraw_solution_mindset_re_57bf.svg";

const AboutUs = () => {
  return (
    <>
      <div
        className="min-h-screen container flex flex-col gap-6 pt-20 px-4 md:px-0"
        id="about"
      >
        <div>
          <p className="font-black text-4xl md:text-7xl mb-10 text-center text-mythemes-darkPurple">
            About Us
          </p>
          <p className="text-center text-lg md:text-4xl font-normal max-w-lg md:max-w-2xl mx-auto">
            For over 25 years, we have defied Silicon Valley norms, forging our
            unique path in product development.
          </p>
          <p className="text-center max-w-lg md:max-w-2xl mx-auto mt-6"></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-6 md:gap-0">
          <div className="flex justify-center">
            <Image alt="img" src={ilustration2} width={400} />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-mythemes-darkPurple text-2xl md:text-3xl font-extrabold mb-5 text-center md:text-left">
              Why VAN's?
            </p>
            <p className="text-base md:text-xl text-center md:text-left max-w-lg">
              At VAN's ERP, we believe that exceptional business software is a
              work of art, and great art doesn't happen overnight. Founded in
              Indonesia, we have dedicated over 25 years to perfecting our
              craft. By consistently challenging Silicon Valley norms, we have
              forged our unique path in product development.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-center">
            <Image
              src={solution}
              alt="1"
              className="w-32 h-32 md:w-52 md:h-52"
            />
            <p className="font-bold text-center text-lg mb-5 mt-4">
              Comprehensive Solutions
            </p>
            <p className="text-center text-sm">
              We offer a full suite of ERP modules tailored to meet the needs of
              various industries, including inventory management, financial
              accounting, sales, and customer relationship management.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={user} alt="1" className="w-32 h-32 md:w-52 md:h-52" />
            <p className="font-bold text-center text-lg mb-5 mt-4">
              User-Friendly Interface
            </p>
            <p className="text-center text-sm">
              Our software is designed with the user in mind, featuring an
              intuitive interface that simplifies complex processes and enhances
              productivity.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={scalable}
              alt="1"
              className="w-32 h-32 md:w-52 md:h-52"
            />
            <p className="font-bold text-center text-lg mb-5 mt-4">
              Scalability
            </p>
            <p className="text-center text-sm">
              Whether you are a small business or a large enterprise, our
              solutions are scalable to grow with your business.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={maintance}
              alt="1"
              className="w-32 h-32 md:w-52 md:h-52"
            />
            <p className="font-bold text-center text-lg mb-5 mt-4">
              24/7 Support
            </p>
            <p className="text-center text-sm">
              We provide round-the-clock support to ensure that your operations
              run smoothly without any interruptions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
