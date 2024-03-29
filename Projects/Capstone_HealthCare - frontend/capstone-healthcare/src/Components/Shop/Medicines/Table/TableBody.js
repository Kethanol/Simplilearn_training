import {
  Tbody,
  Tr,
  Td,
  FormControl,
  FormErrorMessage,
  Input,
  Tooltip,
  Icon,
  IconButton,
} from "@chakra-ui/react";

import { renderEditableBackgroundProps } from "../../../../Common/Functions/misc";

import { DeleteIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { MdAddShoppingCart } from "react-icons/md";

function TableBody({
  medicineData,
  handleRowChange,
  isAdmin,
  deleteMed,
  updateMed,
  dirtyRows,
  invalidRows,
  addMedicineToCart,
}) {
  return (
    <Tbody>
      {medicineData.map((medicine, index) => {
        return (
          <Tr key={medicine.id} onChange={(e) => handleRowChange(e, index)}>
            <Td fontSize={"2rem"}>
              <FormControl isInvalid={medicine.name === ""}>
                <FormErrorMessage fontSize={"1.3rem"} marginBottom={".5rem"}>
                  Can not be empty
                </FormErrorMessage>
                <Tooltip label={medicine.name} fontSize={"1.5rem"}>
                  <Input
                    defaultValue={medicine.name}
                    name={"name"}
                    border={"none"}
                    outline={"none"}
                    fontSize={"2rem"}
                    padding={"1.5rem"}
                    background={"inherit"}
                    textOverflow={"ellipsis"}
                    type={"text"}
                  ></Input>
                </Tooltip>
              </FormControl>
            </Td>
            <Td fontSize={"2rem"}>
              <FormControl isInvalid={medicine.description === ""}>
                <FormErrorMessage fontSize={"1.3rem"} marginBottom={".5rem"}>
                  Can not be empty
                </FormErrorMessage>
                <Tooltip label={medicine.description} fontSize={"1.5rem"}>
                  <Input
                    defaultValue={medicine.description}
                    name={"description"}
                    border={"none"}
                    outline={"none"}
                    fontSize={"2rem"}
                    padding={"1.5rem"}
                    background={"inherit"}
                    type={"text"}
                    textOverflow={"ellipsis"}
                  ></Input>
                </Tooltip>
              </FormControl>
            </Td>
            <Td fontSize={"2rem"}>
              <FormControl isInvalid={medicine.schemaOfTreatment === ""}>
                <FormErrorMessage fontSize={"1.3rem"} marginBottom={".5rem"}>
                  Can not be empty
                </FormErrorMessage>
                <Tooltip label={medicine.schemaOfTreatment} fontSize={"1.5rem"}>
                  <Input
                    defaultValue={medicine.schemaOfTreatment}
                    name={"schemaOfTreatment"}
                    border={"none"}
                    outline={"none"}
                    fontSize={"2rem"}
                    padding={"1.5rem"}
                    background={"inherit"}
                    type={"text"}
                    textOverflow={"ellipsis"}
                  ></Input>
                </Tooltip>
              </FormControl>
            </Td>
            <Td fontSize={"2rem"}>
              <FormControl isInvalid={medicine.minimumAge === ""}>
                <FormErrorMessage fontSize={"1.3rem"} marginBottom={".5rem"}>
                  Can not be empty
                </FormErrorMessage>
                <Input
                  defaultValue={medicine.minimumAge}
                  name={"minimumAge"}
                  border={"none"}
                  outline={"none"}
                  fontSize={"2rem"}
                  padding={"1.5rem"}
                  background={"inherit"}
                  type={"number"}
                  textAlign={"right"}
                ></Input>
              </FormControl>
            </Td>
            <Td fontSize={"2rem"}>
              <FormControl isInvalid={medicine.price === ""}>
                <FormErrorMessage fontSize={"1.3rem"} marginBottom={".5rem"}>
                  Can not be empty
                </FormErrorMessage>
                <Input
                  defaultValue={medicine.price}
                  name={"price"}
                  border={"none"}
                  outline={"none"}
                  fontSize={"2rem"}
                  padding={"1.5rem"}
                  background={"inherit"}
                  type={"number"}
                  textAlign={"right"}
                ></Input>
              </FormControl>
            </Td>
            {isAdmin && (
              <>
                <Td fontSize={0}>
                  <Tooltip label={"Update medicine"}>
                    <IconButton
                      disabled={
                        !dirtyRows[index] ||
                        medicine.id === 0 ||
                        invalidRows[index]
                      }
                      {...renderEditableBackgroundProps(dirtyRows, index)}
                      background={"transparent"}
                      icon={
                        <TriangleUpIcon
                          boxSize={"10"}
                          onClick={() => updateMed(index)}
                        ></TriangleUpIcon>
                      }
                    />
                  </Tooltip>
                </Td>
                <Td fontSize={0}>
                  <Tooltip label={"Delete medicine"}>
                    <IconButton
                      background={"transparent"}
                      icon={
                        <DeleteIcon
                          boxSize={"10"}
                          onClick={() => deleteMed(index)}
                        ></DeleteIcon>
                      }
                    />
                  </Tooltip>
                </Td>
              </>
            )}
            {!isAdmin && (
              <Td fontSize={0}>
                <Tooltip label={"Add to cart"}>
                  <IconButton
                    background={"transparent"}
                    icon={
                      <Icon
                        boxSize={"10"}
                        as={MdAddShoppingCart}
                        onClick={() => addMedicineToCart(medicine)}
                      ></Icon>
                    }
                  />
                </Tooltip>
              </Td>
            )}
          </Tr>
        );
      })}
    </Tbody>
  );
}

export default TableBody;
