export default function Slogan() {
	return (
		<>
			<div className="bg-slate-200 flex flex-col justify-start items-center sm:h-[20rem] h-[17rem] p-10">
				<span className="md:text-4xl sm:text-3xl text-2xl">شعار ما</span>
				<img
					src="footer-red.png"
					alt="divider"
					className="lg:w-[30rem] md:w-[25rem] sm:w-[20rem] w-[15rem] mt-4"
				/>
				<div className="flex gap-32 mt-12">
					<p className="md:text-2xl sm:text-xl md:mt-4 text-lg lg:w-[30rem] md:w-[25rem] sm:w-[20rem] w-[15rem] text-center">
						مشکل داری؟ مشکل داری؟ پفیوز ما داریم زحمت میکشیم تو نمیدونی چه بلایی
						سر ما اومده!!!
					</p>
				</div>
			</div>
		</>
	);
}
