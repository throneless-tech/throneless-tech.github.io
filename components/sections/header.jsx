"use client"

// chakra ui imports
import {
  Box,
  Container,
  Heading,
  VisuallyHidden,
  Flex,
  ClientOnly
} from "@chakra-ui/react";

import {
  ColorModeButton,
  useColorModeValue,
} from "@/components/ui/color-mode";

// icons
import LogoWordmark from "@/app/_icons/logo-wordmark";

export default function Header() {
  const color = useColorModeValue("black", "white");

  return (
    <ClientOnly>
      <Box>
        <Flex direction="row" justify="space-between">
          <Heading as="h1" width={340}>
            <VisuallyHidden>
              Throneless Tech
            </VisuallyHidden>
            <LogoWordmark color={color} />
          </Heading>
          <ColorModeButton />
        </Flex>
      </Box>
    </ClientOnly>
  )
}