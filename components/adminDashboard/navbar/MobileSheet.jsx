import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";
export default function MobileSheet({session}) {
  return (
    <>
      <Sheet>
        <SheetTrigger className="absolute z-50 mt-4 mr-3 w-9 h-9">
          <CiMenuFries className="text-2xl m-auto text-black" />
        </SheetTrigger>
        <SheetContent className="w-[250px] overflow-scroll ">
          <div className="bg-[#3d4e58] h-[10rem]">
            <Link href={"/"} className="absolute">
              <img
                src="second-logo.png"
                alt="logo"
                className="w-16 pt-3 mr-2"
              />
            </Link>
            <div className="flex flex-col justify-center items-end gap-2 pt-3 pl-3">
              <Link href={"/"}>
                <AiOutlineInstagram className="text-xl text-white" />
              </Link>
              <Link href={"/"}>
                <AiFillLinkedin className="text-xl text-white" />
              </Link>
              <Link href={"/"}>
                <RiTwitterXLine className="text-lg text-white" />
              </Link>
            </div>
            <div className="mt-7 mr-3">
              <span className="text-lg text-white">اکسیر پویان کارافن</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">

            <NavLink href="/dashboard/users" text="مدیریت کاربران" />
            <NavLink href="/" text="مدیریت گواهینامه ها و افتخارات" />
            <NavLink href="/" text="مدیریت مقالات" />
            <NavLink href="/" text="مدیریت نظرات و پیشنهادات" />
            <NavLink href="/" text="مدیریت درخواست های همکاری" />
            <NavLink href="/" text="مدیریت تامین کنندگان" />
            <NavLink href="/" text="مدیریت تصاویر و ویدیو ها" />
            <hr />
            <h1 className="text-sm text-center">کاربر وارد شده : {session.user.name}</h1>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

function NavLink(props) {
    return (
      <Link
        className="w-full rounded-lg p-3 text-black text-md xl:text-lg "
        href={props?.href}
      >
        {props?.text}
      </Link>
    );
  }
  