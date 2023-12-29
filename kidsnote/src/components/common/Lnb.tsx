import React from 'react';
import { useLocation } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';

export default function Lnb() {
  const location = useLocation();

  const getStyleProps = (menu: string) => {
    const isCurrentMenu = location.pathname.includes(menu);

    return {
      fontWeight: isCurrentMenu ? '700' : '400',
      color: isCurrentMenu ? '#429efa' : '#000000',
    };
  };

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
      <a href="/service/report">
        <Text {...getStyleProps('report')}>
          알림장
        </Text>
      </a>

      <a href="/service/notice">
        <Text {...getStyleProps('notice')}>
          공지사항
        </Text>
      </a>

      <a href="/service/album">
        <Text {...getStyleProps('album')}>
          앨범
        </Text>
      </a>
    </Flex>
  )
}
