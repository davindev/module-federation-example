import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export default function Lnb() {
  return (
    <Flex
      rowGap="34px"
      flexDirection="column"
      width="250px"
      height="100vh"
      padding="24px"
      backgroundColor="#ffffff"
      borderRight="1px solid #e9ecef"
    >
      <Text
        fontWeight="700"
        color="#429efa"
      >
        알림장
      </Text>

      <Text>
        공지사항
      </Text>

      <Text>
        앨범
      </Text>
    </Flex>
  )
}
