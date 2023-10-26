import { useState } from "react";
import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon,
  EditIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  List,
  ListItem,
  ListIcon,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Divider,
  Button,
  Avatar,
  Flex,
  Box,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import db from "../tasks.js";

export default function Profile() {
  const [show, setShow] = useState(getList());

  const tasks = db.tasks;

  function getList() {
    let sold = localStorage.getItem("sold");
    if (sold) {
      return sold.split(",");
    } else {
      return [];
    }
  }
  return (
    <Tabs mt="40px" p="20px" variant="enclosed" colorScheme="purple">
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>
          Transaction History
        </Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>
          Owned Property
        </Tab>
      </TabList>

      <TabPanels py="10px">
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            {tasks &&
              tasks.map((task) => {
                if (show.includes(task.propertyId.toString())) {
                  return (
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="teal.400" />
                      Just purchased {task.address}
                    </ListItem>
                  );
                }
              })}
          </List>
        </TabPanel>
        <TabPanel>
          <SimpleGrid spacing={10} minChildWidth={300}>
            {tasks &&
              tasks.map((task) => {
                if (show.includes(task.propertyId.toString())) {
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
                          <Button variant="ghost" leftIcon={<EditIcon />}>
                            List
                          </Button>
                        </HStack>
                      </CardFooter>
                    </Card>
                  );
                }
              })}
          </SimpleGrid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
