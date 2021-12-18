module.exports = {
  content: ["./src/**/*.{html,js}","index.html"],
  theme: {

  extend: {
    colors: {
      'green-bg-color': "#f7fee7",
    },
    fontFamily: {
      'body': ['Fira\\ Sans\\ Extra\\ Condensed', 'sans-serif'],
    },
    backgroundImage: {
      'myavatar': "url('/src/test.jpg')"
    },
    },
  },
  plugins: [],
}