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

export default function OurWork() {
  const textColor = useColorModeValue("black", "white");

  return (
    <Box>
      <Heading color={textColor}>
        Featured Work
      </Heading>
      <List.Root display="flex" flexDirection={["column", "row"]} flexWrap="wrap" listStyle="none">
        <List.Item marginRight={[0, 0, 12]} marginTop={8} maxW={["100%", "100%", 400]}>
          <WorkCard
            title="Bitpart"
            href="https://bitp.art"
            description="Bitpart is a one-to-many messaging tool that plugs into Signal. Server code is written in Rust, and the dashboard site is Next.js and Chakra UI. Website database is built on Prisma."
          />
        </List.Item>
        <List.Item marginRight={[0, 0, 12]} marginTop={8} maxW={["100%", "100%", 400]}>
          <WorkCard
            title="Tech Policy Press"
            href="https://techpolicy.press"
            description="A complete build of a website to explore the problems with Big Tech, and how governments can re-code it to  protect the public interest and democracy. Built on Next.js using  Material UI with a Content Management System built in Sanity.io. Design  by Superbloom (fka Simply Secure)."
          />
        </List.Item>
        <List.Item marginRight={[0, 0, 12]} marginTop={8} maxW={["100%", "100%", 400]}>
          <WorkCard
            title="Valley Abortion Group"
            href="https://vagclinic.com/"
            description="A website build for Valley Abortion Group. Built on Next.js using Chakra UI. Design by Design Choice."
          />
        </List.Item>
        <List.Item marginRight={[0, 0, 12]} marginTop={8} maxW={["100%", "100%", 400]}>
          <WorkCard
            title="PPEF NY"
            href="https://ppefny.org/"
            description="A complete rebuild of the website for  the Public Policy and Education Fund of New York. Built on Next.js using Material UI with a Content Management System built in Sanity.io. Design by Design Choice."
          />
        </List.Item>
        <List.Item marginRight={[0, 0, 12]} marginTop={8} maxW={["100%", "100%", 400]}>
          <WorkCard
            title="We Testify"
            href="https://wetestify.org/"
            description="A complete rebuild of the WeTestify website, duplicating their chosen design and moving them off SquareSpace and onto a Next.js site with a content management system in Sanity.io."
          />
        </List.Item>
        <List.Item marginRight={[0, 0, 12]} marginTop={8} maxW={["100%", "100%", 400]}>
          <WorkCard
            title="ReproJobs Jobs Board"
            href="https://jobs.reprojobs.org/"
            description="A jobs board built to integrate with the main site for ReproJobs, built custom as a semi-static site. Design by Design Choice. Project was sunset fall 2024."
          />
        </List.Item>
      </List.Root>

    </Box>
  )
}