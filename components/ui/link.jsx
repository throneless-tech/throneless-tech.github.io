// fonts
import { funnel } from "@/app/fonts"

// chakra ui
import { Box, Group, Link as ChakraLink } from "@chakra-ui/react"

// icons
import ArrowRight from "@/app/_icons/arrowRight"

export const Link = ({ color, href, children }) => (
  <Group>
    <ChakraLink
      _active={{
        color: "black",
        backgroundColor: "yellow.300",
        rounded: "none"
      }}
      _focus={{
        color: "black",
        backgroundColor: "yellow.300",
        rounded: "none"
      }}
      _hover={{
        color: "black",
        backgroundColor: "yellow.300",
        rounded: "none",

      }}
      className={`group ${funnel.className}`}
      color={color}
      href={href}
      fontSize="2xl"
      fontWeight={400}
      paddingLeft={4}
      paddingRight={16}
      paddingY={4}
      position="relative"
      textDecoration="underline"
    >
      {children}
      <Box
        _groupActive={{ backgroundColor: "black" }}
        _groupFocus={{ backgroundColor: "black" }}
        _groupHover={{ backgroundColor: "black" }}
        position="absolute"
        right={4}
        top="50%"
        transform="rotate(-45deg) translateY(-50%)"
        width={6}
      >
        <ArrowRight color="yellow.300" />
      </Box>
    </ChakraLink>
  </Group>
)