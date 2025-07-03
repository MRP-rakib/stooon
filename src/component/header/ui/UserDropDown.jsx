import { IoPersonOutline } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { MdKeyboardReturn } from "react-icons/md";
import { BiMessageDots } from "react-icons/bi";
export default function ArrowBox() {
  return (
    <div className=" absolute w-[300px] opacity-0 invisible group-hover:opacity-100
    group-hover:visible group-hover:top-8 top-20 transition-all duration-300 -right-6 bg-white border border-[rgba(0,0,0,0.3)] rounded shadow">
     <div className="bg-[rgba(0,0,0,0.1)] capitalize text-base px-3 py-4 border-b border-[rgba(0,0,0,0.3)]">
        <span>sign in </span>
        |
        <span> join</span>
        </div>
        <div className="px-5 py-3 text-[16px]">
            <span className="flex gap-2 items-center px-3 py-4 border-b border-[rgba(0,0,0,0.3)]"><IoPersonOutline /> My Account</span>
            <span className="flex gap-2 items-center px-3 py-4 border-b border-[rgba(0,0,0,0.3)]"><FaBriefcase /> My Orders</span>
            <span className="flex gap-2 items-center px-3 py-4 border-b border-[rgba(0,0,0,0.3)]"><MdKeyboardReturn />Returns Information</span>
            <span className="flex gap-2 items-center px-3 py-4 "><BiMessageDots/>Contact Preferences</span>
        </div>
     

     
    </div>
  );
}
