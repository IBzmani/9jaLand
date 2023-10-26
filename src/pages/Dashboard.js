import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { useContractWrite } from "wagmi";
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
import db from "../tasks.js";
import abi from "../abi.json";
import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const tasks = useLoaderData();

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: "0xc6e3f502d48EB58dFC381649e530776eC1e9C5c1",
    abi: abi,
    functionName: "buyProperty",
  });
  const [sending, setSending] = useState(0);

  useEffect(() => {
    if (isSuccess) {
      alert("good");
    }
  }, [isSuccess]);

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
                <Button
                  onClick={() => {
                    write({ args: [task.propertyId] });
                    setSending(task.propertyId);
                  }}
                  variant="ghost"
                  leftIcon={<EditIcon />}
                >
                  {isLoading && sending == task.propertyId
                    ? "Sending.."
                    : "Purchase"}
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export const landsLoader = async () => {
  // const res = await fetch("http://localhost:3000/tasks");

  // return res.json();
  return db.tasks;
};
