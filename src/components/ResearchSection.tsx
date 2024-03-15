import { IoIosArrowRoundForward } from "react-icons/io"

const ResearchSection = () => {
	return (
		<div className={"bg-white flex flex-col md:flex-row"}>
			<div className={"w-full md:w-2/4 px-20 py-20 bg-lime-500 flex items-center"}>
				<div className={"flex flex-col gap-4 text-white"}>
					<div>
						<h1 className={"text-2xl font-semibold"}>Differentiable Physics : A Position Piece</h1>
					</div>
					
					<div>
						<h1 className={"font-medium"}>Bharath Ramsundar, Dilip Krishnamurthy, Venkatasubramanian Viswanathan</h1>
					</div>

					<div className={"flex justify-between items-center"}>
						<div className={"flex gap-4"}>
							<h1 className={"cursor-pointer hover:text-black"}>Download</h1>
							<h1 className={"cursor-pointer hover:text-black"}>Link</h1>
						</div>

						<IoIosArrowRoundForward className={"cursor-pointer hover:text-black"} size={70} />
					</div>
				</div>
			</div>

			<div className={"w-full md:w-2/4 px-20 py-20 bg-lime-700"}>
				<div className={"flex flex-col gap-4 text-white"}>
					<div>
						<h1 className={"text-2xl font-semibold"}>ChemBERTa: Large-Scale Self-Supervised Pretraining for Molecular Property Prediction</h1>
					</div>
					
					<div>
						<h1 className={"font-medium"}>Seyone Chithrananda, Gabriel Grand, Bharath Ramsundar</h1>
					</div>

					<div className={"flex justify-between items-center"}>
						<div className={"flex gap-4"}>
							<h1 className={"cursor-pointer hover:text-black"}>Download</h1>
							<h1 className={"cursor-pointer hover:text-black"}>Link</h1>
						</div>

						<IoIosArrowRoundForward className={"cursor-pointer hover:text-black"} size={70} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ResearchSection;
