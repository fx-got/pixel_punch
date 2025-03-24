/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "15px", // było 12px
        base: "18px", // było 16px
        lg: "21px", // było 18px
        xl: "24px", // było 20px
        "2xl": "27px", // było 24px
        "3xl": "30px", // było 28px
        "4xl": "36px", // było 32px
        "5xl": "48px", // było 40px
      },
    },
  },
  plugins: [],
};
