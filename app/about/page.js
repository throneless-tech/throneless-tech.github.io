// fonts
import { funnel } from "@/app/fonts"

// chakra ui imports
import {
  Box,
  Container,
  Heading,
  Text
} from "@chakra-ui/react"

export default function About() {
  return (
    <Box>
      <Container>
        <Heading as="h1" className={funnel.className}>
          About
        </Heading>
        <Heading as="h2">
          About us
        </Heading>
        <Text>
          Throneless Tech is a technology worker-cooperative based in Washington, DC. Throneless specializes in building technology and providing digital security trainings for social justice oriented community organizations, activist groups, and non-profits.
        </Text>
        <Text>
          Throneless cooperators are activists and organizers who’ve done work on a variety of issues, including reproductive justice, food justice, gender parity, racial equity and internet freedom. We care as deeply about building responsible, accessible software and websites as we do about the issues and causes we’re building for.
        </Text>
        <Text>
          As activists and organizers, Throneless cooperators have experience in all project phases, including collaboration, discovery, revising, and building. We pride ourselves on complete, accessible, responsive work that is long lasting and durable for causes we believe in. We’ll work with you to create the right look and feel for your site or app, valuing your knowledge of your cause and brand with our knowledge of design and code. We're also skilled facilitators, taking you through the best practices of digital security in a clear and easy to digest way.
        </Text>
        <Heading as="h2">
          Mission
        </Heading>
        <Text>
          Throneless Tech is a queer, values-driven worker cooperative. We are humans first, worker-owners second. We strive to build technology with, not just for, our communities. We are here for abolition and liberation, and struggle against racist colonial, imperial, and capitalist systems in our work. We are accountable to each other; we are not cops to each other. We are laboring for a future where that’s true for all, so we work on projects designed with this mission in mind.
        </Text>
      </Container>
    </Box>
  )
}