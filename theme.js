import {
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        black: {
          value: "#0E0E0E",
        },
        blue: {
          50: "#F6F9FF",
          100: "#E9F1FD",
          200: "#C6DAF7",
          300: "#7EACED",
          400: "#4D88DC",
          500: "#2170DF",
          600: "#1D62C4",
          700: "#1853A5",
          800: "#14458B",
          900: "#103870",
          950: "#0A2245",
        },
        gray: {
          100: "#F4F4F4",
          200: "#E4E4E4",
          300: "#D4D4D4",
          400: "#A1A1A1",
          500: "#717171",
          600: "#525252",
          700: "#3F3F3F",
          800: "#282828",
          900: "#181818",
          950: "#0E0E0E",
        },
        white: {
          DEFAULT: "#FFFFFF"
        },
        yellow: {
          50: "#FFFCF0",
          100: "#FDF7CE",
          200: "#FBEA87",
          300: "#F8D843",
          400: "#F6C614",
          500: "#ECA607",
          600: "#D58308",
          700: "#B25F09",
          800: "#93480A",
          900: "#7A370A",
          950: "#381605",
        }
      },
    },
  },
})


export const system = createSystem(defaultConfig, config)