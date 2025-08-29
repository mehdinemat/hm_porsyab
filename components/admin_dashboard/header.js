import {
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiBellAlert } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";

const Header = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const { t } = useTranslation();

  const handleClickSearch = () => { };
  const handleClickSemanticSearch = () => { };

  return (
    <HStack
      alignItems={"center"}
      w={"100%"}
      height={"100%"}
      justifyContent={"end"}
    >
      <InputGroup width={'260px'} height={'40px'} borderRadius={'10px'} bgColor={'#F4F4F4'}>
        <Input height={'100%'} placeholder="جستجو" color={'#006A71'} />
        <InputRightElement pointerEvents='none'>
          <IoSearch color="#006A71" fontSize={"20px"} />
        </InputRightElement>
      </InputGroup>
      <IconButton bgColor={'#F4F4F4'} height={'40px'} width={'40px'} borderRadius={'10px'}
        icon={<LuPencil fontSize={"20px"} color={'#006A71'} />}
      />
      <IconButton bgColor={'#F4F4F4'} height={'40px'} width={'40px'} borderRadius={'10px'}
        icon={<HiBellAlert fontSize={"20px"} color={'#006A71'} />}
      />
      <IconButton bgColor={'#F4F4F4'} height={'40px'} width={'40px'} borderRadius={'10px'}
        icon={<HiOutlineMenuAlt3 fontSize={"20px"} color={'#006A71'} />}
      />
    </HStack>
  );
};

export default Header;
