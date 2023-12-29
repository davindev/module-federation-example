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
      <Link to="/operation-logs">
        <Text {...getStyleProps('operation-logs')}>
          운영일지
        </Text>
      </Link>

      <Link to="/teacher-manage">
        <Text {...getStyleProps('teacher-manage')}>
          교직원 관리
        </Text>
      </Link>

      <Link to="/child-manage">
        <Text {...getStyleProps('child-manage')}>
          원아 관리
        </Text>
      </Link>
    </Flex>
  )
}
