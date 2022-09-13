module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
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
      },
      transitionProperty: {
        multiple: "width , height",
      },
      animation: {
        moveScreenUp: "moveScreenUp 5s ",
        moveScreenDown: "moveScreenDown 5s ",

        moveUp: "moveUp 3s ",
        moveDown: "moveDown 3s",
        moveScreen: "moveScreen 24s infinite",
        moveButtonRight: "moveButtonRight 2s",
      },
      keyframes: {
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
  plugins: [],
};
