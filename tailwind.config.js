/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*"],
  theme: {
    extend: {
     


      colors:{
        cardColor: "#ff3946",
        navColor:"#314584",
        btnColor:"#ff3946",
        pColor:"#6e757a"
      },
      fontSize:{

        navSize:"24px",
        titleSize:"74px",
        pSize:"18px",
        mSize:"45px",
        fSize:"49px",
      },

      fontFamily:{

        fontNav:["Work Sans"]
      }
    },
  },
  plugins: [],
}

