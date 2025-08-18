"use client"

// chakra ui imports
import {
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
      <Container paddingTop={[6, 12, 12]}>
        <Flex
          alignItems={["flex-start", "flex-start", "center"]}
          direction={["column-reverse", "column-reverse", "row"]}
          gap={[8, 6]}
          justify={"space-between"}>
          <Heading as="h1" width={340}>
            <VisuallyHidden>
              Throneless Tech
            </VisuallyHidden>
            <LogoWordmark color={color} />
          </Heading>
          <ColorModeButton />
        </Flex>
      </Container>
    </ClientOnly>
  )
}