const FooterSection = () => {
	return (
		<div className={"bg-black pt-8 pb-8 px-12 md:px-16"}>
			<div className={"flex gap-8 flex-col sm:flex-row sm:gap-0 justify-between text-white"}>
				<div>
					<h1 className={"font-serif text-xl cursor-pointer"}>Deep Forest Science</h1>
				</div>

				<div className={"flex justify-between sm:justify-start sm:gap-20"}>
					<div className={"text-sm flex flex-col gap-2"}>
						<h1 className={"font-semibold"}>COMPANY</h1>
						<h1 className={"cursor-pointer text-slate-400"}>Contact</h1>
					</div>
					
					<div className={"text-sm flex flex-col gap-2"}>
						<h1 className={"font-semibold"}>ABOUT</h1>
						<h1 className={"cursor-pointer text-slate-400"}>Our Mission</h1>
						<h1 className={"cursor-pointer text-slate-400"}>Investors & Media</h1>
					</div>
				</div>
			</div>

			<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

			<div className={"text-slate-400"}>
				<h1 className={"text-sm"}>© 2023 Deep Forest Sciences</h1>
			</div>
		</div>
	)
}

export default FooterSection;
