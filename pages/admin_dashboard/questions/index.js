import Header from "@/components/admin_dashboard/header";
import QuestionAnswer from "@/components/admin_dashboard/questionAnswer";
import QuestionCard from "@/components/admin_dashboard/questionCard";
import QuestionComment from "@/components/admin_dashboard/questionComment";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Select,
  Stack,
  Text,
  Textarea,
  VStack
} from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import { IoAdd, IoArrowBack, IoClose } from "react-icons/io5";
import RightSidebar from "../rightSidebar";

const Index = () => {
  const { t } = useTranslation();

  const [questionSelected, setQuestionSelected] = useState(false)

  const handleClickQuestionCard = (item) => {
    setQuestionSelected(!questionSelected)
  }

  return (
    // <MainLayout>
    <Box
      w="100%"
      alignItems={"center"}
      justifyContent={"center"}
      // maxW="container.xl"
      mx="34px"
      // p={{ base: "20px", md: "60px" }}
      my={"34px"}
    // mt={{ base: "40px", md: "60px" }}
    >
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(8, 1fr)" }}
        w={"100%"}
      >
        <GridItem colSpan={1} display={{ base: "none", md: "flex" }}>
          <RightSidebar />
        </GridItem>
        <GridItem as={VStack} gap={"8px"} colSpan={7} pl={"50px"} mr={"8px"}>
          <Box
            w={"100%"}
            height={"85px"}
            borderRadius={"15px"}
          >
            <Header />
          </Box>
          <Box
            w={"100%"}
            height={"100%"}
            borderRadius={"15px"}
          >
            <Grid templateColumns="repeat(7, 1fr)" gap={6} h={"100%"} w={'100%'}>
              <GridItem as={Stack} alignItems={'end'} bgColor={"white"} w={"100%"} height={"100%"} colSpan={5} borderRadius={"15px"} >
                <Box as={VStack} bgColor={'#F8F8F8'} w={'90%'} alignItems={'start'} justifyContent={'start'} gap={'20px'} height={'100%'} borderRadius={'30px'} padding={'22px'} position={'relative'}>
                  {<QuestionCard onClick={handleClickQuestionCard} selected={questionSelected} />}
                  {!questionSelected && <QuestionCard onClick={handleClickQuestionCard} />}
                  {!questionSelected && <QuestionCard onClick={handleClickQuestionCard} />}
                  {!questionSelected && <QuestionCard onClick={handleClickQuestionCard} />}
                  {!questionSelected && <QuestionCard onClick={handleClickQuestionCard} />}

                  {questionSelected && <HStack gap={'30px'} height={'calc( 100% - 150px )'} alignItems={'start'} overflowY={'hidden'}>
                    <VStack height={'100%'} overflowY={'auto'} padding={'18px'}>
                      <HStack w={'100%'} justifyContent={'start'}>
                        <Text fontSize={'14px'} color={'#00464B'} fontWeight={'bold'}>پاسخ ها</Text>
                        <Text fontSize={'8px'} color={'#00464B'}>12 پاسخ</Text>
                      </HStack>
                      <QuestionAnswer />
                      <QuestionAnswer />
                      <QuestionAnswer />
                      <QuestionAnswer />

                    </VStack>
                    <VStack height={'100%'} overflowY={'auto'} padding={'18px'}>
                      <HStack w={'100%'} justifyContent={'start'}>
                        <Text fontSize={'14px'} color={'#00464B'} fontWeight={'bold'}>دیدگاه ها</Text>
                        <Text fontSize={'8px'} color={'#00464B'}>12 دیدگاه</Text>
                      </HStack>
                      <QuestionComment />
                      <QuestionComment />
                      <QuestionComment />
                      <QuestionComment />

                    </VStack>
                  </HStack>}

                </Box>
              </GridItem>

              <GridItem bgColor={"#F9F9F9"} w={"100%"} height={"100%"} colSpan={2} borderRadius={"30px"} padding={'15px'}>
                <Box as={VStack} bgColor={'white'} padding={'12px'} borderRadius={'14px'} height={'100%'} justifyContent={'space-between'}>
                  <HStack w={'100%'} alignItems={'start'}>
                    <IoAdd />
                    <Text fontSize={'12px'} fontWeight={'extrabold'} color={'#006A71'}>افزودن سوال</Text>
                  </HStack>
                  <Box borderRadius={'7px'} bgColor={'#F3F3F3'} px={'11px'} py={'6px'} height={'27px'} w={'100%'} as={HStack} justifyContent={'space-between'}>
                    <Text fontSize={'10px'} color={'#006A71'} fontWeight={'bold'}>حدیث</Text>
                    <IoIosArrowDown color="#006A71" />
                  </Box>
                  <Box borderRadius={'7px'} bgColor={'#F3F3F3'} px={'11px'} py={'6px'} height={'27px'} w={'100%'} as={HStack} justifyContent={'space-between'}>
                    <Text fontSize={'10px'} color={'#006A71'} fontWeight={'bold'}>منبع و سند حدیث</Text>
                    <IoIosArrowDown color="#006A71" />
                  </Box>
                  <VStack borderRadius={'7px'} px={'11px'} py={'6px'} w={'100%'} alignItems={'start'}>
                    <Text fontSize={'10px'} color={'#006A71'} fontWeight={'bold'}>متن سوال</Text>
                    <Textarea height={'100px'} />
                  </VStack>
                  <VStack borderRadius={'7px'} px={'11px'} py={'6px'} w={'100%'} alignItems={'start'}>
                    <Text fontSize={'10px'} color={'#006A71'} fontWeight={'bold'}>انتخاب مراجع</Text>
                    <Select>
                      <option></option>
                    </Select>
                  </VStack>
                  <VStack borderRadius={'7px'} px={'11px'} py={'6px'} w={'100%'} alignItems={'start'}>
                    <Text fontSize={'10px'} color={'#006A71'} fontWeight={'bold'}>انتخاب واژگان کلیدی</Text>
                    <Select>
                      <option></option>
                    </Select>
                  </VStack>
                  <VStack w={'100%'}>
                    <Button leftIcon={<IoArrowBack />} bgColor={'#006A71'} w={'100%'} height={'33px'}>ثبت و ادامه</Button>
                    <Button leftIcon={<IoClose />} w={'100%'} height={'33px'} variant={'ghost'} color={'red'}>حذف این سوال</Button>
                  </VStack>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </GridItem>
      </Grid>
    </Box>
    // </MainLayout>
  );
};

export default Index;
