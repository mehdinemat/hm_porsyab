import Header from "@/components/admin_dashboard/header";
import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Divider,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Progress,
  Select,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { TiInputChecked } from "react-icons/ti";
import RightSidebar from "../rightSidebar";

const Index = () => {
  const { t } = useTranslation();

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
                <Box bgColor={'#F8F8F8'} w={'90%'} height={'166px'} borderRadius={'30px'} padding={'22px'} position={'relative'}>

                  <HStack justifyContent={'space-between'} mr={'50px'} gap={'40px'}>
                    <VStack alignItems={'start'}>
                      <HStack>
                        <IconButton />
                        <Text color={'#006A71'} fontSize={'30px'} fontWeight={'extrabold'}>محمد محمدی</Text>
                      </HStack>
                      <Text fontSize={'16px'} color={'#00464B'}>mohammadi@gmail.com</Text>
                    </VStack>
                    <Divider orientation="vertical" height={'90px'} />
                    <Box w={'500px'} >
                      <HStack w={'100%'} justifyContent={'space-between'}>
                        <Text color={'#006A71'}>سطح کاربری</Text>
                        <Text color={'#B7B7B7'}>20000</Text>
                      </HStack>
                      <Progress colorScheme='green' size='sm' value={20} borderRadius={'10px'} my={'10px'} />
                      <HStack w={'100%'} justifyContent={'space-between'}>
                        <Text color={'#B7B7B7'}>10000</Text>
                        <Text color={'#00D2A1'}>15993</Text>
                        <Text color={'#B7B7B7'}>20000</Text>
                      </HStack>
                    </Box>
                    <HStack gap={'22px'}>
                      <Box as={VStack} justifyContent={'space-between'} height={'123px'} width={'108px'} bgColor={'#FFFFFF'} borderRadius={'20px'} padding={'24px'}>
                        <Text width={'100%'} textAlign={'center'} fontSize={'30px'} fontWeight={'extrabold'} color={'#006A71'}>123</Text>
                        <Text width={'100%'} textAlign={'center'} fontSize={'10px'} color={'#006A71'}>دنبال کننده‌ها</Text>
                      </Box>
                      <Box as={VStack} justifyContent={'space-between'} height={'123px'} width={'108px'} bgColor={'#FFFFFF'} borderRadius={'20px'} padding={'24px'}>
                        <Text width={'100%'} textAlign={'center'} fontSize={'30px'} fontWeight={'extrabold'} color={'#006A71'}>123</Text>
                        <Text width={'100%'} textAlign={'center'} fontSize={'10px'} color={'#006A71'}>دنبال شونده‌ها</Text>
                      </Box>
                    </HStack>
                  </HStack>
                </Box>
              </GridItem>

              <GridItem as={VStack} bgColor={"#F9F9F9"} w={"100%"} height={"100%"} colSpan={2} borderRadius={"30px"} padding={'15px'}>
                <HStack w={'100%'} justifyContent={'space-between'}>
                  <Text fontSize={'30px'} color={'#00464B'} fontWeight={'extrabold'}>سوالات من</Text>
                  <HStack w={'max-content'}>
                    <Text fontSize={'12px'} color={'#006A71'} w={'max-content'}>مرتبط سازی بر اساس</Text>
                    <Select w={'130px'} h={'32px'} bgColor={'white'} border={'none'} borderRadius={'13px'} color={'#006A71'} fontSize={'10px'} boxShadow={`
        0px 1px 1px 0px #00464B1A,
        0px 3px 3px 0px #00464B17,
        0px 6px 4px 0px #00464B0D,
        0px 10px 4px 0px #00464B03,
        0px 16px 5px 0px #00464B00
      `}>
                      <option>سوالات بدون پاسخ</option>
                      <option></option>
                      <option></option>
                    </Select>
                  </HStack>
                </HStack>
                <Box as={VStack} bgColor={'white'} w={'100%'} padding={'10px'} borderRadius={'30px'} gap={'15px'}>
                  <HStack w={'100%'} justifyContent={'space-between'}>
                    <HStack gap={'15px'}>
                      <HStack>
                        <TiInputChecked />
                        <Text>3 پسند</Text>
                      </HStack>
                      <HStack>
                        <IoEyeOutline />
                        <Text>87 بازدید</Text>
                      </HStack>
                      <HStack>
                        <HiOutlineChatBubbleOvalLeftEllipsis />
                        <Text>2 جواب</Text>
                      </HStack>
                    </HStack>
                    <HStack>
                      <Text>پاسخ ۲۱ ساعت قبل</Text>
                      <AvatarGroup size='md' max={2}>
                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                      </AvatarGroup>
                    </HStack>
                  </HStack>
                  <Box borderRadius={'15px'} bgColor={'#F5F5F5'} padding={'12px'}>
                    <Text fontSize={'18px'}>آیا می‌توان نذر کرد که فطریه را به زلزله زده‌گان داد؟ اگر نتوانیم آن را انجام دهیم، آیا می‌توان فطریه را به یک بدهکار ورشکسته داد؟</Text>
                  </Box>
                  <HStack w={'100%'} alignItems={'start'}>
                    <Badge bgColor='#E6F1F1' color={'#009875'} borderRadius={'5px'} padding={'5px'}>خداشناسی</Badge>
                    <Badge bgColor='#E6F1F1' color={'#009875'} borderRadius={'5px'} padding={'5px'}>خداشناسی</Badge>
                    <Badge bgColor='#E6F1F1' color={'#009875'} borderRadius={'5px'} padding={'5px'}>خداشناسی</Badge>
                    <Badge bgColor='#E6F1F1' color={'#009875'} borderRadius={'5px'} padding={'5px'}>خداشناسی</Badge>
                  </HStack>
                  <HStack w={'100%'} alignItems={'start'}>
                    <HStack>
                      <Avatar borderRadius={'10px'} height={'26px'} w={'26px'} />
                      <Text color={'#999999'}>اسلام کوئست</Text>
                    </HStack>
                    <HStack>
                      <Avatar borderRadius={'10px'} height={'26px'} w={'26px'} />
                      <Text color={'#999999'}>آیت‌الله خامنه‌ای</Text>
                    </HStack>
                  </HStack>
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
