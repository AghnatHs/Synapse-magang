/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.jsx',
  ],
  theme: {
    extend: {
      backgroundSize: {
        "stretch": "100% 100%",
      },
      fontFamily: {
        monts: ["Montserrat", "sans-serif"],
        changa: ["Changa One", "sans-serif"],
        sports: ["Sports World", "sans-serif"],
      },
      textShadow: {
        'black': '2px 3px #040404',
      },
      textStrokeWidth: {
        '2': '2px',
        '1': '1px',
      },
      textStrokeColor: {
        'black': '#000000',
      },
      boxShadow: {
        'solid-black': '1.5px 1.5px 0px #000000'
      },

      // Keyframes
      keyframes: {
        // MOBILE KEYFRAMES
        blobEnter: {
          '0%': { borderRadius: '50%', transform: 'scale(0)' },
          '50%': { borderRadius: '40%', transform: 'scale(1)' },
          '100%': { borderRadius: '0', transform: 'scale(1)' },
        },
        blobExit: {
          '100%': { borderRadius: '50%', transform: 'scale(1)' },
          '50%': { borderRadius: '40%', transform: 'scale(1)' },
          '0%': { borderRadius: '0', transform: 'scale(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },

        // TABLET KEYFRAMES
        blobEnterTablet: {
          '0%': { borderRadius: '50%', transform: 'scale(0)' },
          '50%': { borderRadius: '40%', transform: 'scale(1)' },
          '100%': { borderRadius: '0', transform: 'scale(1)' },
        },
        blobExitTablet: {
          '100%': { borderRadius: '50%', transform: 'scale(1)' },
          '50%': { borderRadius: '40%', transform: 'scale(1)' },
          '0%': { borderRadius: '0', transform: 'scale(0)' },
        },
        slideInRightTablet: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeftTablet: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(120%)' },
        }
      },
      animation: {
        // MOBILE ANIMATIONS
        blobEnter: 'blobEnter 0.6s ease-in-out forwards',
        blobExit: 'blobExit 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.6s ease-in-out forwards',
        slideInLeft: 'slideInLeft 0.6s ease-in-out forwards',
        blobSlideInRight: 'blobEnter 0.6s ease-in-out forwards, slideInRight 0.6s ease-in-out forwards',
        blobSlideInLeft: 'blobExit 0.6s ease-in-out forwards, slideInLeft 0.6s ease-in-out forwards',

        // TABLET ANIMATIONS
        blobEnterTablet: 'blobEnterTablet 0.8s ease-in-out forwards',
        blobExitTablet: 'blobExitTablet 0.8s ease-out forwards',
        slideInRightTablet: 'slideInRightTablet 0.8s ease-in-out forwards',
        slideInLeftTablet: 'slideInLeftTablet 0.8s ease-in-out forwards',
        blobSlideInRightTablet: 'blobEnterTablet 0.8s ease-in-out forwards, slideInRightTablet 0.8s ease-in-out forwards',
        blobSlideInLeftTablet: 'blobExitTablet 0.8s ease-in-out forwards, slideInLeftTablet 0.8s ease-in-out forwards'
      },
    },
  },
  plugins: [],
}

