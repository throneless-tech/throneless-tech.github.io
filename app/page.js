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
import About from "@/components/sections/about";
import Footer from "@/components/sections/footer"
import Header from "@/components/sections/header"
import Hero from "@/components/sections/hero"
import OurWork from "@/components/sections/ourWork";
import Team from "@/components/sections/team";

// background images
import BgDark from "@/public/assets/images/bgDark";
import BgLight from "@/public/assets/images/bgLight";

export default function Home() {
  const mode = useColorMode()

  return (
    <ClientOnly>
      <Box>
        <Box
          _after={{
            backgroundImage: [mode?.colorMode === "dark" ? "url('/assets/images/orb-dark-2.png')" : "url('/assets/images/orb-light-2.png')", mode?.colorMode === "dark" ? "url('/assets/images/orb-dark-2.png')" : "url('/assets/images/orb-light-2.png')", mode?.colorMode === "dark" ? "url('/assets/images/orb-dark-1.png')" : "url('/assets/images/orb-light-1.png')"],
            backgroundPosition: ["top 11% right 10%", "top 12% right 10%", "top 18% right 0", "top 18% right 0", "top 22% right 0"],
            backgroundRepeat: "no-repeat",
            backgroundSize: ["20%", "20%", "50%", "50%", "40%"],
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
          position="relative"
          zIndex={1}
        >
          <Box position="relative">
            <Box
              left="50%"
              position="absolute"
              top={0}
              transform="translateX(-50%)"
              width={["400%", "300%", "200%", "140%", "110%"]}
              zIndex="-2"
            >
              {mode?.colorMode === "dark" ? <BgDark /> : <BgLight />}
            </Box>
            <Header />
            <Container marginTop={[12, 12, 140]}>
              <Hero />
            </Container>
          </Box>
          <Container paddingBottom={12}>
            <Box marginTop={[62, 40, 160]}>
              <About />
            </Box>
            <Box marginTop={[62, 24, 28]}>
              <OurWork />
            </Box>
            <Box marginTop={[62, 40, 28]}>
              <Team />
            </Box>
          </Container>
        </Box>
        <Box marginTop={[8, 12, 24]}>
          <Footer />
        </Box>
      </Box >
    </ClientOnly>
  )
}