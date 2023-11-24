import { RiCustomerService2Line } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { TbMichelinStarGreen } from "react-icons/tb";
import { MdOutlineHealthAndSafety } from "react-icons/md";
export default function Values() {
	return (
		<div className="container min-w-full">
			<div className="flex justify-center items-center pt-20">
				<span className="text-center self-center font-bold md:text-4xl sm:text-3xl xs:text-2xl text-xl font-sans border border-l-0 border-t-0 border-b-[2px] pb-5 border-r-0  border-orange-700">
					چشم انداز، اهداف و استراتژی
				</span>
			</div>
			<div className="flex flex-col gap-10 justify-center items-center pt-20">
				<div className="flex flex-wrap gap-10 justify-center items-center text-center w-full">
					<div className="flex bg-gray-900 flex-col gap-3 justify-center items-center text-right text-2xl xl:text-3xl 2xl:text-4xl text-white font-sans border-2 p-8 rounded-xl w-[230px] h-[180px] xl:w-[320px] xl:h-[200px] 2xl:w-[336px] 2xl:h-[216px]">
						<div>
							<RiCustomerService2Line />
						</div>
						<div className="font-sans !leading-tight text-center">
							صمیمیت <br />
							با مشتریان
						</div>
					</div>
					<div className="flex flex-col gap-3 justify-center items-center text-right text-2xl xl:text-3xl 2xl:text-4xl text-gray-900 font-sans border-2 border-gray-900 p-8 rounded-xl w-[230px] h-[180px] xl:w-[320px] xl:h-[200px] 2xl:w-[336px] 2xl:h-[216px]">
						<div>
							<GrUserWorker />
						</div>
						<div className="font-sans !leading-tight text-center">
							تعهد در قبال کارکنان
						</div>
					</div>
					<div className="flex flex-col gap-7 pb-12 lg:gap-6 lg:pb-14 xl:gap-7 xl:pb-12 2xl:gap-8 2xl:pb-16 bg-gray-900 justify-center items-center text-right text-2xl xl:text-3xl 2xl:text-4xl text-white font-sans border-2 p-8 rounded-xl w-[230px] h-[180px] xl:w-[320px] xl:h-[200px] 2xl:w-[336px] 2xl:h-[216px] ">
						<div>
							<FaRegLightbulb />
						</div>
						<div className="font-sans !leading-tight text-center">نوآوری</div>
					</div>
				</div>
				<div className="flex flex-wrap gap-10 justify-center items-center text-center w-full">
					<div className="flex flex-col gap-3 justify-center items-center text-right text-2xl xl:text-3xl 2xl:text-4xl text-gray-900 font-sans border-2 border-gray-900 p-8 rounded-xl w-[230px] h-[180px] xl:w-[320px] xl:h-[200px] 2xl:w-[336px] 2xl:h-[216px]">
						<div>
							<HiUserGroup />
						</div>
						<div className="font-sans !leading-tight text-center">
							مسئولیت پذیری در قبال جامعه
						</div>
					</div>
					<div className="flex flex-col gap-3 justify-center items-center text-right bg-gray-900 text-2xl xl:text-3xl 2xl:text-4xl text-white font-sans border-2 p-8 rounded-xl w-[230px] h-[180px] xl:w-[320px] xl:h-[200px] 2xl:w-[336px] 2xl:h-[216px]">
						<div>
							<TbMichelinStarGreen />
						</div>
						<div className="font-sans !leading-tight text-center">
							حفاظت از محیط زیست
						</div>
					</div>
					<div className="flex flex-col gap-3 justify-center items-center text-right text-2xl xl:text-3xl 2xl:text-4xl text-gray-900 font-sans border-2 border-gray-900 p-8 rounded-xl w-[230px] h-[180px] xl:w-[320px] xl:h-[200px] 2xl:w-[336px] 2xl:h-[216px]">
						<div>
							<MdOutlineHealthAndSafety />
						</div>
						<div className="font-sans !leading-tight text-center">
							پذیرش فرهنگ کار ایمن
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
