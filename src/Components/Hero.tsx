
import "../Types/textType.css";
const Hero = () => {
  return (
    <section className="px-15 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between">

        {/* Left side */}
        <div className="text-center md:text-left">

          <h1 className="text-5xl font-bold">
             Build Your Ideal<br/><span className="brand">Development Stack</span>
          </h1>
          <p className="text-gray-500 mt-3">
            Explore frontend, backend, database and tooling options.<br />
            Compare them side by side,and put together the stack that fits your <br /> 
           next project.
          </p>
        
         <div className="mt-10 flex-row">
            <button className="btn-gradient px-5 py-2 rounded-lg">
            Explore Technologies
            </button>

            <button className="ml-3 px-6 py-2 border border-gray-200 rounded-lg text-gray-600">
               Learn More
            </button>

          </div>
        </div>

        {/* Right side e picture */}
        <div className="mt-8 md:mt-0">

          <img src="/assets/banner-stack.png"
            alt=""
            className="w-64 md:w-96"
          />
        </div>
      </div>
    </section>);
};

export default Hero;