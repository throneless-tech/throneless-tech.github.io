// fonts
import { funnel } from "@/app/fonts";

// chakra ui imports
import { Box, Text } from "@chakra-ui/react";

// components imports
import { Link } from "@/components/ui/link";

export const WorkCard = ({description, href, title}) => (
  <Box>
    <Link className={funnel.className} fontSize="3xl" href={href}>
      {title}
    </Link>
    <Text marginLeft={4}>{description}</Text>
  </Box>
)