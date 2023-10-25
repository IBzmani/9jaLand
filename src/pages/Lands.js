import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Divider,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

import React from "react";

export default function Lands() {
  const tasks = useLoaderData();
  return (
    <SimpleGrid spacing={10} minChildWidth={300}>
      {tasks &&
        tasks.map((task) => (
          <Card
            key={task.propertyId}
            borderTop="8px"
            borderColor="purple.400"
            bg="white"
          >
            <CardHeader color="gray.700">
              <Flex gap={5}>
                <Box w="50px" h="50px">
                  <Avatar name={task.author} src={task.maps} />
                </Box>
                <Box>
                  <Heading as="h3" size="sm">
                    {task.address}
                  </Heading>
                  <Text>price {task.price}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody color="gray.500">
              <Text>{task.legalDescription}</Text>
            </CardBody>

            <Divider borderColor="gray.200" />

            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  View
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Purchase
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export const tasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");

  return res.json();
};