import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import {
  RiNotificationLine,
  RiSearch2Line,
  RiUserAddLine
} from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mt="4"
      align="center"
      px="6"
      mx="auto"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" color="blue.500" ml="1">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxW={400}
        align="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          name=""
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400' }}
        />

        <Icon as={RiSearch2Line} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={2}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

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
      </Flex>
    </Flex>
  )
}
