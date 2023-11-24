import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
export default function Oil() {
	return (
		<>
			<div className="bg-[url('/laptop.jpg')] bg-center bg-cover bg-opacity-50 bg-no-repeat flex justify-center items-center bg-[#8b8b8b] w-full min-[280px]:h-[46rem] min-[412px]:h-[50rem] min-[500px]:h-[51rem] min-[512px]:h-[52rem] min-[510px]:h-[37rem] h-[55rem] sm:h-[120vh] md:h-[110vh] lg:h-[100vh] xl:h-[95vh]">
				<div className="flex items-center flex-wrap-reverse justify-center mr-0 gap-7 md:mr-0 2xl:gap-46 min-[1280px]:gap-32 lg:gap-32">
					<div className="flex flex-col gap-12 items-center justify-center">
						<h1 className="2xl:text-7xl md:text-5xl sm:text-4xl text-3xl text-white sm:text-right font-sans">
							 فناوری اطلاعات
						</h1>
						<p className="2xl:w-[30rem] lg:text-2xl w-[17rem] sm:w-[20rem] md:text-xl lg:w-[20rem] text-lg text-center md:mt-0 text-white font-vazir">
							متخصصین حوزه فناوری اطلاعات، آماده خدمت رسانی به شما عزیزان
						</p>
						<Link href={"/"} className="m-auto lg:mx-0">
							<Button
								variant="outline"
								className="w-40 sm:w-48 py-8 sm:text-xl text-md text-white bg-indigo-700 border-none shadow-lg rounded-3xl font-sans"
							>
								اطلاعات بیشتر
								<FiChevronLeft className="mt-1 mr-1" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
