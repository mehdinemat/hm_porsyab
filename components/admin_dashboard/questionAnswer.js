import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react"

const QuestionAnswer = () => {
  return (
    <Box as={VStack} bgColor={'white'} borderRadius={'10px'} padding={'10px'} boxShadow={`
        0px 1.35px 2.69px 0px #00464B0D,
        0px 5.39px 5.39px 0px #00464B0A,
        0px 12.13px 7.41px 0px #00464B08,
        0px 21.56px 8.76px 0px #00464B03,
        0px 33.68px 9.43px 0px #00464B00
      `}>
      <HStack alignItems={'baseline'}>
        <Avatar width={'24px'} height={'24px'} />
        <Text fontSize={'10px'} color={'#333333'}>لورم ایپسوم متن ساختگی با تولید سادگی از صنعت چاپ، و با استفاده از طراحان گرافیــک اســت، لورم ایپسوم ساختگی با تولید سادگی از لورم ایپسوم متن ساعت چایــک اســت، لورم ایپسوم ساختگی با تولید سادگی از لورم ایپسوم متن ساختگی با تولید سادگی از صنعت چاپ، و با استفاده از طراحان گرافیــک اســت، لورم ایپسوم ساختگی با تولید سادگی از</Text>
      </HStack>
      <HStack w={'100%'} justifyContent={'end'}>
        <Text color={'#006A71'}>15:30</Text>
        <Text color={'#006A71'}>1404/01/27</Text>
      </HStack>
    </Box>
  )
}

export default QuestionAnswer
