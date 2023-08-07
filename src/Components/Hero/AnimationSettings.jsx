import React, { useState } from "react";
import SettingsIcons from "../../assets/settingsIcon.jsx";
import { HeroAnimationSettings } from "../../Hooks/useHeroAnimationSettings.jsx";

const AnimationSettings = () => {
	const [rotate, setRotate] = useState(false);

	const {
		isOpen,
		changeSize,
		moveVertically,
		moveHorizontally,
		textAnimation,
		sizeTiming,
		verticalTiming,
		horizontaltiming,
		textTiming,
		handleMenuOpen,
		handleChangeSizeChange,
		handleMoveVerticallyChange,
		handleMoveHorizontallyChange,
		handleTextAnimationChange,
		handleSizeTimeChange,
		handleVerticalTimingChange,
		handleHorizontalTimingChange,
		handleTextTimingChange,
	} = HeroAnimationSettings();

	const handleMenuOpenWithRotation = () => {
		handleMenuOpen();
		setRotate(!rotate);
	};

	return (
		<div className="absolute right-10 top-10 flex flex-row-reverse">
			<div>
				<div
					onClick={handleMenuOpenWithRotation}
					className={`z-10 flex-none  bg-[#292f31a7] p-2 backdrop-blur-lg transition-all duration-200 ease-in-out ${
						isOpen
							? "bg-green- rounded-br-2xl rounded-tr-2xl"
							: "bg-red- rounded-2xl"
					}`}
				>
					<div className={rotate ? "animate-spin720" : ""}>
						<SettingsIcons />
					</div>
				</div>
			</div>
			<div
				className={`z-0 origin-top-right transform rounded-bl-2xl rounded-br-2xl rounded-tl-2xl bg-[#292f31a7] p-2 backdrop-blur-lg transition-all duration-500 ease-in-out ${
					isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
				}`}
			>
				{isOpen && (
					<form className=" my-5 ">
						<div className="flex flex-col space-y-2 text-lg font-medium">
							<div className="flex justify-between space-x-2 ">
								<p>Changing size animation</p>
								<input
									type="checkbox"
									checked={changeSize}
									onChange={handleChangeSizeChange}
								/>
							</div>
							<div className="flex- bg-green- flex justify-between space-x-2">
								<p>Changing size delay</p>
								<div className=" flex rounded-xl border-2 border-white">
									<input
										className=" w-14 bg-transparent text-right [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
										type="number"
										value={`${sizeTiming / 1000}`}
										onChange={handleSizeTimeChange}
									/>
									<div className="mx-1"> s</div>
								</div>
							</div>
							<div className="flex justify-between space-x-2">
								<p>Vertical animation</p>
								<input
									type="checkbox"
									checked={moveVertically}
									onChange={handleMoveVerticallyChange}
								/>
							</div>
							<div className="flex- bg-green- flex justify-between space-x-2">
								<p>Vertical movement delay </p>
								<div className=" flex rounded-xl border-2 border-white">
									<input
										className=" w-14 bg-transparent text-right [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
										type="number"
										value={`${verticalTiming / 1000}`}
										onChange={handleVerticalTimingChange}
									/>
									<div className="mx-1"> s</div>
								</div>
							</div>
							<div className="flex justify-between space-x-2">
								<p>text animation</p>
								<input
									type="checkbox"
									checked={textAnimation}
									onChange={handleTextAnimationChange}
								/>
							</div>
							<div className="flex- bg-green- flex justify-between space-x-2">
								<p>Text animation delay </p>
								<div className=" flex rounded-xl border-2 border-white">
									<input
										className=" w-14 bg-transparent text-right [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
										type="number"
										value={`${textTiming / 1000}`}
										onChange={handleTextTimingChange}
									/>
									<div className="mx-1"> s</div>
								</div>
							</div>
						</div>
					</form>
				)}
			</div>
		</div>
	);
};

export default AnimationSettings;
