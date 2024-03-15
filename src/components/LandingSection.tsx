import Image from "next/image";
import { IoIosArrowRoundDown } from "react-icons/io";
import { HiArrowLongRight } from "react-icons/hi2";

const LandingSection = () => {
	return (
		<div className={"relative"}>
			<div className={"z-10 absolute m-auto left-0 right-0 flex justify-center items-center h-screen"}>
				<div className={"flex flex-col md:flex-row items-center gap-12 lg:gap-20 xl:gap-40"}>
					<div className={"flex flex-col gap-4"}>
						<h1 className={"text-white text-center md:text-left text-5xl lg:text-6xl xl:text-7xl font-serif w-full"}>Revolutionizing</h1>
						<h1 className={"text-white text-center md:text-left text-5xl lg:text-6xl xl:text-7xl font-serif w-full"}>Medicine</h1>
						<h1 className={"text-white text-center md:text-left text-5xl lg:text-6xl xl:text-7xl font-serif w-full"}>Discovery.</h1>
					</div>

					<div className={"flex items-center flex-col gap-4"}>
						<div className={"flex text-white gap-0 lg:gap-4 text-xl font-medium "}>
							<div className={"flex flex-col items-center w-[125px]"}>
								<h1 className={"text-center"}>Experimental </h1>
								<h1 className={"text-center"}>Data</h1>
								<IoIosArrowRoundDown className={"hidden md:block text-white"} size={100} />
								<IoIosArrowRoundDown className={"block md:hidden text-white"} size={70} />
							</div>

							<div className={"flex flex-col items-center w-[125px]"}>
								<h1 className={"text-center"}>Simulation </h1>
								<h1 className={"text-center"}>Data</h1>
								<IoIosArrowRoundDown className={"hidden md:block text-white"} size={100} />
								<IoIosArrowRoundDown className={"block md:hidden text-white"} size={70} />
							</div>

							<div className={"flex flex-col items-center w-[125px]"}>
								<h1 className={"text-center"}>Physical </h1>
								<h1 className={"text-center"}>Laws</h1>
								<IoIosArrowRoundDown className={"hidden md:block text-white"} size={100} />
								<IoIosArrowRoundDown className={"block md:hidden text-white"} size={70} />
							</div>
						</div>

						<div className={"flex flex-col text-white gap-2"}>
							<h1 className={"font-medium text-center text-xl font-semibold"}>Inductive Priors</h1>
							<div className={"flex gap-2"}>
								<div className={"flex flex-col gap-2"}>
								<h1 className={"font-serif text-center text-3xl md:text-4xl"}>Scientific Foundation</h1>
								<h1 className={"font-serif text-center text-3xl md:text-4xl"}>Models.</h1>
								</div>
							</div>
						</div>

						<div className={"flex text-white gap-0 lg:gap-4 text-xl font-medium"}>
							<div className={"flex flex-col items-center w-[125px]"}>
								<IoIosArrowRoundDown className={"hidden md:block text-white"} size={100} />
								<IoIosArrowRoundDown className={"block md:hidden text-white"} size={70} />
								<h1 className={"text-center"}>New </h1>
								<h1 className={"text-center"}>Medicine</h1>
							</div>

							<div className={"flex flex-col items-center w-[125px]"}>
								<IoIosArrowRoundDown className={"hidden md:block text-white"} size={100} />
								<IoIosArrowRoundDown className={"block md:hidden text-white"} size={70} />
								<h1 className={"text-center"}>Novel </h1>
								<h1 className={"text-center"}>Alloys</h1>
							</div>

							<div className={"flex flex-col items-center w-[125px]"}>
								<IoIosArrowRoundDown className={"hidden md:block text-white"} size={100} />
								<IoIosArrowRoundDown className={"block md:hidden text-white"} size={70} />
								<h1 className={"text-center"}>Fundamental</h1>
								<h1 className={"text-center"}>Discoveries</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={"min-h-screen relative"}>
				<Image
					layout="fill"
					objectFit="cover"
					src={"/forest_2.png"}
					alt={"background image"}
				/>
			</div>
		</div>
	)
}

export default LandingSection;
