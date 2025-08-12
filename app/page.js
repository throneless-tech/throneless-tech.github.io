// fonts
import { funnel } from "@/app/fonts"

// chakra ui imports
import {
  Box,
  Container,
  Heading
} from "@chakra-ui/react"

export default function Home() {
  return (
    <Box>
      <Container>
        <Heading as="h1" className={funnel.className}>
          Throneless Tech
        </Heading>
      </Container>
    </Box>
  )
}