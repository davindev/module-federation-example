import React from 'react';
import { useLocation, Link } from 'react-router-dom';
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
      <Link to="/report">
        <Text {...getStyleProps('report')}>
          알림장
        </Text>
      </Link>

      <Link to="/notice">
        <Text {...getStyleProps('notice')}>
          공지사항
        </Text>
      </Link>

      <Link to="/album">
        <Text {...getStyleProps('album')}>
          앨범
        </Text>
      </Link>
    </Flex>
  )
}
