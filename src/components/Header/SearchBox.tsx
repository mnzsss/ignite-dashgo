import { Flex, Input, Icon } from '@chakra-ui/react'
import { RiSearch2Line } from 'react-icons/ri'

export function SearchBox() {
  return (
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
  )
}
