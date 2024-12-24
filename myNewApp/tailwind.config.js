/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#565656',
        'custom-black': '#292929',
        'custom-orange': '#FF7500',
        'custom-black-2': '#121212',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'medium': 500,
        'extrabold': 700,
      },
      height: {
        '74': '74px',
        '636': '636px',
        '167': '167px',
        '50': '50px',
        '219': '219px',
        '61': '61px',
        '40': '40px',
        '41': '41px',
        '548': '548px',
        '54': '54px',
        '373.02': '373.02px',
        '90.73': '90.73px',
        '681': '691px',
      },
      width: {
        '733': '733px',
        '171': '171px',
        '74': '74px',
        '475': '475px',
        '50': '50px',
        '397': '397px',
        '320': '320px',
        '212': '212px',
        '40': '40px',
        '41': '41px',
        '145': '145px',
        '757': '757px'
      },
      fontSize: {
        '45': '45px',
        '16': '16px',
        '24': '24px',
      },
      spacing: {
        '139': '139px',
      },
      lineHeight: {
        '60': '60px',
        '28': '28px',
        '31.93': '31.93px',
      },
      margin:{
        '600': '600px',
      },
    },
  },
  plugins: [],
}

