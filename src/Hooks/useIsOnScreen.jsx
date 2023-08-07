import { useEffect, useState, useRef } from "react";

const useIsOnScreen = ref => {
	const [isOnScreen, setIsOnScreen] = useState();
	const observerRef = useRef(null);

	useEffect(() => {
		observerRef.current = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						// console.log(entry.target);
						setIsOnScreen(entry.target.id);
					}
				});
			},
			{ threshold: 0.1 },
		);
	}, []);

	useEffect(() => {
		let children = ref.current.children;
		for (const child in children) {
			if (Object.hasOwnProperty.call(children, child)) {
				const element = children[child];
				observerRef.current.observe(element);
			}
		}

		return () => {
			observerRef.current.disconnect();
		};
	}, [ref]);

	return isOnScreen;
};

export default useIsOnScreen;

// let observer = new IntersectionObserver(
// 	(entries, observer) => {
// 		entries.forEach(entry => {
// 			if (entry.isIntersecting) {
// 				console.log(entry.target);
// 				setAnimationStage(entry.target.id);
// 			}
// 		});
// 	},
// 	{ threshold: 0.1 },
// );

// let children = ref.current.children;
// for (const child in children) {
// 	if (Object.hasOwnProperty.call(children, child)) {
// 		const element = children[child];
// 		observer.observe(element);
// 	}
// }
