// AnimationContext.js
import gsap from "gsap";
import React, {
	Suspense,
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";

import Loading from "./LoadingScreen";

const AnimationContext = createContext();

export const useAnimation = () => useContext(AnimationContext);

export const AnimationProvider = ({ children }) => {
	// State

	const [animateRotary, setAnimateRotary] = useState(false);
	const [animateThumbCluster, setAnimateThumbCluster] = useState(false);
	const [animateColumnar, setAnimateColumnar] = useState(false);
	const [animateSwitch, setAnimateSwitch] = useState(false);

	// Refs

	const rotaryRef = useRef();
	const keyCapsRef = useRef();
	const hasAnimated = useRef(false);
	const hasThumbClusterAnimated = useRef(false);

	// Setter Functions

	const toggleRotaryAnimation = () => setAnimateRotary(prev => !prev);
	const toggleThumbClusterAnimation = () =>
		setAnimateThumbCluster(prev => !prev);
	const toggleColumnarAnimation = () => setAnimateColumnar(prev => !prev);
	const toggleSwitchAnimation = () => setAnimateSwitch(prev => !prev);

	// Exposed Values

	const value = {
		animateRotary,
		animateThumbCluster,
		animateColumnar,
		animateSwitch,
		// Expose toggle functions to context
		toggleRotaryAnimation,
		toggleThumbClusterAnimation,
		toggleColumnarAnimation,
		toggleSwitchAnimation,

		// Expose refs to models
		hasAnimated,
		hasThumbClusterAnimated,
		rotaryRef,
		keyCapsRef,
	};

	// should probably move the buttons

	return (
		<AnimationContext.Provider value={value}>
			<Suspense fallback={<Loading />}>
				<div className="absolute left-20 top-10 z-10  flex flex-col">
					<button
						className="rounded-md bg-blue-300 p-3"
						onClick={() => toggleRotaryAnimation()}
					>
						Encoder
					</button>{" "}
					<button
						className="rounded-md bg-violet-300 p-3"
						onClick={() => toggleThumbClusterAnimation()}
					>
						ThumbCluster
					</button>
					<button
						className="rounded-md bg-yellow-300 p-3"
						onClick={() => toggleColumnarAnimation()}
					>
						Columnar
					</button>{" "}
					<button
						className="rounded-md bg-orange-300 p-3"
						onClick={() => toggleSwitchAnimation()}
					>
						Switch
					</button>
				</div>

				{children}
			</Suspense>
		</AnimationContext.Provider>
	);
};

export default AnimationProvider;
