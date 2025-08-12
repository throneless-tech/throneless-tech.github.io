// fonts
import { funnel } from "@/app/fonts"

// chakra ui imports
import {
  Box,
  Container,
  Heading,
  Text
} from "@chakra-ui/react"

export default function Members() {
  return (
    <Box>
      <Container>
        <Heading as="h1" className={funnel.className}>
          Members
        </Heading>
        <Heading as="h2">
          Who we are
        </Heading>
        <Heading as="h3">
          🤠 Harum
        </Heading>
        <Text>
          (pronounced: ha-room, pronouns: they/them)
        </Text>
        <Text>
          is a full-stack software developer who’s excited to work on technology that envisions a more just world. They fell in love with software engineering as a user of an open-source Rails app, which streamlined the work of a reproductive health nonprofit where they serve on the board of directors. They’re usually working on writing better JavaScript and Rust. Previously, Harum has worked in bike shops, on bike trails, at a news startup, and as a public radio reporter. They’re also an abortion doula.
        </Text>
        <Heading as="h3">
          👀 Josh
        </Heading>
        <Text>
          (pronouns: they/them)
        </Text>
        <Text>
          has two decades of experience in software development, software architecture, network engineering, and systems administration for social justice. They develop community-oriented technology and secure communication platforms to enable the work of organizers, activists, and journalists globally.
        </Text>
        <Heading as="h3">
          ☕️ Morgan
        </Heading>
        <Text>
          (pronouns: she/her)
        </Text>
        <Text>
          is a project doula with two decades of project management experience in a variety of industries, from residential construction & historic preservation to fine art production & woodworking education. The throughline in her career has been solving the puzzle of space & time for each project: plotting the course of work from beginning to end, identifying & meeting milestones, & resolving challenges as they come up. She is here to support both the client & the developer to come to an elegant and timely solution to their projects.
        </Text>
        <Heading as="h3">
          🔊 Rae
        </Heading>
        <Text>
          (no pronouns, just Rae)
        </Text>
        <Text>
          is a full-stack web developer and activist. With a background in video production and audio engineering, Rae brings a multimedia perspective into Rae’s software engineering. Rae specializes in front-end engineering and bringing designs to life, especially including full-stack JavaScript projects. Rae codes, organizes with, and facilitates for, local organizers who are looking to strengthen their digital security and deescalation skills.
        </Text>
      </Container>
    </Box>
  )
}