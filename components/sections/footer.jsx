"use client"

// fonts
import { geistMono } from "@/app/fonts";

// chakra ui imports
import {
  Box,
  ClientOnly,
  Container,
  Flex,
  VisuallyHidden,
} from "@chakra-ui/react";

import {
  ColorModeButton,
  useColorModeValue,
} from "@/components/ui/color-mode";

// components
import { Heading } from "@/components/ui/heading";
import { Link } from "@/components/ui/link";

// icons
import Logo from "@/app/_icons/logo";

export default function Footer() {
  const color = useColorModeValue("black", "white");

  return (
    <ClientOnly>
      <Container id="contact" paddingBottom={12}>
        <Heading color={color}>
          Contact us
        </Heading>
        <Flex
          direction={["column", "column", "row"]}
          gap={[8, 8, 4]}
          justify="space-between"
          marginTop={8}>
          <Flex direction={["column", "row"]} gap={4}>
            <Link color={color} href="mailto:team@throneless.tech">
              Email
            </Link>
            <Link color={color} href="https://github.com/throneless-tech">
              GitHub
            </Link>
            <Link color={color} href="https://bsky.app/profile/throneless.tech">
              Bluesky
            </Link>
          </Flex>
          <Box width="60px">
            <VisuallyHidden>
              Throneless Tech logo
            </VisuallyHidden>
            <Logo color={color} />
          </Box>
        </Flex>
      </Container>
    </ClientOnly>
  )
}