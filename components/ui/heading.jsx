// fonts
import { geistMono } from "@/app/fonts"

// chakra ui
import { Heading as ChakraHeading } from "@chakra-ui/react"

export const Heading = ({color, children }) => (
  <ChakraHeading
    as="h2"
    borderBottomColor={color}
    borderBottomStyle="solid"
    borderBottomWidth="1px"
    className={geistMono.className}
    color={color}
    fontWeight={300}
    paddingBottom={4}
    size="xl"
    textTransform="uppercase"
  >
    {children}
  </ChakraHeading>
)