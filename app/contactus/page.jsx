'use client'
import { useRouter } from "next/navigation";

export default function ContactUs() {
  const router = useRouter();
  const countryCodesArray = ["+91"];
  const googleMapUrl = "https://www.google.com/maps/dir//227+Thimmaiah+Road,+1st+Main+Rd,+off+West+of+Chord+Road,+1st+Stage,+Shivanagar,+Rajajinagar,+Bengaluru,+Karnataka+560010/@12.9889024,77.4643021,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae3d9b0100010f:0xb1d81aff77e03852!2m2!1d77.546704!2d12.9889154?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D";
  const visitingHours = [{day: "Monday", time: "07 AM - 09 PM"},{day: "Tuesday", time: "07 AM - 09 PM"},{day: "Wednesday", time: "07 AM - 09 PM"},{day: "Thursday", time: "07 AM - 09 PM"},{day: "Friday", time: "07 AM - 09 PM"},{day: "Saturday", time: "07 AM - 09 PM"},{day: "Sunday", time: "07 AM - 09 PM"}];

  return (
    <>
      <div className="px-8 flex space-x-2 font-semibold text-gray-400 mt-11 ml-11"> 
        <span onClick={() => router.push('/')} className="cursor-pointer hover:underline">Home</span>
        <span>/</span>
        <span className="text-[#2B7B37] transition cursor-pointer">Contact us</span>
      </div>

      <p className="px-8 font-bold m-11 text-4xl text-[#203169]">Contact us</p>
      <p className="px-8 m-11">Welcome to Happy Health Hospital, where your well-being is our top priority. Our state-of-the-art facility offers a wide range of services, from emergency care to specialized treatments. With a team of dedicated professionals, we ensure that every patient receives personalized attention and compassionate care. Our modern amenities and advanced technology create a healing environment that promotes recovery and wellness. Whether you need routine check-ups or complex surgeries, Harmony Health Hospital is here to support you every step of the way.</p>

      <div className="flex mx-20">
        <div className="w-[45%] aspect-[543/611] overflow-hidden">
          <img
            src="/assets/contact/e962fb0acaee19a6b4e05981b5ead60b41d3b9fa.jpeg"
            alt="Blue background image"
            width={543}
            height={611}
            className="rounded-l-3xl h-full w-full object-cover"
          />
        </div>

        <div className="w-[55%] py-20 bg-gray-100 rounded-r-3xl">
          <form>
            <div className="grid grid-cols-2 mx-15">
              <div className="mr-4">
                <label className="font-semibold block after:content-['*'] after:text-red-500 after:ml-1">First Name</label>
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
                <label className="font-semibold block after:content-['*'] after:text-red-500 after:ml-1">Last Name</label>
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
                <label className="font-semibold block after:content-['*'] after:text-red-500 after:ml-1">Email</label>
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
                <label className="font-semibold block after:content-['*'] after:text-red-500 after:ml-1">Country Code</label>
                <select 
                  placeholder="+91"
                  required 
                  value={FormData.countryCode}
                  name="countryCode"
                  className="w-full py-2 px-4 border border-gray-300 rounded-xl bg-white">
                    {countryCodesArray.map((item) => (
                      <option key={item} value={item}>
                        {item}
                     </option>
                    ))}
                </select>
              </div>
              <div className="ml-4">
                <label className="font-semibold block after:content-['*'] after:text-red-500 after:ml-1">Mobile Number</label>
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
                <label className="font-semibold block after:content-['*'] after:text-red-500 after:ml-1">Message</label>
                <textarea
                    name="message"
                    rows={5}
                    value={FormData.message}
                    placeholder="Write your message here..."
                    className="w-full py-2 px-4 border border-gray-300 rounded-xl bg-white"
                />
              </div>
            </div>

            <button type="submit" className="text-white bg-[#AD2525] rounded-3xl py-3 px-18 font-semibold mx-15">
              Submit
            </button>
            
          </form>
        </div>
      </div>

      <a
        href={googleMapUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
       <div 
        className="aspect-[1251/295] overflow-hidden mx-20 cursor-pointer"
        >
        <img
        src="/assets/contact/53f75d0be0ff29d7255c420e4824cb931c31ab21.png"
        width={1251}
        height={295}
        alt="Google map"
        className="rounded-xl h-full w-full object-cover"
        />
      </div>
      </a>
      

       <div className="flex mx-20 my-10">
        <div className="w-[62%] py-20 aspect-[748/560] overflow-hidden">
          <img
          src="/assets/contact/e3a941db277091460a3d27d36a4cccb06abf44e3.png"
          width={748}
          height={560}
          alt="Happy Health Hospital"
          className="rounded-4xl h-full w-full object-cover"
          />
        </div>

        <div className="w-[38%] ml-20 my-20">
          <p className="font-bold text-4xl text-blue-900">Visiting Hours</p>
          <p className="my-6">Visiting hours are from 10 AM to 8 PM daily. We encourage family and friends to support their loved ones during their recovery.</p>

          {visitingHours.map((item) =>(
            <div className="grid grid-cols-[20%_5%_75%] gap-4 my-5" key={item.day}>
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
