export default function Knowledge_management() {
	return (
		<>
			<div className="flex flex-col lg:p-10 p-4">
				<p className="font-sans lg:text-4xl lg:text-right text-center text-3xl lg:mt-4 sm:mt-10 mt-16">
					مدیریت دانش
				</p>
				<img
					src="divider-left.png"
					alt="divider"
					className="lg:w-[24rem] md:w-[24rem] sm:w-[19rem] w-[14rem] hidden lg:block mt-4"
				/>
			</div>
			<div className="flex flex-wrap xl:justify-between xl:container xl:items-start justify-center gap-10 items-center">
				<div className="flex flex-col">
					<p className="font-vazir lg:text-xl text-base lg:leading-relaxed leading-loose xl:w-[25rem] lg:w-full xl:p-0 lg:px-10 sm:p-12 sm:pt-6 w-92 text-center mt-2 p-5">
						شرکت اکسیر پویان کارافن با توجه به اهمیت و ضرورت مدیریت دانش در فضای
						تخصصی کسب و کار خود ، طی سال های گذشته پروژه ی جامعی را برای طراحی و
						راه اندازی سیستم مدیریت دانش اجرا نموده است. <br />
						با وجود تمامی اقدامات انجام شده در این حوزه ما به این که برای تبدیل
						شدن به یک شرکت دانش محور، در ابتدای مسیر قرار داریم، آگاهیم.
						<br />
						بنابراین برنامه ها و اقدامات متعددی در گروه EPK برای نهادینه سازی
						سیستم مدیریت دانش و پایش ، بهبود و ارتقای مستمر آن با در نظر گرفتن
						ویژگی های سازمانی شرکت و اهداف مورد نظر برنامه ریزی شده و در حال
						انجام است.
					</p>
				</div>
				<img
					src="/knowledge.png"
					alt="pic"
					className="lg:w-[45rem] md:w-[40rem] sm:w-[30rem] w-[20rem] rounded-lg"
				/>
			</div>
		</>
	);
}
