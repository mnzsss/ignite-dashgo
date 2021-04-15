import { Box, Flex, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box>
        <Text textAlign="right">Gabriel Menezes</Text>
        <Text color="gray.300" fontSize="small">
          gabrielsmenezes99@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Gabriel Menezes"
        src="https://github.com/mnzsss.png"
        ml="4"
      />
    </Flex>
  )
}
