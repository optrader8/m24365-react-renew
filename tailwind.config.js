/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fdfdfd",
        black: "#424242",
        "main-color-nomal-blue": "#3f51b5",
        "grey-scale-dark-grey": "#878787",
        "sub-color-background-color": "#f3f3f3",
        "sub-color-boder": "#ebebeb",
        "grey-scale-light-grey": "#dcdcdc",
        "main-color-light-green": "#90cec7",
        darkslateblue: "#273168",
        "main-color-light-blue": "#9bd5ed",
        "main-color-blue": "#69a7e4",
        "sub-color-system-color-previous": "#4674e6",
        "sub-color-system-color-loading": "#ffc37b",
        "main-color-deep-dark-blue": "#0e174a",
      },
      spacing: {},
      fontFamily: {
        "body-h6-regular": "'Noto Sans KR'",
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        xl: "20px",
        mini: "15px",
      },
    },
    fontSize: {
      "3xs": "10px",
      base: "16px",
      sm: "14px",
      lg: "18px",
      "5xl": "24px",
      xl: "20px",
      xs: "12px",
      "5xs": "8px",
      inherit: "inherit",
    },
    screens: {
      mq1575: {
        raw: "screen and (max-width: 1575px)",
      },
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
