import {
  Box,
  HStack,
  IconButton,
  Text,
  VStack
} from "@chakra-ui/react";
import _ from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsReply } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";

const menuList = [
  { title: "حساب کاربری", icon: <IoPersonOutline />, link: "dashboard" },
  { title: "سوالات", icon: <IoPersonOutline />, link: "questions" },
  { title: "پاسخ ها", icon: <FaQuestion />, link: "answers" },
  { title: "دیدگاه ها", icon: <BsReply />, link: "comments" },
  { title: "ذخیره شده ها", icon: <BsReply />, link: "bookmarks" },
];

const RightSidebar = () => {
  const [activePage, setActivePage] = useState("");
  const router = useRouter();




  useEffect(() => {
    setActivePage(router.asPath);
  }, [router]);

  const getLastPathSegment = (path) => {
    const segments = path.split("/").filter(Boolean);
    return _.last(segments);
  };

  const handleClickLink = (link) => {
    router.push(link);
  };

  return (
    <VStack
      w={"100%"}
      alignItems={"center"}
      border={"1px"}
      borderRadius={"30px"}
      borderColor={"gray.200"}
      padding={"13px"}
      bg="linear-gradient(9.82deg, #006A71 -31.27%, #009875 98.14%)"

      height={'calc( 100vh - 70px )'}
    >
      <VStack
        w={"100%"}
        alignItems={"start"}
        padding={"0px"}
        height={"100%"}
        justifyContent={"space-between"}
      >
        <VStack w={"100%"}>
          {menuList?.map((item, index) => (
            <HStack
              height={'60px'}
              position={"relative"}
              cursor={"pointer"}
              onClick={(e) => handleClickLink(item?.link)}
              bgColor={
                getLastPathSegment(activePage) == item?.link
                  ? "#3DCC928C"
                  : "#F7F7F71A"
              }
              w={"100%"}
              borderRadius={"20px"}
              padding={'22px'}
              boxShadow={getLastPathSegment(activePage) === item?.link ? "0px 4px 7.2px 0px #0000001A" : "none"}
            >
              {
                <Box
                  w={"2px"}
                  height={"60px"}
                  bgColor={
                    getLastPathSegment(activePage) == item?.link
                      ? "#29CCCC"
                      : ""
                  }
                  right={"-21px"}
                  position={"absolute"}
                ></Box>
              }
              <IconButton
                icon={item?.icon}
                color={
                  getLastPathSegment(activePage) == item?.link
                    ? "white"
                    : "white"
                }
                fontSize={"20px"}
              />
              <Text
                fontWeight={"800"}
                color={
                  getLastPathSegment(activePage) == item?.link
                    ? "white"
                    : "white"
                }
                fontSize={"18px"}
              >
                {item?.title}
              </Text>
            </HStack>
          ))}
        </VStack>
        <HStack
          position={"relative"}
          cursor={"pointer"}
          // onClick={(e) => handleClickLink(item?.link)}
          w={"100%"}
          borderRadius={"10px"}
          bgColor={"#F7F7F71A"}
          justifyContent={"center"}
          gap={0}
        >
          <IconButton icon={<RxExit />} fontSize={"20px"} />
          <Text
            color={"white"}
            textAlign={"center"}
            fontWeight={"800"}
            fontSize={"10px"}
          >
            خروج از حساب
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default RightSidebar;
