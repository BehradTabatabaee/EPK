export default function Misson_statement() {
	return (
		<>
			<div className="flex flex-col lg:p-10 p-4">
				<p className="font-sans lg:text-4xl lg:text-right text-center text-3xl lg:mt-4 sm:mt-10 mt-16">
					بیانیه ماموریت
				</p>
				<img
					src="divider-left.png"
					alt="divider"
					className="lg:w-[24rem] md:w-[24rem] sm:w-[19rem] w-[14rem] hidden lg:block mt-4"
				/>
			</div>
			<div className="flex flex-wrap justify-center items-start">
				<div className="flex flex-wrap 2xl:w-1/2 lg:w-full lg:p-12 !pt-0 sm:w-[35rem] w-[20rem]">
					<div className="flex flex-col gap-6 text-center">
						<div className="flex flex-col gap-3">
							<p className="font-vazir sm:text-xl text-lg lg:p-4 p-2 xl:p-16 !py-6 sm:leading-loose 2xl:leading-relaxed sm:mt-6 mt-0">
								ماموریت ما آموزش ، طراحی ، نظارت ، اجرا ، نصب و راه اندازی و
								تعمیر و نگهداشت کلیه ی پروژه های نفت ، گاز و پتروشیمی – آسانسور
								و پله برقی – فناوری اطلاعات با کیفیت بالا در محیطی سالم ، ایمن و
								مبتنی بر مدیریت بهینه ی منابع ، ارتقای سرمایه ها انسانی و کسب
								رضایت همه ی ذینفعان سازمانی می باشد .
							</p>
						</div>
					</div>
				</div>
				<img
					src="/mission-statement.jpg"
					alt="pic"
					className="2xl:w-[40rem] xl:w-[40rem] lg:w-[43rem] md:w-[40rem] sm:w-[30rem] w-[20rem] rounded-lg 2xl:ml-12 ml-0"
				/>
			</div>
		</>
	);
}
