module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#0a192f",
        vertfluo: "#39ff14",
        vertfluo70: "#1e7c23",
        blanc60: "#9da3ac",
        blanc40: "#6c7582",
        br: "rgba(0, 0, 0, 0.274)",
        tab: "#132135",
        tab2: "rgb(88, 147, 241)",
        input: "#ccd6f6",
      },
      fontSize: {
        xxs: ".5rem",
      },
      spacing: {
        26: "105px",
      },
      screens: {
        "7xs": "280px",
        "6xs": "360px",
        "5xs": "375px",
        "4xs": "390px",
        "3xs": "393px",
        "2xs": "412px",
      },
    },
  },
  plugins: [],
};
