import {
  Avatar,
  Badge,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import moment from "moment-jalaali";
import { useRouter } from "next/router";
import { FiMoreVertical } from "react-icons/fi";
import { GiBigDiamondRing } from "react-icons/gi";
import { IoCheckmark, IoEyeOutline } from "react-icons/io5";

const QuestionCard = ({ data, t, type = "question" }) => {

  const router = useRouter();

  const handleQuestionRouter = (id, openInNewTab = false) => {
    const url = `/question_answer/${id}`;
    if (openInNewTab) {
      window.open(url, "_blank");
    } else {
      router.push(url);
    }
  };

  const handleClickTags = (item) => {
    router.push(`/questions/tag/${item?.id}/${item?.name}`);
  };

  return (
    <HStack
      w={"100%"}
      alignItems={"start"}
      borderBottom={"1px solid #E2E8F0"}
      mb={"10px"}
      pb={"20px"}
      gap={"20px"}
      position="relative"
      cursor={'pointer'}
      zIndex={9}
    >
      {/* Left stats */}
      <VStack w={"150px"} height={'100%'} alignItems={"start"} onClick={e => handleQuestionRouter(
        type === "question" ? data?.id : data?.question_id,
        false
      )}>
        <HStack color={"gray.600"}>
          <GiBigDiamondRing fontSize={"20px"} />
          <Text fontSize={"16px"}>{data?.like_count} {t("like")}</Text>
        </HStack>
        <HStack color={"gray.600"}>
          <IoCheckmark fontSize={"20px"} />
          <Text fontSize={"16px"}>{data?.answer_count} {t("answer")}</Text>
        </HStack>
        <HStack color={"gray.600"}>
          <IoEyeOutline fontSize={"20px"} />
          <Text fontSize={"16px"}>{data?.view_count} {t("view")}</Text>
        </HStack>
      </VStack>

      {/* Content section */}
      <VStack w={"100%"} alignItems={"start"} gap={"20px"} position="relative" onClick={e => handleQuestionRouter(
        type === "question" ? data?.id : data?.question_id,
        false
      )}>
        <HStack w="full" justifyContent="space-between" alignItems={'start'}>
          <Text
            fontSize={"18px"}
            w="full"
            whiteSpace="normal"
            lineHeight={"taller"}
            textAlign={"justify"}

            cursor={'pointer'}
          >
            {data?.content}
          </Text>

          {/* More menu button */}

        </HStack>

        {/* Tags */}
        <HStack>
          {data?.tags?.map((item, index) => (
            <Badge
              key={index}
              onClick={() => handleClickTags(item)}
              _hover={{ bgColor: "#29cccc38", color: "#1a7c7c" }}
              transition={".3s"}
              color="#16A6A6"
              bgColor="#29CCCC1A"
              height="26px"
              fontSize={"14px"}
              fontWeight={"100"}
              px="8px"
              cursor="pointer"
            >
              {item?.name}
            </Badge>
          ))}
        </HStack>

        {/* Author + time */}
        <HStack w={"100%"} justifyContent={"space-between"}>
          {data?.source && (
            <HStack>
              <Avatar size={"sm"} />
              <Text color={"gray.700"}>{data?.source}</Text>
            </HStack>
          )}
          <Text color={"gray.400"}>
            {moment(data?.created_at).format("hh:mm:ss jYYYY/jMM/jDD")}
          </Text>
        </HStack>
      </VStack >
      <Menu >
        <MenuButton
          zIndex={9999}
          as={IconButton}
          icon={<FiMoreVertical />}
          size="sm"
          variant="ghost"
          aria-label="More options"
        />
        <MenuList>
          <MenuItem
            onClick={() =>
              handleQuestionRouter(
                type === "question" ? data?.id : data?.question_id,
                false
              )
            }
          >
            {t("open_in_same_page")}
          </MenuItem>
          <MenuItem
            onClick={() =>
              handleQuestionRouter(
                type === "question" ? data?.id : data?.question_id,
                true
              )
            }
          >
            {t("open_in_new_tab")}
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack >
  );
};

export default QuestionCard;
