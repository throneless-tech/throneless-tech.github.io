// fonts
import { geistMono } from "@/app/fonts"

// chakra ui
import { Box, chakra } from "@chakra-ui/react"

// icons
import ArrowRight from "@/app/_icons/arrowRight"

export const Button = ({as, href, children }) => (
  <chakra.button
    _active={{ backgroundColor: "yellow.600" }}
    _hover={{ backgroundColor: "yellow.600" }}
    _focus={{ backgroundColor: "yellow.600" }}
    as={as}
    bg="yellow.300"
    className={geistMono.className}
    color="black"
    fontWeight={700}
    href={href}
    position="relative"
    py="2" px="4" 
    rounded="none"
    textTransform="uppercase"
    maxWidth={240}
  >
    {children}
    <Box width={4} position="absolute" right={4} top="50%" transform="translateY(-50%)">
      <ArrowRight color="black" />
    </Box>
  </chakra.button>
)