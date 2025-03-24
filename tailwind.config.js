/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "19px", // było 12px
        base: "20px", // było 16px
        lg: "23px", // było 18px
        xl: "26px", // było 20px
        "2xl": "29px", // było 24px
        "3xl": "32px", // było 28px
        "4xl": "38px", // było 32px
        "5xl": "50px", // było 40px
      },
    },
  },
  plugins: [],
};
