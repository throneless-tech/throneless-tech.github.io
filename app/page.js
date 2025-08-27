"use client"

// chakra ui imports
import {
  Box,
  ClientOnly,
  Container,
} from "@chakra-ui/react"

import {
  useColorMode
} from "@/components/ui/color-mode";

// components imports
import Header from "@/components/sections/header"
import Hero from "@/components/sections/hero"
import Footer from "@/components/sections/footer"
import About from "@/components/sections/about";

export default function Home() {
  const mode = useColorMode()

  return (
    <ClientOnly>
      <Box>
        <Box
          _after={{
            backgroundImage: [mode?.colorMode === "dark" ? "url('/assets/images/orb-dark-2.png')" : "url('/assets/images/orb-light-2.png')", mode?.colorMode === "dark" ? "url('/assets/images/orb-dark-2.png')" : "url('/assets/images/orb-light-2.png')", mode?.colorMode === "dark" ? "url('/assets/images/orb-dark-1.png')" : "url('/assets/images/orb-light-1.png')"],
            backgroundPosition: ["top 30% right 10%", "top 26% right 10%", "top 40% right 0", "top 30% right 0", "top 40% right 0"],
            backgroundRepeat: "no-repeat",
            backgroundSize: ["20%", "20%", "50%", "50%"],
            bottom: 0,
            content: "''",
            height: "100%",
            left: 0,
            position: "absolute",
            right: 0,
            top: 0,
            width: "100%",
            zIndex: "-1",
          }}
          _before={{
            backgroundImage: mode?.colorMode === "dark" ? "url('/assets/images/bg-dark.png')" : "url('/assets/images/bg-light.png')",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: ["300%", "200%", "160%", "120%", "100%"],
            bottom: 0,
            content: "''",
            height: "100%",
            left: 0,
            opacity: 0.6,
            position: "absolute",
            right: 0,
            top: 0,
            width: "100%",
            zIndex: "-2",
          }}
          position="relative"
          zIndex={1}
        >
          <Header />
          <Container
            marginTop={[12, 12, 140]}
            paddingBottom={12}
          >
            <Hero />
            <Box marginTop={[30, 40, 160]}>
              <About />
            </Box>
          </Container>
        </Box>
        <Box marginTop={24}>
          <Footer />
        </Box>
      </Box >
    </ClientOnly>
  )
}