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
import { WorkCard } from "@/components/ui/workCard";

export default function About() {
  const textColor = useColorModeValue("black", "white");

  return (
    <Box>
      <Heading color={textColor}>
        Featured Work
      </Heading>
      <WorkCard
        title="Bitpart"
      />
    </Box>
  )
}