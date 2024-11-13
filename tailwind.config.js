/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {
            fontFamily: {
                monts: ["Montserrat", "sans-serif"],
                changa: ["Changa One", "sans-serif"],
                sports: ["Sports World", "sans-serif"],
            },
            textShadow: {
                black: "2px 3px #040404",
                blackWide: "4px 6px #040404",
            },
            textStrokeWidth: {
                2: "2px",
                1: "1px",
                5: "5px",
            },
            textStrokeColor: {
                black: "#000000",
            },
            boxShadow: {
                "solid-black": "1.5px 1.5px 0px #000000",
                "tebal": "0 10px 20px rgba(0, 0, 0, 0.25)",
                "super-tebal": "0 20px 40px rgba(0, 0, 0, 0.35)",
                "bottom-right": '4px 4px 8px rgba(0, 0, 0, 0.2)',
            },

            // Keyframes
            keyframes: {
                // MOBILE KEYFRAMES
                blobEnter: {
                    "0%": { borderRadius: "50%", transform: "scale(0)" },
                    "50%": { borderRadius: "40%", transform: "scale(1)" },
                    "100%": { borderRadius: "0", transform: "scale(1)" },
                },
                blobExit: {
                    "100%": { borderRadius: "50%", transform: "scale(1)" },
                    "50%": { borderRadius: "40%", transform: "scale(1)" },
                    "0%": { borderRadius: "0", transform: "scale(0)" },
                },
                slideInRight: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0)" },
                },
                slideInLeft: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(100%)" },
                },

                // TABLET KEYFRAMES
                blobEnterTablet: {
                    "0%": { borderRadius: "50%", transform: "scale(0)" },
                    "50%": { borderRadius: "40%", transform: "scale(1)" },
                    "100%": { borderRadius: "0", transform: "scale(1)" },
                },
                blobExitTablet: {
                    "100%": { borderRadius: "50%", transform: "scale(1)" },
                    "50%": { borderRadius: "40%", transform: "scale(1)" },
                    "0%": { borderRadius: "0", transform: "scale(0)" },
                },
                slideInRightTablet: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0)" },
                },
                slideInLeftTablet: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(120%)" },
                },
            },
            animation: {
                // MOBILE ANIMATIONS
                blobEnter: "blobEnter 0.6s ease-in-out forwards",
                blobExit: "blobExit 0.6s ease-out forwards",
                slideInRight: "slideInRight 0.6s ease-in-out forwards",
                slideInLeft: "slideInLeft 0.6s ease-in-out forwards",
                blobSlideInRight:
                    "blobEnter 0.6s ease-in-out forwards, slideInRight 0.6s ease-in-out forwards",
                blobSlideInLeft:
                    "blobExit 0.6s ease-in-out forwards, slideInLeft 0.6s ease-in-out forwards",

                // TABLET ANIMATIONS
                blobEnterTablet: "blobEnterTablet 0.8s ease-in-out forwards",
                blobExitTablet: "blobExitTablet 0.8s ease-out forwards",
                slideInRightTablet:
                    "slideInRightTablet 0.8s ease-in-out forwards",
                slideInLeftTablet:
                    "slideInLeftTablet 0.8s ease-in-out forwards",
                blobSlideInRightTablet:
                    "blobEnterTablet 0.8s ease-in-out forwards, slideInRightTablet 0.8s ease-in-out forwards",
                blobSlideInLeftTablet:
                    "blobExitTablet 0.8s ease-in-out forwards, slideInLeftTablet 0.8s ease-in-out forwards",
            },

            // Backgrounds
            backgroundImage: {
                bannerPhone:
                    "url('/resources/assets/pngs/webBanners/banner-phone.png')",
                bannerTab:
                    "url('/resources/assets/pngs/webBanners/banner-tablet.png')",
                bannerDesk:
                    "url('/resources/assets/pngs/webBanners/banner-desktop.png')",

                ilkomunityContainer:
                    "url('/resources/assets/pngs/containers/ilkomunity-container.png')",
                megaprokerContainer:
                    "url('/resources/assets/pngs/containers/megaproker-container.png')",

                ilkomunityGrid:
                    "url('/resources/assets/pngs/containers/ilkomunity-grid.png')",
                ilkomunityGridDesk:
                    "url('/resources/assets/pngs/containers/ilkomunity-grid-desktop.png')",

                "card-top-mobile":
                    "url('/resources/assets/pngs/card-proker/card1-mobile.png')",
                "card-bottom-mobile":
                    "url('/resources/assets/pngs/card-proker/card2-mobile.png')",
                "card-top-desktop":
                    "url('/resources/assets/pngs/card-proker/card1-desktop.png')",
                "card-bottom-desktop":
                    "url('/resources/assets/pngs/card-proker/card2-desktop.png')",
                "card-top-tablet":
                    "url('/resources/assets/pngs/card-proker/card1-tablet.png')",
                "card-bottom-tablet":
                    "url('/resources/assets/pngs/card-proker/card2-tablet.png')",

                "about-himalkom-desktop":
                    "url('/resources/assets/pngs/containers/about-himalkom-desktop.png')",
                "goals-himalkom-desktop":
                    "url('/resources/assets/pngs/containers/tujuan-himalkom-desktop.png')",
            },
            backgroundSize: {
                stretch: "100% 100%",
            },
        },
    },
    plugins: [
        function ({ addUtilities, theme }) {
            // Add text shadow utilities
            addUtilities(
                {
                    ".text-shadow-black": {
                        textShadow: '-2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black, 2px 2px 0px black, 0px 2px 0px black',
                    },
                    ".text-border": {
                        "text-shadow": `
            -2px -2px 0px #000, 1px -2px 0px #000, 
            -2px 1px 0px #000, 1px 1px 0px #000,   
            -2px 0px 0px #000, 1px 0px 0px #000,   
            2px 2px 0px #000, 3px 3px 0px #000,   
            4px 4px 0px #000, 5px 5px 0px #FF9900, 
            6px 6px 0px #FF9900, 7px 7px 0px #FF9900,
            8px 8px 0px rgba(0, 0, 0, 0.4)        
          `,
                    },
                },
                ["responsive", "hover"]
            );

            // Add text stroke width utilities
            addUtilities(
                Object.keys(theme("textStrokeWidth")).reduce((acc, key) => {
                    acc[`.text-stroke-${key}`] = {
                        "-webkit-text-stroke-width": theme(
                            `textStrokeWidth.${key}`
                        ),
                    };
                    return acc;
                }, {}),
                ["responsive", "hover"]
            );

            // Add text stroke color utilities
            addUtilities(
                Object.keys(theme("textStrokeColor")).reduce((acc, key) => {
                    acc[`.text-stroke-color-${key}`] = {
                        "-webkit-text-stroke-color": theme(
                            `textStrokeColor.${key}`
                        ),
                    };
                    return acc;
                }, {}),
                ["responsive", "hover"]
            );
        },
    ],
};
