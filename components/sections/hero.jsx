"use client"

// chakra ui imports
import {
  Box,
  ClientOnly,
  Flex,
  Text,
} from "@chakra-ui/react";

import {
  useColorModeValue,
} from "@/components/ui/color-mode";

// fonts
import { funnel } from "@/app/fonts";

// components imports
import { Button } from "@/components/ui/button";

export default function Hero() {
  const textColor = useColorModeValue("black", "white");

  return (
    <ClientOnly>
      <Box>
        <Flex
          direction={["column", "column", "row"]}
          gap={24}
          justify="flex-start"
          maxW="breakpoint-xl"
        >
          <Text
            className={funnel.className}
            color={textColor}
            maxW={620}
            textStyle={["6xl", "7xl"]}
            textTransform="uppercase"
          >
            Worker-owned tech for social justice
          </Text>
          <Flex direction="column" gap={12}>
            <Text
              borderLeftColor="yellow.300"
              borderLeftStyle="solid"
              borderLeftWidth={4}
              paddingLeft={30}
              textStyle="3xl"
            >
              We build accessible software and deliver digital security training for movements and nonprofits.
            </Text>
            <Button
              as="a"
              href="mailto:team@throneless.tech"
            >
              Book a consultation
            </Button>
          </Flex>
        </Flex>
      </Box>
    </ClientOnly>
  )
}