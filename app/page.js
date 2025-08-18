"use client"

// fonts
import { funnel } from "@/app/fonts"

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
          bgAttachment="fixed"
          bgImage={mode?.colorMode === "dark" ? "url('/assets/images/bg.png')" : ""}
          backgroundPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          <Header />
          <Container
            marginTop={[12, 12, 140]}
            paddingBottom={[12, 12, 200]}
          >
            <Hero />
          </Container>
        </Box>
        <Container marginTop={[30, 50, 18]}>
          <About />
        </Container>
        <Box marginTop={24}>
          <Footer />
        </Box>
      </Box >
    </ClientOnly>
  )
}