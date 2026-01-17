"use client";
import { useRouter } from "next/navigation";

export default function ContactUs() {
  const router = useRouter();

  const countryCodesArray = ["+91"];
  const googleMapUrl =
    "https://www.google.com/maps/dir//227+Thimmaiah+Road,+1st+Main+Rd,+off+West+of+Chord+Road,+1st+Stage,+Shivanagar,+Bengaluru,+Karnataka+560044";

  const visitingHours = [
    { day: "Monday", time: "07 AM - 09 PM" },
    { day: "Tuesday", time: "07 AM - 09 PM" },
    { day: "Wednesday", time: "07 AM - 09 PM" },
    { day: "Thursday", time: "07 AM - 09 PM" },
    { day: "Friday", time: "07 AM - 09 PM" },
    { day: "Saturday", time: "07 AM - 09 PM" },
    { day: "Sunday", time: "07 AM - 09 PM" },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="px-8 flex gap-2 font-semibold text-gray-400 mt-10 ml-10">
        <span
          onClick={() => router.push("/")}
          className="cursor-pointer hover:underline"
        >
          Home
        </span>
        <span>/</span>
        <span className="text-[#2B7B37]">Contact Us</span>
      </div>

      {/* Title */}
      <h1 className="px-8 mt-8 ml-10 text-4xl font-bold text-[#203169]">
        Contact Us
      </h1>

      {/* Intro */}
      <p className="px-8 ml-10 mt-4 max-w-5xl text-gray-700">
        Welcome to Happy Health Hospital, where your well-being is our top
        priority. Our state-of-the-art facility offers a wide range of services,
        from emergency care to specialized treatments.
      </p>

      {/* Main Section */}
      <div className="flex mx-20 my-16 rounded-3xl overflow-hidden shadow-lg">
        {/* LEFT : CONTACT CARD */}
        <div className="relative w-[45%] text-white">
          <img
            src="/assets/contact/bluebackground.png"
            alt="Contact Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 p-10">
            <h2 className="text-3xl font-semibold mb-8">Get In Touch</h2>

            {/* Address */}
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/15">
                <img src="/assets/contact/location.png" className="w-5 h-5" />
              </div>
              <p className="text-sm leading-6">
                227 Thimmaiah Road, 1st Main Rd, off West <br />
                of Chord Road, 1st Stage, Shivanagar, <br />
                Bengaluru, Karnataka 560044
              </p>
            </div>

            {/* Email */}
            <div className="flex gap-4 mb-6 items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/15">
                <img
                  src="/assets/contact/mail.png"
                  className="w-[5vw] h-[7vh]"
                />
              </div>
              <p className="text-sm">happyhealthyhospital@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/15">
                <img
                  src="/assets/contact/phone.png"
                  className="w-[5vw] h-[7vh]"
                />
              </div>

              <div className="text-sm space-y-2">
                <p className="opacity-80 font-medium">General Enquiries</p>
                <p>+91 9243038992</p>
                <p>+91 9243038992</p>

                <p className="opacity-80 font-medium mt-4">(Emergency / OPD)</p>
                <p>+91 9243038992</p>
                <p>+91 9243038992</p>

                <p className="opacity-80 font-medium mt-4">WhatsApp Number</p>
                <p>+91 9243038992</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT : FORM */}
        <div className="w-[55%] py-20 bg-gray-100 rounded-r-3xl">
          <form>
            <div className="grid grid-cols-2 mx-15">
              <div className="mr-4">
                <label className="font-semibold block after:content-['*'] after:text-red-500 after:ml-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={FormData.firstName}
                  required
                  placeholder="Enter Your First Name"
                  className="w-full py-2 px-4 border border-gray-300 rounded-xl bg-white"
                />
              </div>
              <div className="ml-4">
                <label className="font-semibold block after:content-['*'] after:text-red-500 after:ml-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={FormData.lastName}
                  required
                  placeholder="Enter Your Last Name"
                  className="w-full py-2 px-4 border border-gray-300 rounded-xl bg-white"
                />
              </div>
            </div>

            <div className="mx-15 my-10">
              <div>
                <label className="font-semibold block after:content-['*'] after:text-red-500 after:ml-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={FormData.email}
                  required
                  placeholder="Enter Your Email Id"
                  className="w-full py-2 px-4 border border-gray-300 rounded-xl bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-[25%_75%] mx-15 my-10 items-center">
              <div className="mr-4">
                <label className="font-semibold block after:content-['*'] after:text-red-500 after:ml-1">
                  Country Code
                </label>
                <select
                  placeholder="+91"
                  required
                  value={FormData.countryCode}
                  name="countryCode"
                  className="w-full py-2 px-4 border border-gray-300 rounded-xl bg-white"
                >
                  {countryCodesArray.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="ml-4">
                <label className="font-semibold block after:content-['*'] after:text-red-500 after:ml-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={FormData.mobileNumber}
                  required
                  placeholder="Enter Your Mobile Number"
                  className="w-full py-2 px-4 border border-gray-300 rounded-xl bg-white"
                />
              </div>
            </div>

            <div className="mx-15 my-10">
              <div>
                <label className="font-semibold block after:content-['*'] after:text-red-500 after:ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={FormData.message}
                  placeholder="Write your message here..."
                  className="w-full py-2 px-4 border border-gray-300 rounded-xl bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-[#AD2525] rounded-3xl py-3 px-18 font-semibold mx-15"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <a href={googleMapUrl} target="_blank">
        <div className="mx-20 aspect-[1251/295] overflow-hidden cursor-pointer">
          <img
            src="/assets/contact/53f75d0be0ff29d7255c420e4824cb931c31ab21.png"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </a>

      {/* Visiting Hours */}
      <div className="flex mx-20 my-20 gap-16">
        <img
          src="/assets/contact/e3a941db277091460a3d27d36a4cccb06abf44e3.png"
          className="w-[60%] rounded-3xl object-cover"
        />

        <div className="w-[40%]">
          <h2 className="text-4xl font-bold text-blue-900">Visiting Hours</h2>
          <p className="my-6 text-gray-600">
            Visiting hours are from 10 AM to 8 PM daily.
          </p>

          {visitingHours.map((item) => (
            <div key={item.day} className="grid grid-cols-[30%_5%_65%] my-3">
              <span>{item.day}</span>
              <span>:</span>
              <span>{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
