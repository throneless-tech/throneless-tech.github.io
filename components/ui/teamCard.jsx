// fonts
import { funnel } from "@/app/fonts";

// chakra ui imports
import { Box, Flex, Text } from "@chakra-ui/react";

// components imports
import { Link } from "@/components/ui/link";

export const TeamCard = ({name, info, about}) => (
  <Flex flexDirection={["column", "column", "row"]} gap={[4, 4, 20]}>
    <Box minWidth={[30, 360]}>
      <Text className={funnel.className} fontSize="3xl" textDecoration="underline">
        {name}
      </Text>
      <Text>
        {info}
      </Text>
    </Box>
    <Text>{about}</Text>
  </Flex>
)