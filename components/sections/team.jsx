"use client"

// chakra ui imports
import {
  Box,
  ClientOnly,
  Flex,
  List,
  Image,
  Text,
} from "@chakra-ui/react";

import {
  useColorModeValue
} from "@/components/ui/color-mode";

// fonts
import { funnel, geist, geistMono } from "@/app/fonts";

// components
import { Heading } from "@/components/ui/heading";
import { TeamCard } from "@/components/ui/teamCard";

export default function Team() {
  const textColor = useColorModeValue("black", "white");

  return (
    <Box>
      <Heading color={textColor}>
        Team Members
      </Heading>
      <List.Root listStyle="none">
        <List.Item marginTop={8}>
          <Flex alignItems="flex-start">
          <List.Indicator asChild marginTop={3}>
            <Image objectFit="contain" src="/assets/images/orb-light-2.png" width={[8, 8, 16]} />
          </List.Indicator>
          <TeamCard
            name="Harum"
            info="pronounced: ha-room, pronouns: they/them"
            about="Full-stack developer focused on JavaScript and Rust. Board experience with a reproductive health nonprofit and care work as an abortion doula."
            />
            </Flex>
        </List.Item>
        <List.Item marginTop={8}>
          <Flex alignItems="flex-start">
          <List.Indicator asChild marginTop={3}>
            <Image objectFit="contain" src="/assets/images/orb-light-2.png" width={[8, 8, 16]} />
          </List.Indicator>
          <TeamCard
            name="Josh"
            info="pronouns: they/them"
            about="Two decades in software, architecture, networks, and systems for social justice. Builds secure communication platforms for organizers and journalists."
            />
            </Flex>
        </List.Item>
        <List.Item marginTop={8}>
          <Flex alignItems="flex-start">
          <List.Indicator asChild marginTop={3}>
            <Image objectFit="contain" src="/assets/images/orb-light-2.png" width={[8, 8, 16]} />
          </List.Indicator>
          <TeamCard
            name="Morgan"
            info="pronouns: she/her"
            about="Project manager with two decades across construction, art, and education. Plans work from start to finish and clears blockers."
            />
            </Flex>
        </List.Item>
        <List.Item marginTop={8}>
          <Flex alignItems="flex-start">
          <List.Indicator asChild marginTop={3}>
            <Image objectFit="contain" src="/assets/images/orb-light-2.png" width={[8, 8, 16]} />
          </List.Indicator>
          <TeamCard
            name="Rae"
            info="no pronouns"
            about="Full-stack developer and activist with a multimedia background. Specializes in bringing designs to life with front-end and full-stack JavaScript."
            />
            </Flex>
        </List.Item>
      </List.Root>

    </Box>
  )
}