import { Box, Checkbox, Divider, HStack, Text, VStack } from "@chakra-ui/react"
import { IoClose } from "react-icons/io5"
import { TiInputChecked } from "react-icons/ti"

const CommentCard = ({ onClick, selected }) => {
  return (
    <VStack w={'100%'} justifyContent={'start'} bgColor={'white'} padding={'10px'} borderRadius={'7px'} alignItems={'start'}>
      <Box as={HStack} bgColor={'#F3F3F3'} borderRadius={'4px'} height={'26px'} borderRightRadius={'2px'} padding={'3px'} w={'100%'} borderRight={'2px'} borderRightColor={'#009875'}>
        <Text w={'max-content'} bgColor={'white'} whiteSpace={'nowrap'} px={'7px'} borderRadius={'4px'}>محمدرضا محمدی زاده</Text>
        <Text w={'100%'}>آیا می‌توان نذر کرد که فطریه را به زلزله زده‌گان داد؟ اگر نتوانیم آن را انجام دهیم، آیا می‌توان فطریه را یک آیا می‌توان نذر اگر نتوانیم آن ...</Text>
      </Box>
      <HStack w={'100%'} alignItems={'start'} >
        {selected ? <IoClose onClick={onClick} fontSize={'25px'} color="#006A71" cursor={'pointer'} /> : <Checkbox colorScheme="teal" onChange={onClick}></Checkbox>}
        <VStack w={'100%'} alignItems={'start'} justifyContent={'space-between'} height={'100%'}>
          <Text>آیا می‌توان نذر کرد که فطریه را به زلزله زده‌گان داد؟ اگر نتوانیم آن را انجام دهیم، آیا می‌توان فطریه را یک ...</Text>

        </VStack>
        <VStack>
          <Box bgColor={'#EAEBEB'} color={'#006A71'} as={HStack} w={'100%'} px={'16px'} py={'8px'} borderRadius={'5px'} height={'30px'}>
            <Text w={'100%'}>1404/01/27</Text>
            <Divider orientation="vertical" height={'20px'} borderColor={'gray'} />
            <Text>15:30</Text>
          </Box>
          <Box as={HStack} bgColor={'#EAEBEB'} w={'100%'} px={'16px'} py={'8px'} borderRadius={'5px'} color={'#006A71'} height={'30px'}>
            <HStack w={'100%'} color={'gray'}>
              <TiInputChecked />
              <Text fontSize={'6px'}>24</Text>
            </HStack>
            <HStack w={'100%'} justifyContent={'start'} color={'red.400'}>
              <IoClose />
              <Text fontSize={'6px'}>34</Text>
            </HStack>
          </Box>
        </VStack>
      </HStack>
    </VStack>
  )
}

export default CommentCard
