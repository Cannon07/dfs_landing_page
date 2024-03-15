import Image from "next/image";

const SponserSection = () => {
	const logo_height: number = 150;
	const logo_width: number = 150;

	const logo_height_mobile: number = 100;
	const logo_width_mobile: number = 100;

	return (
		<div className={"bg-white flex flex-col gap-8 py-10"}>
			<div className={"w-full flex justify-center"}>
				<div className={"flex flex-col gap-4 w-3/4"}>
					<div className={"flex justify-center text-3xl md:text-4xl font-medium"}>
						<h1>Our Sponsers</h1>
					</div>
					<div className={"flex justify-center text-xl font-base text-center"}>
						<h1>DeepChem is the most popular open source framework for drug discovery. DeepChem development is guided by the Deep Forest Sciences team.</h1>
					</div>
				</div>
			</div>
			<div className={"hidden md:block"}>
			<div className={"flex space-x-8 md:space-x-16 overflow-hidden"}>
				<div className={"flex space-x-8 md:space-x-16 animate-loop-scroll"}>
					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/australian_national_university.svg"}
						alt={"australian_national_university Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/aws.svg"}
						alt={"AWS Icon"}
						className={"max-w-none"}
					/>
					
					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/bayer.svg"}
						alt={"bayer Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/broad_inst.svg"}
						alt={"broad_inst Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/carnegie_mellon_university.svg"}
						alt={"carnegie_mellon_university Icon"}
						className={"max-w-none"}

					/>

					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/download.png"}
						alt={"Chinese Icon"}
						className={"max-w-none"}
					/>
					
					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/expedia.svg"}
						alt={"expedia Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/firmenich.svg"}
						alt={"firmenich Icon"}
						className={"max-w-none"}
					/>
				</div>

				<div className={"bg-white flex space-x-8 md:space-x-16 animate-loop-scroll"} aria-hidden="true">
					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/australian_national_university.svg"}
						alt={"australian_national_university Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/aws.svg"}
						alt={"AWS Icon"}
						className={"max-w-none"}
					/>
					
					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/bayer.svg"}
						alt={"bayer Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/broad_inst.svg"}
						alt={"broad_inst Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/carnegie_mellon_university.svg"}
						alt={"carnegie_mellon_university Icon"}
						className={"max-w-none"}

					/>

					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/download.png"}
						alt={"Chinese Icon"}
						className={"max-w-none"}
					/>
					
					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/expedia.svg"}
						alt={"expedia Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/firmenich.svg"}
						alt={"firmenich Icon"}
						className={"max-w-none"}
					/>
				</div>
			</div>

			<div className={"flex space-x-8 md:space-x-16 overflow-hidden"}>
				<div className={"flex space-x-8 md:space-x-16 animate-loop-scroll"}>
					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/glaxosmithkline.svg"}
						alt={"glaxosmithkline Icon"}
						className={"max-w-none"}

					/>

					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/merck_and_co.svg"}
						alt={"merck_and_co Icon"}
						className={"max-w-none"}
					/>
					
					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/novo_nordisk.svg"}
						alt={"novo_nordisk Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/pfizer.svg"}
						alt={"pfizer Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/sri_international.svg"}
						alt={"sri_international Icon"}
						className={"max-w-none"}

					/>

					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/stanford_logo.svg"}
						alt={"stanford_logo Icon"}
						className={"max-w-none"}
					/>
					
					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/the_university_of_wisconsin_madison.svg"}
						alt={"the_university_of_wisconsin_madison Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/university_of_missouri.svg"}
						alt={"university_of_missouri Icon"}
						className={"max-w-none"}
					/>
				</div>

				<div className={"bg-white flex space-x-8 md:space-x-16 animate-loop-scroll"} aria-hidden="true">
					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/glaxosmithkline.svg"}
						alt={"glaxosmithkline Icon"}
						className={"max-w-none"}

					/>

					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/merck_and_co.svg"}
						alt={"merck_and_co Icon"}
						className={"max-w-none"}
					/>
					
					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/novo_nordisk.svg"}
						alt={"novo_nordisk Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/pfizer.svg"}
						alt={"pfizer Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/sri_international.svg"}
						alt={"sri_international Icon"}
						className={"max-w-none"}

					/>

					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/stanford_logo.svg"}
						alt={"stanford_logo Icon"}
						className={"max-w-none"}
					/>
					
					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/the_university_of_wisconsin_madison.svg"}
						alt={"the_university_of_wisconsin_madison Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width}
						height={logo_height}
						src={"/sponsers/university_of_missouri.svg"}
						alt={"university_of_missouri Icon"}
						className={"max-w-none"}
					/>
				</div>
			</div>
			</div>
			
			<div className={"block md:hidden flex space-x-8 md:space-x-16 overflow-hidden"}>
				<div className={"flex space-x-8 md:space-x-16 animate-loop-scroll"}>
					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/australian_national_university.svg"}
						alt={"australian_national_university Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/aws.svg"}
						alt={"AWS Icon"}
						className={"max-w-none"}
					/>
					
					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/bayer.svg"}
						alt={"bayer Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/broad_inst.svg"}
						alt={"broad_inst Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/carnegie_mellon_university.svg"}
						alt={"carnegie_mellon_university Icon"}
						className={"max-w-none"}

					/>

					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/download.png"}
						alt={"Chinese Icon"}
						className={"max-w-none"}
					/>
					
					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/expedia.svg"}
						alt={"expedia Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/firmenich.svg"}
						alt={"firmenich Icon"}
						className={"max-w-none"}
					/>
				</div>

				<div className={"bg-white flex space-x-8 md:space-x-16 animate-loop-scroll"} aria-hidden="true">
					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/australian_national_university.svg"}
						alt={"australian_national_university Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/aws.svg"}
						alt={"AWS Icon"}
						className={"max-w-none"}
					/>
					
					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/bayer.svg"}
						alt={"bayer Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/broad_inst.svg"}
						alt={"broad_inst Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/carnegie_mellon_university.svg"}
						alt={"carnegie_mellon_university Icon"}
						className={"max-w-none"}

					/>

					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/download.png"}
						alt={"Chinese Icon"}
						className={"max-w-none"}
					/>
					
					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/expedia.svg"}
						alt={"expedia Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/firmenich.svg"}
						alt={"firmenich Icon"}
						className={"max-w-none"}
					/>
				</div>
			</div>

			<div className={"block md:hidden flex space-x-8 md:space-x-16 overflow-hidden"}>
				<div className={"flex space-x-8 md:space-x-16 animate-loop-scroll"}>
					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/glaxosmithkline.svg"}
						alt={"glaxosmithkline Icon"}
						className={"max-w-none"}

					/>

					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/merck_and_co.svg"}
						alt={"merck_and_co Icon"}
						className={"max-w-none"}
					/>
					
					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/novo_nordisk.svg"}
						alt={"novo_nordisk Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/pfizer.svg"}
						alt={"pfizer Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/sri_international.svg"}
						alt={"sri_international Icon"}
						className={"max-w-none"}

					/>

					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/stanford_logo.svg"}
						alt={"stanford_logo Icon"}
						className={"max-w-none"}
					/>
					
					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/the_university_of_wisconsin_madison.svg"}
						alt={"the_university_of_wisconsin_madison Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/university_of_missouri.svg"}
						alt={"university_of_missouri Icon"}
						className={"max-w-none"}
					/>
				</div>

				<div className={"bg-white flex space-x-8 md:space-x-16 animate-loop-scroll"} aria-hidden="true">
					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/glaxosmithkline.svg"}
						alt={"glaxosmithkline Icon"}
						className={"max-w-none"}

					/>

					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/merck_and_co.svg"}
						alt={"merck_and_co Icon"}
						className={"max-w-none"}
					/>
					
					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/novo_nordisk.svg"}
						alt={"novo_nordisk Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/pfizer.svg"}
						alt={"pfizer Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/sri_international.svg"}
						alt={"sri_international Icon"}
						className={"max-w-none"}

					/>

					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/stanford_logo.svg"}
						alt={"stanford_logo Icon"}
						className={"max-w-none"}
					/>
					
					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/the_university_of_wisconsin_madison.svg"}
						alt={"the_university_of_wisconsin_madison Icon"}
						className={"max-w-none"}
					/>

					<Image
						width={logo_width_mobile}
						height={logo_height_mobile}
						src={"/sponsers/university_of_missouri.svg"}
						alt={"university_of_missouri Icon"}
						className={"max-w-none"}
					/>
				</div>
			</div>
		</div>
	)
}

export default SponserSection;

