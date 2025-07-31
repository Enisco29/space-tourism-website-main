const Hero = () => {
  return (
    <div className="absolute top-0 w-full lg:h-[135%] h-full flex lg:items-center md:items-end justify-center overflow-hidden">
      {/* Content */}
      <div className="z-10 container mx-auto lg:mx-[100px] md:mx-[50px] max-sm:mx-[30px] flex flex-col md:flex-row items-center justify-between">
        {/* Left side content */}
        <div className="flex-1 max-md:items-center flex flex-col  justify-end max-w-2xl">
          <p className="text-white/80 text-sm tracking-[0.2em] uppercase mb-8">
            SO, YOU WANT TO TRAVEL TO
          </p>

          <h1 className="text-white text-8xl md:text-9xl font-bold leading-none mb-8">
            SPACE
          </h1>

          <p className="text-white/70 text-md max-md:mb-8 max-md:text-center leading-relaxed max-w-md">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>

        {/* Right side - Explore button */}
        <div className="flex justify-end items-center">
          <button className="relative w-[200px] h-[200px] bg-white rounded-full flex items-center justify-center text-black text-xl font-medium tracking-wider transition duration-300 hover:scale-105 before:content-[''] before:absolute before:rounded-full before:w-[300px] before:h-[300px] before:bg-white/10 before:transition-transform before:duration-300 before:scale-0 hover:before:scale-100 z-10 overflow-hidden">
            <span className="relative z-20">EXPLORE</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
