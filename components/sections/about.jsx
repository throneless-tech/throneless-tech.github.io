"use client"

// chakra ui imports
import {
  Box,
  ClientOnly,
  Flex,
  List,
  Text,
} from "@chakra-ui/react";

import {
  useColorModeValue
} from "@/components/ui/color-mode";

// fonts
import { funnel, geist, geistMono } from "@/app/fonts";

// components
import { Heading } from "@/components/ui/heading";

export default function About() {
  const textColor = useColorModeValue("black", "white");

  return (
    <Flex
      color={textColor}
      direction={["column", "column", "column", "column", "row"]}
      gap={[12, 20, 24]}
    >
      <Box maxW={["100%", "100%", "100%", "100%", 400]}>
        <Heading color={textColor}>
          Who we serve
        </Heading>
        <Text fontSize="2xl" marginTop={4}>
          We work with community organizations, activist groups and nonprofits in Washington, DC and beyond.
        </Text>
        <Text fontSize="2xl" marginTop={4}>
          Together we launch durable websites and tools, improve digital security practices, and support teams to run them well.
        </Text>
      </Box>
      <Box>
        <Heading color={textColor}>
          What we do
        </Heading>
        <List.Root listStyle="none" marginTop={4}>
          <List.Item>
            <Flex
              direction={["column", "column", "column", "row"]}
              gap={6}
            >
              <Text
                className={funnel.className}
                fontSize="2xl"
                minWidth={360}
              >
                Software and websites
              </Text>
              <Text>
                We design and build sites and apps on open technologies. We deliver clean code, accessible interfaces, and a simple CMS so your team can publish with confidence.
              </Text>
            </Flex>
          </List.Item>
          <List.Item marginTop={8}>
            <Flex
              direction={["column", "column", "column", "row"]}
              gap={6}
            >
              <Text
                className={funnel.className}
                fontSize="2xl"
                minWidth={360}
              >
                Digital security training
              </Text>
              <Text>
                We run practical, hands-on workshops for staff and volunteers. Topics include threat modeling, secure communication, account hygiene, device hardening, and safer collaboration.
              </Text>
            </Flex>
          </List.Item>
          <List.Item marginTop={8}>
            <Flex
              direction={["column", "column", "column", "row"]}
              gap={6}
            >
              <Text
                className={funnel.className}
                fontSize="2xl"
                minWidth={360}
              >
                Advisory and support
              </Text>
              <Text>
                We help scope the right path. Discovery, roadmaps, usability reviews, code checks, and ongoing maintenance to keep things stable.
              </Text>
            </Flex>
          </List.Item>
        </List.Root>
      </Box>
    </Flex>
  )
}