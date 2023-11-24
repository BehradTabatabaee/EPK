export default function Startegy() {
  return (
    <div className="container min-w-[70vw]">
      <div className="flex flex-col justify-center items-center pt-10">
        <span className="text-center self-center font-bold md:text-4xl sm:text-3xl text-2xl font-sans border border-l-0 border-t-0 border-b-[2px] pb-5 border-r-0  border-orange-700">
          چشم انداز، اهداف و استراتژی
        </span>
      </div>
      <div className="flex flex-col lg:flex-row-reverse justify-center w-full pt-10 gap-10">
        <div className="lg:w-2/5 w-full block lg:hidden xl:block">
          <img
            src="/vision-mission-values.jpg"
            alt=""
            className="rounded-2xl"
          />
        </div>
        <div className="h-1/2 w-full lg:w-3/5 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-6 2xl:gap-7 min-[2126]:gap-8  min-[2400px]:gap-10 font-vazir text-2xl leading-loose">
            <h1 className="font-sans font-bold text-2xl sm:mr-3 border border-l-0 border-t-0 border-b-[2px] pb-5 border-r-0  border-orange-700 w-fit lg:self-right text-center lg:self-right ">
              چشم انداز ما{" "}
            </h1>
            <p className="font-vazir text-lg mt-2 text-right">
              سازمانی رقابتی در کلاس جهانی با سود آوری پایدار و سرآمد در ایمنی
            </p>
            <p className="!leading-loose w-full !text-justify !lg:text-justify text-sm sm:text-base md:text-lg lg:text-sm min-[1175px]:text-base min-[1300px]:text-lg min-[2126px]:text-xl min-[2400px]:text-2xl">
              هدف شرکت جلب رضایت مشتریان با ارائه خدمات به هنگام ، کیفی و
              استاندارد می باشد و در همین راستا ، مجموعه ی مدیریت و کارکنان شرکت
              می کوشیم به منظور ایفای مسئولیت های اجتماعی خود ، همواره اصول
              اخلاقی و وجدان کاری ، رعایت حقوق مشتریان ، صداقت ، شفافیت و امانت
              داری را سر لوحه ی خویش قرار دهیم و در اقدام و عمل و تنظیم روابط
              حرفه ای ، پایبندی خویش را به این ارزش ها و اهداف جامعه ی عمل
              پوشانده و در این امر موفقیت لازم را کسب نماییم
            </p>
            <div className="flex flex-col gap-3 justify-center items-start ">
              <h2 className="font-sans font-bold text-2xl sm:mr-3 border border-l-0 border-t-0 border-b-[2px] pb-5 border-r-0  border-orange-700 w-fit ">
                اهداف{" "}
              </h2>
			  <ul className="list-disc mr-6">

              <li className="font-vazir text-sm lg:text-lg py-2">
                افزایش تولید از طریق ارتقای بهره وری و بهبود سیستم ها
              </li>
              <li className="font-vazir text-sm lg:text-lg py-2">
                اجرای پروژه های توسعه ای در جهت تکمیل زنجیره ارزش
              </li>
              <li className="font-vazir text-sm lg:text-lg  py-2">
                ارتقای کیفیت و تکمیل سبد محصول و نوآوری متناسب<br/> با نیازهای بازار
                به منظور افزایش سودآوری
              </li>
			  </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
