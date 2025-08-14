"use client"

// fonts
import { funnel } from "@/app/fonts"

// chakra ui imports
import {
  Box,
  Container,
  Heading
} from "@chakra-ui/react"

import {
  useColorMode
} from "@/components/ui/color-mode";

// components imports
import Header from "@/components/sections/header"
import Hero from "@/components/sections/hero"
import Footer from "@/components/sections/footer"

export default function Home() {
  const mode = useColorMode()

  return (
    <Box
      bgAttachment="fixed"
      bgImage={mode.colorMode === "dark" ? "url('/assets/images/bg.png')" : ""}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Container marginTop={12}>
        <Header />
      </Container>
      <Container marginTop={12}>
        <Hero />
      </Container>
      <Box marginY={20}>
        <Footer />
      </Box>
    </Box >
  )
}