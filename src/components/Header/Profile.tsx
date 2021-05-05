import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";

interface ProfileProps {
  showProfileData: boolean,
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      { showProfileData && (
        <Box align="right" mr="4">
          <Text>Rellyson Douglas</Text>
          <Text color="gray.400" fontSize="small">rellysondouglas2015@gmail.com</Text>
        </Box>
      )}


      <Avatar name="Rellyson Douglas" src="https://github.com/rellyso.png" />
    </Flex>
  )
}