import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Checkbox,
  Text
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header, Sidebar, Pagination } from '@components'

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading fontWeight="normal" size="lg">
              Usuários
            </Heading>

            <Button
              as="a"
              href="/create"
              size="sm"
              fontSize="small"
              colorScheme="blue"
              leftIcon={<Icon as={RiAddLine} fontSize="md" />}
            >
              Criar Novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" w="8">
                  <Checkbox colorScheme="blue" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de Cadastro</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="blue" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gabriel Menezes</Text>
                    <Text fontSize="small" color="gray.300">
                      gabrielsmenezes99@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>04 de Abril de 2021</Td>
                <Td>
                  <Button
                    size="sm"
                    fontSize="small"
                    colorScheme="teal"
                    leftIcon={<Icon as={RiPencilLine} fontSize="md" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="blue" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gabriel Menezes</Text>
                    <Text fontSize="small" color="gray.300">
                      gabrielsmenezes99@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>04 de Abril de 2021</Td>
                <Td>
                  <Button
                    size="sm"
                    fontSize="small"
                    colorScheme="teal"
                    leftIcon={<Icon as={RiPencilLine} fontSize="md" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="blue" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gabriel Menezes</Text>
                    <Text fontSize="small" color="gray.300">
                      gabrielsmenezes99@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>04 de Abril de 2021</Td>
                <Td>
                  <Button
                    size="sm"
                    fontSize="small"
                    colorScheme="teal"
                    leftIcon={<Icon as={RiPencilLine} fontSize="md" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
