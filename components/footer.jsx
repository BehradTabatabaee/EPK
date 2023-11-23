import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
export default function Footer() {
	return (
		<>
			<footer className="bg-gray-900  p-12 py-6 w-full mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
				<div className="sm:container min-w-[60vw] sm:px-6 py-12 mx-auto">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
						<div className="sm:col-span-2">
							<h1 className="max-w-lg text-xl font-semibold tracking-tight xl:text-2xl text-white font-sans">
								عضویت در خبرنامه
							</h1>
							<div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
								<input
									id="email"
									type="text"
									className="px-4 py-1 pb-2 border rounded-md bg-gray-900 text-gray-300 border-gray-600 focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300 font-delius text-xl lg:w-80 placeholder:font-vazir placeholder:text-xl"
									placeholder="آدرس ایمیل"
								/>
								<button className="w-full px-6 py-2.5 text-lg font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80 font-sans">
									عضویت
								</button>
							</div>
						</div>
						<div>
							<p className="font-semibold text-white font-sans">دسترسی سریع</p>
							<div className="flex flex-col items-start mt-5 space-y-2 font-vazir">
								<Link
									href="/"
									className=" transition-colors duration-300 text-gray-300  hover:text-blue-500"
								>
									صفحه اصلی
								</Link>
								<Link
									href="/about"
									className="transition-colors duration-300 text-gray-300  hover:text-blue-500"
								>
									شرکت در یک نگاه
								</Link>
								<Link
									href="/certificates"
									className=" transition-colors duration-300 text-gray-300  hover:text-blue-500"
								>
									گواهینامه و افتخارات
								</Link>
								<Link
									href="/blog"
									className=" transition-colors duration-300 text-gray-300  hover:text-blue-500"
								>
									اخبار
								</Link>
							</div>
						</div>
						<div>
							<p className="font-semibold text-white font-sans">دفتر مرکزی</p>
							<div className="flex flex-col items-start mt-5 space-y-2 font-vazir">
								<p
									href="#"
									className=" transition-colors duration-300 text-gray-300"
								>
									آدرس : شهرستان نطنز، خیابان امام خمینی، مجتمع تجاری چهارده
									معصوم
								</p>
								<p
									href="#"
									className=" transition-colors duration-300 text-gray-300"
								>
									صندوق پستی : 65486-87616
								</p>
								<p
									href="#"
									className=" transition-colors duration-300 text-gray-300"
								>
									شماره تلفن : 9133623085-98+
								</p>
								<p
									href="#"
									className=" transition-colors duration-300 text-gray-300"
								>
									پست الکترونیکی :{" "}
									<span className="font-delius">EPK@gmail.com</span>
								</p>
							</div>
						</div>
					</div>
					<hr className="my-6 md:my-8 border-gray-700" />
					<div className="md:flex-row items-center md:justify-between flex gap-12 flex-col">
						<div>
							<span className="text-white lg:text-2xl sm:text-lg md:text-xl text-md w-1/2 font-ghasem">
								تمامی حقوق این سایت متعلق به گروه اکسیر پویان کارافن می باشد
							</span>
						</div>
						<div className="flex">
							<Link
								href="#"
								className="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-500"
								aria-label="TwitterX"
							>
								<RiTwitterXFill className="text-2xl" />
							</Link>
							<Link
								href={"https://www.linkedin.com/company/epkco/"}
								target="_blank"
								className="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-500"
								aria-label="Linkedin"
							>
								<AiFillLinkedin className="text-2xl" />
							</Link>
							<Link
								href="#"
								className="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-500"
								aria-label="Instagram"
							>
								<BsInstagram className="text-2xl" />
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
