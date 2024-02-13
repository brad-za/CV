import React, { useEffect } from "react";
import { useProgress } from "@react-three/drei";
import { useAnimation } from "./AnimationContext";

const Loader = () => {
	const { active, progress } = useProgress();

	return (
		<div className="bg-  absolute z-50 flex h-screen w-full items-center justify-center bg-opacity-50">
			<div className="relative">
				<svg
					className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent"
					viewBox="0 0 24 24"
				></svg>
				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-sm text-white">
					{Math.round(progress)}%
				</div>
			</div>
		</div>
	);
};

export default Loader;
