module.exports = {
	content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
	variants: {
		extend: {
			display: ["group-hover"],
		},
	},
	theme: {
		fontFamily: {
			poppins: ["Poppins"],
		},
		extend: {
			colors: {
				hotPink: "#F5A",
				chipYellow: "#FCB638",
				chipRed: "#ff8966",
				chipBlue: "#5da0af",
				chipWhite: "#f7f9f9",
				chipDarkBlue: "#0b141b",
				gradient1: "#0B141B",
				gradient2: "#0D1821",
				gradient3: "#142533",
				gradient4: "#203c52",
			},

			spacing: {
				".1": "10%",
				// prettier-ignore
				'15': "3.75em",
			},
			transitionProperty: {
				multiple: "width , height",
			},
			animation: {
				moveScreenUp: "moveScreenUp 1s ",
				moveScreenDown: "moveScreenDown 1s ",
				scrollWheel: "scrollWheel 2s infinite",
				moveUp: "moveUp 3s ",
				moveDown: "moveDown 3s",
				moveScreen: "moveScreen 24s infinite",
				moveButtonRight: "moveButtonRight 2s",
				blink: "blink 1s infinite",
				spin720: "spin720 1s ",
			},
			keyframes: {
				spin720: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(720deg)" },
				},
				blink: {
					"0%": { opacity: "1" },
					"50%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				scrollWheel: {
					"0%": {
						transform: "translateY(0%)",
						opacity: "100%",
					},
					"100%": {
						transform: "translateY(500%)",
						opacity: "20%",
					},
				},
				moveScreenUp: {
					"0%": {
						transform: "translateY(0%)",
					},
					//   "50%": {
					//     transform: "translateY(0%)",
					//   },
					"100%": {
						transform: "translateY(-100%)",
					},
				},
				moveScreenDown: {
					"0%": {
						transform: "translateY(-100%)",
					},
					//   "50%": {
					//     transform: "translateY(-100%)",
					//   },
					"100%": {
						transform: "translateY(0%)",
					},
				},
				moveUp: {
					"0%": {
						transform: "translateY(0%)",
					},

					"100%": {
						transform: "translateY(56px)",
					},
				},
				moveDown: {
					"0%": {
						transform: "translateY(56px)",
					},

					"100%": {
						transform: "translateY(-40px)",
					},
				},
				moveScreen: {
					// 0 s - start
					"0%": {
						transform: "translateY(0%)",
					},
					// 6 s
					"25%": {
						transform: "translateY(0%)",
					},
					// 12 s
					"45%": {
						transform: "translateY(-100%)",
					},
					"55%": {
						transform: "translateY(-100%)",
					},
					// 18 s
					"75%": {
						transform: "translateY(-100%)",
					},
					// 24 s
					"100%": {
						transform: "translateY(0%)",
					},
				},
			},
		},
	},
	plugins: [
		require("tailwindcss-scoped-groups")({
			groups: ["one", "two"],
		}),
	],
};
