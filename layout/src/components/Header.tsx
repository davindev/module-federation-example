import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { BellIcon, SettingsIcon } from '@chakra-ui/icons';

interface Props {
  appName: string;
}

export default function Header({ appName }: Props) {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="60px"
      paddingX="20px"
      backgroundColor="#ffffff"
      borderBottom="1px solid #e9ecef"
    >
      <a href="/service">
        <Heading
          as="h1"
          fontSize="22px"
          fontWeight="700"
          color="#208df9"
        >
          Kidsnote
        </Heading>
      </a>

      <Flex columnGap="18px">
        <a href="/service">
          <Text
            fontWeight="900"
            color={appName === 'service' ? '#208df9' : '#8c95a1'}
          >
            키즈노트
          </Text>
        </a>
        <a href="/e-docs">
          <Text
            fontWeight="900"
            color={appName === 'e-docs' ? '#208df9' : '#8c95a1'}
          >
            전자문서+
          </Text>
        </a>
      </Flex>
      
      <Flex
        columnGap="18px"
        alignItems="center"
      >
        <BellIcon
          boxSize="22px"
          color="#8c95a1"
        />
        <SettingsIcon
          boxSize="20px"
          color="#8c95a1"
        />
      </Flex>
    </Flex>
  );
}
