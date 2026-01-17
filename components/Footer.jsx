export default function Footer() {
  return (
    <footer className="flex bg-[#E9F3FF] px-[5vw] h-[40vh]">
      <div className="flex items-center  w-[17vw] ">
        <img
          src="/assets/header/logo4.png"
          alt="Happy Healthy Hospital"
          className="h-[15vh] w-[15vw] object-contain"
        />
      </div>

      {/* TEXT */}
      <div className="flex w-[25vw] items-center">
        <p className="font-inter font-bold text-[16px] leading-[23px] tracking-normal text-gray-700">
          We are a multi-specialty hospital <br />
          committed to providing high-quality,
          <br />
          compassionate care with advanced <br />
          medical technology and expert <br />
          specialists. From diagnosis to recovery, <br />
          we ensure every patient receives <br />
          personalized treatment in a safe and
          <br />
          healing environment.
        </p>
      </div>

      <div className="w-[13%] flex flex-col justify-center gap-4">
        <span className="font-bold">QUICK LINKS</span>
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/about" className="hover:underline">
          About us
        </a>
        <a href="/services" className="hover:underline">
          Services
        </a>
        <a href="/blogs" className="hover:underline">
          Blogs
        </a>
      </div>
      <div className="w-[22%] flex flex-col justify-center gap-3 mt-5 ">
        <span className="font-bold">SPECIALITIES</span>
        <span>Laser Treatments</span>
        <span>Chronic & Lifestyle Diseases</span>
        <span>Laparoscopic Surgeries</span>
        <span>General Surgical Procedures</span>
        <span>Other Specialities</span>
      </div>

      <div className="w-[20%] flex flex-col mt-13 gap-4">
        <span className="font-bold">FOLLOW US ON</span>
        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/share/1Cu8xxvGNy/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img
              src="/assets/footer/facebook.png"
              alt="Facebook"
              className="h-6 w-6 object-contain hover:scale-110 transition"
            />
          </a>
          <a
            href="https://www.instagram.com/happy_healthy_hospital?igsh=eTJjanR4bGJvYTkw&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src="/assets/footer/instagram.png"
              alt="Instagram"
              className="h-6 w-6 object-contain hover:scale-110 transition"
            />
          </a>
          <a
            href="https://youtube.com/@happyhealthyhospital?si=3WPbSkeEFYRIWxAn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Youtube"
          >
            <img
              src="/assets/footer/youtube.png"
              alt="Youtube"
              className="h-6 w-6 object-contain hover:scale-110 transition"
            />
          </a>
        </div>
        <span>All Rights Are Reserved</span>
      </div>
    </footer>
  );
}
