export default function Slogan() {
	return (
		<>
			<div className="bg-slate-200 flex flex-col justify-center items-center sm:h-[40rem] h-[35rem] pb-32">
				<span className="md:text-4xl sm:text-3xl text-2xl">شعار ما</span>
				<img
					src="footer-red.png"
					alt="divider"
					className="lg:w-[30rem] md:w-[25rem] sm:w-[20rem] w-[15rem] mt-4"
				/>
				<div className="flex gap-32 sm:mt-6 mt-5">
					<p className="md:text-2xl sm:text-xl md:mt-4 text-lg lg:w-[30rem] md:w-[25rem] sm:w-[20rem] w-[15rem] min-[280px]:w-[12rem] text-center">
						مشکل داری؟ مشکل داری؟ ما داریم زحمت میکشیم تو نمیدونی چه بلایی
						سر ما اومده!!!
					</p>
				</div>
			</div>
		</>
	);
}
