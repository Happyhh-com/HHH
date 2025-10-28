import Image from "next/image";

export default function Footer(){
    return(
        <div className="flex bg-blue-100 p-4">
            <div className="w-[12%] flex justify-center py-13">
                <Image
                src="/assets/footer/4497ae84ff655620cea0ad0e2ceed69f480f7cfa.png"
                alt="Happy Health Hospital logo"
                width={96}
                height={147}
                className="h-full w-[65%] object-contain"
                />
            </div>

            <div className="w-[17%] flex flex-col justify-center my-4 mr-55">
                <span>We are a multi-specialty hospital committed to providing high-quality, compassionate care with advanced medical technology and expert specialists. From diagnosis to recovery, we ensure every patient receives personalized treatment in a safe and healing environment.</span>
            </div>

            <div className="w-[13%] flex flex-col justify-center gap-4">
                <span className="font-bold">QUICK LINKS</span>
                <a href="/" className="hover:underline">Home</a>
                <a href="/about" className="hover:underline">About us</a>
                <a href="/" className="hover:underline">Services</a>
                <a href="/" className="hover:underline">Blogs</a>
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
                    <Image
                        src="/assets/footer/facebook.png"
                        alt="Facebook"
                        width={1}
                        height={1}
                        className="h-full w-[8%] object-contain"
                    />
                    <Image
                        src="/assets/footer/instagram.png"
                        alt="Instagram"
                        width={1}
                        height={1}
                        className="h-full w-[8%] object-contain"
                    />
                    <Image
                        src="/assets/footer/youtube.png"
                        alt="Youtube"
                        width={1}
                        height={1}
                        className="h-full w-[8%] object-contain"
                    />
                    <Image
                        src="/assets/footer/twitter.png"
                        alt="Twitter"
                        width={1}
                        height={1}
                        className="h-full w-[8%] object-contain"
                    />
                </div>
                <span>All Rights Are Reserved</span>
            </div>

        </div>
    )
}