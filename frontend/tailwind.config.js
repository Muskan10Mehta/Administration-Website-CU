module.exports = {
  prefix: "tw-",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screen: {
      xs: "375px",
    },
    textIndent: (theme, { negative }) => ({
      ...{
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
      },
      ...negative({
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
      }),
    }),
    extend: {},
  },
  variants: {
    extend: {},
    textIndent: ["responsive"],
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-text-indent"),
  ],
};
