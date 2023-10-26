import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
  Select,
} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  // const [zoning, setZoning] = useState("Commercial");

  // function handleZoning(e) {
  //   const zone = e.target.value;
  //   setZoning(zone);
  // }

  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Address:</FormLabel>
          <Input type="text" name="address" />
          <FormHelperText>Enter land address.</FormHelperText>
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Legal Description:</FormLabel>
          <Textarea
            placeholder="Enter a detailed legal description of the land..."
            name="description"
          />
        </FormControl>
        <FormControl mb="40px">
          <FormLabel>Land use Restriction::</FormLabel>
          <Textarea
            placeholder="Enter a detailed legal description of the land..."
            name="description"
          />
        </FormControl>
        <FormControl mb="40px">
          <FormLabel>Size:</FormLabel>
          <Input type="number" name="size" />
          <FormHelperText>Square Meter.</FormHelperText>
        </FormControl>
        <FormControl mb="40px">
          <FormLabel>Zoning:</FormLabel>
          <Select
            // onChange={(event) => handleZoning(event)}
            placeholder="Select option"
          >
            <option value="Commercial">Commercial</option>
            <option value="Residential">Residential</option>
            <option value="Industrial">Industrial</option>
          </Select>
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Topography:</FormLabel>
          <Textarea placeholder="Enter land topography..." name="description" />
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Proce:</FormLabel>
          <Input type="number" name="size" />
          <FormHelperText>Naira.</FormHelperText>
        </FormControl>

        <Button type="submit">submit</Button>
      </Form>
    </Box>
  );
}

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };

  console.log(task);

  return redirect("/");
};
