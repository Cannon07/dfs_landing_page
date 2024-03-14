"use client"

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div>
			<div className={"flex justify-between px-8 py-2 items-center"}>
				<h1 className={"font-serif text-xl cursor-pointer"}>Deep Forest Science</h1>	

				<div className={"flex flex-col gap-2 items-center hidden text-sm font-medium md:block md:flex md:flex-row"}>
					<h1 className={"cursor-pointer p-2 rounded hover:bg-slate-200"}>Science</h1>
					<h1 className={"cursor-pointer p-2 rounded hover:bg-slate-200"}>Research</h1>
					<h1 className={"cursor-pointer p-2 rounded hover:bg-slate-200"}>News</h1>
					<h1 className={"cursor-pointer p-2 rounded hover:bg-slate-200"}>About</h1>
					<h1 className={"cursor-pointer p-2 rounded hover:bg-slate-200"}>Blog</h1>
					<h1 className={"cursor-pointer p-2 rounded hover:bg-slate-200"}>Newsletter</h1>
					<h1 className={"px-4 cursor-pointer bg-black text-white rounded py-2"}>Login</h1>
				</div>

				<RxHamburgerMenu 
					onClick={() => {setToggle(!toggle)}}
					className={"p-2 rounded active:bg-slate-200 md:hidden"} 
					size={40}
				/>
			</div>

			{toggle &&
				<div className={"flex flex-col gap-2 items-center text-sm font-medium md:hidden"}>
					<h1 className={"cursor-pointer p-2 rounded active:bg-slate-200"}>Science</h1>
					<h1 className={"cursor-pointer p-2 rounded active:bg-slate-200"}>Research</h1>
					<h1 className={"cursor-pointer p-2 rounded active:bg-slate-200"}>News</h1>
					<h1 className={"cursor-pointer p-2 rounded active:bg-slate-200"}>About</h1>
					<h1 className={"cursor-pointer p-2 rounded active:bg-slate-200"}>Blog</h1>
					<h1 className={"cursor-pointer p-2 rounded active:bg-slate-200"}>Newsletter</h1>
					<h1 className={"px-4 cursor-pointer bg-black text-white rounded py-2"}>Login</h1>
				</div>
			}
		</div>
    	)
}

export default Header;
