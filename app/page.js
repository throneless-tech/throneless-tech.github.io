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

export default function Home() {
  const mode = useColorMode()

  return (
    <ClientOnly>
      <Box
        bgAttachment="fixed"
        bgImage={mode?.colorMode === "dark" ? "url('/assets/images/bg.png')" : ""}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Header />
        <Container marginTop={12}>
          <Hero />
        </Container>
        <Box marginTop={12}>
          <Footer />
        </Box>
      </Box >
    </ClientOnly>
  )
}