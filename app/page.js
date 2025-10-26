import ButtonWithModal from "@/components/Button";

export default function HomePage() {
  return (
    <main className=" bg-white">
      <section
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-start"
        style={{
          backgroundImage: "url('/assets/homepage.png')",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(271.86deg, rgba(0,0,0,0) 17.64%, #000000 95.6%)",
          }}
        ></div>

        <div className="relative ml-[4vw] w-[60vw] h-[85vh] flex flex-col mt-[20vh]">
          <h1 className="font-extrabold leading-[1.29] tracking-[-0.04em] text-white text-4xl">
            Bringing smiles to families
            <br />
            with exceptional care
          </h1>

          <p className="mt-6 text-white text-sm font-semibold leading-relaxed">
            By simplifying healthcare access and offering tailored treatment
            <br />
            plans, Healinfy helps families feel confident and supported,
            <br />
            leading to happier, healthier lives.
          </p>

          <ButtonWithModal
            className="bg-red-600 hover:bg-green-700 w-[14vw] h-[6vh] rounded-full text-sm font-bold mt-8"
            buttonText="Book An Appointment"
          >
            <h2 className="text-2xl font-bold mb-2">Hello from the Modal!</h2>
            <p className="text-gray-600">
              This modal opens when you click the button. You can put any
              content here.
            </p>
          </ButtonWithModal>

          <div className="flex items-center mt-8">
            <img
              src="/assets/Google.png"
              alt="Google"
              className="h-[3vh] w-auto object-contain"
            />

            <div className="flex items-center ml-3">
              <img
                src="/assets/stars.png"
                alt="Stars"
                className="h-[4vh] w-auto object-contain"
              />
              <h1 className="ml-2 text-2xl font-bold text-[#FFD400]">4.5</h1>
              <h3 className="ml-2 font-semibold text-white">Google Reviews</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="flex  flex-col  ml-[4vw] h-[85vh] bg-white">
        <div className="flex mt-[4vw] flex-wrap gap-2 text-center px-4">
          <h1 className="font-bold text-4xl text-center">
            <span className="text-[#203169]">Let's make exceptional </span>
            <span className="text-[#2B7B37]">healthcare together</span>
          </h1>
        </div>
        <div className="flex flex-wrap gap-7 ml-[1vw] mt-8">
          {/* Card 1 */}
          <div className="relative w-[30vw] h-[35vh] group rounded-xl overflow-hidden border border-white/30 shadow-lg">
            <img
              src="/assets/homepage1.png"
              alt="Image 1"
              className="w-full h-full object-cover rounded-xl"
            />

            {/* Default Text */}
            <div className="absolute inset-0 flex ml-[1vw] items-end pb-4 text-black font-bold text-2xl transition-opacity duration-300 group-hover:opacity-0">
              Compassionate, Patient-
              <br />
              Centered Care
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col bg-white/60 backdrop-blur-lg backdrop-saturate-150 backdrop-contrast-125 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-[1.02]">
              <div className="text-[#2B7B37] font-bold text-2xl ml-[2vw] mt-[3vh]">
                Compassionate, Patient-
                <br />
                Centered Care
              </div>
              <div className="text-black text-lg ml-[2vw] mt-[3vh]">
                We put your well-being at the heart of <br />
                everything we do. Our team listens, <br />
                understands, and supports you at every step <br />
                of your health journey.
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-[30vw] h-[35vh] group rounded-xl overflow-hidden border border-white/30 shadow-lg">
            <img
              src="/assets/homepage2.png"
              alt="Image 2"
              className="w-full h-full object-cover rounded-xl"
            />

            {/* Default Text */}
            <div className="absolute inset-0 flex ml-[1vw] items-end pb-4 text-black font-bold text-2xl transition-opacity duration-300 group-hover:opacity-0">
              Experienced Medical
              <br />
              Professionals
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col bg-white/60 backdrop-blur-lg backdrop-saturate-150 backdrop-contrast-125 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-[1.02]">
              <div className="text-[#2B7B37] font-bold text-2xl ml-[2vw] mt-[3vh]">
                Experienced Medical
                <br />
                Professionals
              </div>
              <div className="text-black text-lg ml-[2vw] mt-[3vh]">
                Our doctors, nurses, and specialists bring <br />
                decades of experience and expertise across <br />
                various fields to provide the highest standard <br />
                of care.
              </div>
            </div>
          </div>

          <div className="relative w-[30vw] h-[35vh] group rounded-xl overflow-hidden border border-white/30 backdrop-blur-md bg-white/40 shadow-lg">
            <img
              src="/assets/homepage3.png"
              alt="Image 3"
              className="w-full h-full object-cover rounded-xl"
            />

            <div className="absolute inset-0 flex ml-[1vw] items-end pb-4 text-black font-bold text-2xl transition-opacity duration-300 group-hover:opacity-0">
              State-Of-The-Art
              <br />
              Facilities
            </div>

            <div className="absolute inset-0 flex flex-col justify-start bg-white/50 backdrop-blur-md backdrop-saturate-150 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="text-[#2B7B37] font-bold text-2xl ml-[2vw] mt-[3vh]">
                State-Of-The-Art
                <br />
                Facilities
              </div>
              <div className="text-black text-lg ml-[2vw] mt-[3vh]">
                We combine modern technology with <br />
                advanced medical equipment to ensure <br />
                accurate diagnosis and effective treatment.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-around mt-[2vw] gap-[2vw]">
          <div className="bg-[#2B7B37] hover:bg-gradient-to-r hover:from-[#0D2040] hover:to-[#1C5634] transition-all duration-500 w-[30vw] h-[15vh] rounded-[2rem] flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-extrabold">100+</h1>
            <p className="text-lg font-medium mt-1">Certified Specialists.</p>
          </div>

          <div className="bg-[#2B7B37] hover:bg-gradient-to-r hover:from-[#0D2040] hover:to-[#1C5634] transition-all duration-500 w-[30vw] h-[15vh] rounded-[2rem] flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-extrabold">50+</h1>
            <p className="text-lg font-medium mt-1">Experienced Doctors</p>
          </div>

          <div className="bg-[#2B7B37] hover:bg-gradient-to-r hover:from-[#0D2040] hover:to-[#1C5634] transition-all duration-500 w-[30vw] h-[15vh] rounded-[2rem] flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-extrabold">1M+</h1>
            <p className="text-lg font-medium mt-1">Happy Patients</p>
          </div>
        </div>
      </section>
    </main>
  );
}
