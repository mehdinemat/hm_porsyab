import Header from "@/components/admin_dashboard/header";
import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Progress,
  Select,
  Spinner,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { IoCheckmark, IoEyeOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
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
            <Grid templateColumns="repeat(4, 1fr)" templateRows="repeat(4, 1fr)" gap={6} h={"100%"} w={'100%'}>
              <GridItem as={Stack} alignItems={'end'} bgColor={"white"} w={"100%"} height={"100%"} colSpan={4} borderRadius={"15px"} >
                <Box bgColor={'#F8F8F8'} w={'90%'} height={'166px'} borderRadius={'30px'} padding={'22px'} position={'relative'}>
                  <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9us0MxB35Wv3z03TJFrxhub-WyxqpBKAsjQ&s'} w={'200px'} h={'200px'} position={'absolute'} right={'-150px'} top={'-20px'} borderRadius={'30px'} />
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

              <GridItem as={VStack} bgColor={"#F9F9F9"} w={"100%"} height={"100%"} colSpan={2} rowSpan={3} borderRadius={"30px"} padding={'15px'}>
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
              <GridItem as={Grid} colSpan={2} rowSpan={3} templateColumns="repeat(5, 1fr)" templateRows="repeat(4, 1fr)" gap={6} h={"100%"} w={'100%'}>
                <GridItem as={VStack} bgColor={"#E6F1F1"} w={"100%"} height={"100%"} colSpan={5} rowSpan={2} borderRadius={"30px"} padding={'15px'}>
                  <HStack w={'100%'} justifyContent={'space-between'}>
                    <Text fontSize={'30px'} color={'#00464B'} fontWeight={'extrabold'}>فعالیت ها</Text>
                    <Text fontSize={'13px'} color={'#006A71'}>2 سال و 4 ماه فعالیت</Text>
                  </HStack>
                  <HStack w={'100%'} justifyContent={'space-between'}>
                    <Box as={VStack} alignItems={'start'} justifyContent={'space-between'} bgColor={'white'} padding={'12px'} height={'189px'} width={'200px'} borderRadius={'15px'} boxShadow={`
        0px 1px 1px 0px #00464B1A,
        0px 2px 2px 0px #00464B17,
        0px 5px 3px 0px #00464B0D,
        0px 9px 4px 0px #00464B03,
        0px 15px 4px 0px #00464B00
      `}>
                      <Text fontSize={'13px'} color={'#006A71'} fontWeight={'bold'}>در انتظار تایید</Text>
                      <Box w={'100%'} bgColor={'#F9F9F9'} borderRadius={'10px'} padding={'6px'}>
                        <HStack w={'100%'} justifyContent={'space-between'}>
                          <Text color={'#006A71'} fontSize={'10px'}>2 سوال</Text>
                          <IconButton icon={<LuPencil color="#006A71" />} />
                        </HStack>
                        <Divider />
                        <HStack w={'100%'} justifyContent={'space-between'}>
                          <Text color={'#006A71'} fontSize={'10px'}>2 سوال</Text>
                          <IconButton icon={<LuPencil color="#006A71" />} />
                        </HStack>
                      </Box>
                      <HStack w={'100%'} alignItems={'end'} justifyContent={'end'}>
                        <Button bgColor={'#006A71'} borderRadius={'10px'} fontSize={'10px'}>ثبت موارد ثبت شود</Button>
                      </HStack>
                    </Box>
                    <Box as={VStack} alignItems={'start'} justifyContent={'space-between'} bgColor={'white'} padding={'12px'} height={'189px'} width={'200px'} borderRadius={'15px'} boxShadow={`
        0px 1px 1px 0px #00464B1A,
        0px 2px 2px 0px #00464B17,
        0px 5px 3px 0px #00464B0D,
        0px 9px 4px 0px #00464B03,
        0px 15px 4px 0px #00464B00
      `}>
                      <Text fontSize={'13px'} color={'#006A71'} fontWeight={'bold'}>موارد ثبت نشده</Text>
                      <Box w={'100%'} bgColor={'#F9F9F9'} borderRadius={'10px'} padding={'6px'}>
                        <HStack w={'100%'} justifyContent={'space-between'}>
                          <Text color={'#006A71'} fontSize={'10px'}>سوال #64534</Text>
                          <HStack color='#00D2A1' >
                            <Spinner size={'sm'} />
                            <Text fontSize={'5px'}>درحال بررسی</Text>
                          </HStack>
                        </HStack>
                        <Divider my={'10px'} />
                        <HStack w={'100%'} justifyContent={'space-between'}>
                          <Text color={'#006A71'} fontSize={'10px'}>سوال #64534</Text>
                          <HStack color='#006A71' >
                            <IoCheckmark fontSize={'sm'} />
                            <Text fontSize={'5px'}>ثبت شده</Text>
                          </HStack>
                        </HStack>
                      </Box>
                      <HStack w={'100%'} alignItems={'end'} justifyContent={'end'}>
                        <Button bgColor={'#006A71'} borderRadius={'10px'} leftIcon={<LuPencil />} fontSize={'10px'}>اصلاح موارد رد شده</Button>
                      </HStack>
                    </Box>  <Box as={VStack} alignItems={'start'} justifyContent={'space-between'} bgColor={'white'} padding={'12px'} height={'189px'} width={'200px'} borderRadius={'15px'} boxShadow={`
        0px 1px 1px 0px #00464B1A,
        0px 2px 2px 0px #00464B17,
        0px 5px 3px 0px #00464B0D,
        0px 9px 4px 0px #00464B03,
        0px 15px 4px 0px #00464B00
      `}>
                      <Text fontSize={'13px'} color={'#006A71'} fontWeight={'bold'}>موارد ثبت نشده</Text>
                      <Box w={'100%'} bgColor={'#F9F9F9'} borderRadius={'10px'} padding={'6px'} color={'#006A71'}>
                        <HStack w={'100%'} justifyContent={'space-between'}>
                          <Text color={'#006A71'} fontSize={'10px'}>2 سوال</Text>
                          <Text fontSize={'5px'}>1404/4/5</Text>
                        </HStack>
                        <Divider my={'10px'} />
                        <HStack w={'100%'} justifyContent={'space-between'}>
                          <Text color={'#006A71'} fontSize={'10px'}>2 سوال</Text>
                          <Text fontSize={'5px'}>1404/4/5</Text>
                        </HStack>
                      </Box>
                      <HStack w={'100%'} alignItems={'end'} justifyContent={'end'}>
                        <Button bgColor={'#006A71'} borderRadius={'10px'} fontSize={'10px'}>مشاهده همه فعالیت ها</Button>
                      </HStack>
                    </Box>
                  </HStack>
                </GridItem>
                <GridItem as={VStack} bgColor={"#F9F9F9"} w={"100%"} height={"100%"} colSpan={3} rowSpan={2} borderRadius={"30px"} padding={'15px'}>
                  <HStack w={'100%'} justifyContent={'space-between'}>
                    <Text fontSize={'20px'} color={'#00464B'} fontWeight={'extrabold'}>دوستان من</Text>
                    <Text fontSize={'12px'} color={'#006A71'}>مشاهده همه</Text>
                  </HStack>
                  <VStack w={'100%'} mt={'16px'} overflowY={'scroll'}>
                    <Box height={'64px'} as={HStack} w={'100%'} alignItems={'center'} bgColor={'white'} borderRadius={'10px'} padding={'8px'}>
                      <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9us0MxB35Wv3z03TJFrxhub-WyxqpBKAsjQ&s'} w={'70px'} h={'50px'} borderRadius={'100%'} />
                      <VStack w={'100%'} alignItems={'start'}>
                        <Text fontWeight={'extrabold'} fontSize={'15px'}>علیرضا نوری</Text>
                        <Text fontSize={'10px'}>mohammadi@gmail.com</Text>
                      </VStack>
                      <Button bgColor={'#006A71'} fontSize={'10px'} borderRadius={'30px'} width={'86px'} height={'25px'}>دنبال کردن</Button>
                    </Box>
                    <Box height={'64px'} as={HStack} w={'100%'} alignItems={'center'} bgColor={'white'} borderRadius={'10px'} padding={'8px'}>
                      <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9us0MxB35Wv3z03TJFrxhub-WyxqpBKAsjQ&s'} w={'70px'} h={'50px'} borderRadius={'100%'} />
                      <VStack w={'100%'} alignItems={'start'}>
                        <Text fontWeight={'extrabold'} fontSize={'15px'}>علیرضا نوری</Text>
                        <Text fontSize={'10px'}>mohammadi@gmail.com</Text>
                      </VStack>
                      <Button bgColor={'#006A71'} fontSize={'10px'} borderRadius={'30px'} width={'86px'} height={'25px'}>دنبال کردن</Button>
                    </Box>
                    <Box height={'64px'} as={HStack} w={'100%'} alignItems={'center'} bgColor={'white'} borderRadius={'10px'} padding={'8px'}>
                      <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9us0MxB35Wv3z03TJFrxhub-WyxqpBKAsjQ&s'} w={'70px'} h={'50px'} borderRadius={'100%'} />
                      <VStack w={'100%'} alignItems={'start'}>
                        <Text fontWeight={'extrabold'} fontSize={'15px'}>علیرضا نوری</Text>
                        <Text fontSize={'10px'}>mohammadi@gmail.com</Text>
                      </VStack>
                      <Button bgColor={'#006A71'} fontSize={'10px'} borderRadius={'30px'} width={'86px'} height={'25px'}>دنبال کردن</Button>
                    </Box>
                  </VStack>
                </GridItem>
                <GridItem as={VStack} alignItems={'center'} bgColor={"#F9F9F9"} w={"100%"} height={"100%"} colSpan={2} rowSpan={2} borderRadius={"30px"} padding={'15px'}>
                  <HStack w={'100%'} justifyContent={'space-between'}>
                    <Text fontSize={'20px'} color={'#00464B'} fontWeight={'extrabold'}>ذخیره شده ها</Text>
                    <Text fontSize={'12px'} color={'#006A71'}>مشاهده همه</Text>
                  </HStack>
                  <Grid as={Box} templateColumns="repeat(2, 1fr)" w={'178px'} h={'178px'} gap={'8px'} borderRadius={'15px'} mt={'30px'}>
                    <Box as={VStack} alignItems={'center'} justifyContent={'center'} bgColor={'white'} borderRadius={'5px'} borderTopRightRadius={'15px'} boxShadow={`
        0px 3px 7px 0px #00464B26,
        0px 12px 12px 0px #00464B21,
        0px 27px 16px 0px #00464B14,
        0px 47px 19px 0px #00464B05,
        0px 74px 21px 0px #00464B00
      `}>
                      <Text>25</Text>
                      <Text>سوالات</Text>
                    </Box>
                    <Box as={VStack} alignItems={'center'} justifyContent={'center'} bgColor={'white'} borderRadius={'5px'} borderTopLeftRadius={'15px'} boxShadow={`
        0px 3px 7px 0px #00464B26,
        0px 12px 12px 0px #00464B21,
        0px 27px 16px 0px #00464B14,
        0px 47px 19px 0px #00464B05,
        0px 74px 21px 0px #00464B00
      `}>
                      <Text>25</Text>
                      <Text>سوالات</Text>
                    </Box>
                    <Box as={VStack} alignItems={'center'} justifyContent={'center'} bgColor={'white'} borderRadius={'5px'} borderBottomRightRadius={'15px'} boxShadow={`
        0px 3px 7px 0px #00464B26,
        0px 12px 12px 0px #00464B21,
        0px 27px 16px 0px #00464B14,
        0px 47px 19px 0px #00464B05,
        0px 74px 21px 0px #00464B00
      `}>
                      <Text>25</Text>
                      <Text>سوالات</Text>
                    </Box>
                    <Box as={VStack} alignItems={'center'} justifyContent={'center'} bgColor={'white'} borderRadius={'5px'} borderBottomLeftRadius={'15px'} boxShadow={`
        0px 3px 7px 0px #00464B26,
        0px 12px 12px 0px #00464B21,
        0px 27px 16px 0px #00464B14,
        0px 47px 19px 0px #00464B05,
        0px 74px 21px 0px #00464B00
      `}>
                      <Text>25</Text>
                      <Text>سوالات</Text>
                    </Box>
                  </Grid>
                </GridItem>
              </GridItem >
            </Grid>
          </Box>
        </GridItem>
      </Grid>
    </Box>
    // </MainLayout>
  );
};

export default Index;
