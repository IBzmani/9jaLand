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
  useToast,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import React, { useState, useEffect } from "react";
import db from "../tasks.js";
import abi from "../abi.json";

export default function Lands() {
  const tasks = useLoaderData();
  const toast = useToast();

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: "0xc6e3f502d48EB58dFC381649e530776eC1e9C5c1",
    abi: abi,
    functionName: "buyProperty",
  });

  const [sending, setSending] = useState(0);
  const [show, setShow] = useState(getList());

  function Toast() {
    toast({
      title: "Purchase",
      description: "Success",
      duration: 10000,
      isClosable: true,
      position: "top",
      status: "success",
    });
  }

  function delist(id) {
    let sold = localStorage.getItem("sold");
    let item = "";
    if (sold) {
      item = sold + "," + id;
    } else {
      item = id;
    }
    localStorage.setItem("sold", item);
    setShow(getList());
  }

  function getList() {
    let sold = localStorage.getItem("sold");
    if (sold) {
      return sold.split(",");
    } else {
      return [];
    }
  }

  useEffect(() => {
    if (isSuccess) {
      Toast();
      delist(sending);
    }
  }, [isSuccess]);

  return (
    <SimpleGrid spacing={10} minChildWidth={300}>
      {tasks &&
        tasks.map((task) => {
          if (!show.includes(task.propertyId.toString())) {
            return (
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
            );
          }
        })}
    </SimpleGrid>
  );
}

export const tasksLoader = async () => {
  // const res = await fetch("http://localhost:3000/tasks");
  return db.tasks;
  // return res.json();
};
