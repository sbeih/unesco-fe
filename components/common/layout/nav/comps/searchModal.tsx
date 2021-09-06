import React from "react";
import {
  Flex,
  useDisclosure,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@/icons/index";

export const SearchModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();

  return (
    <>
      <IconButton
        onClick={onOpen}
        variant="unstyled"
        aria-label=""
        width="fit-content"
        icon={
          <Flex mt={[10, 0]} justifyContent="center">
            <SearchIcon />
          </Flex>
        }
      />
      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"sm"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon />}
              />
              <Input type="text" />
            </InputGroup>
          </ModalHeader>
        </ModalContent>
      </Modal>
    </>
  );
};
