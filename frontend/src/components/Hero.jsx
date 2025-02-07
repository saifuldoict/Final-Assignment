const Hero = () => {
  return (
      <div>
          <header className=" container mx-auto relative bg-slate-600">
              <img
                  src="Saiful"
                  alt=""
                  className="absolute -z-10 inline-block h-full w-full object-cover"
              />
              <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                  <div className="mx-auto max-w-3xl text-center bg-inherit">
                      <h1 className="mb-6 pb-4 text-4xl font-bold text-white md:text-6xl">
                          <span>"Saiful"</span>
                      </h1>
                      <p className="mx-auto mb-5 max-w-[528px] text-xl text-[#0e0303] lg:mb-8">
                          The place where you can make your dream project to show in real world!
                      </p>
                      <a
                          href="/services"
                          className="inline-block rounded-full bg-[#c9fd02] px-8 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white"
                      >
                          Start
                      </a>
                  </div>

              </div>
          </header>
      </div>
  );
};

export default Hero;