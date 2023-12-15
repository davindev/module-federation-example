import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Flex
      rowGap="20px"
      alignItems="center"
      flexDirection="column"
      width="100%"
      paddingY="40px"
      backgroundColor="#ffffff"
      borderTop="1px solid #e9ecef"
      fontSize="13px"
      color="#6c7682"
    >
      <Flex columnGap="8px">
        <Flex
          columnGap="8px"
          alignItems="center"
          _after={{
            display: 'block',
            width: '1px',
            height: '12px',
            backgroundColor: '#c2c8cf',
            content: `""`,
          }}
        >
          회사소개
        </Flex>
        <Flex
          columnGap="8px"
          alignItems="center"
          _after={{
            display: 'block',
            width: '1px',
            height: '12px',
            backgroundColor: '#c2c8cf',
            content: `""`,
          }}
        >
          원격지원
        </Flex>
        <Flex
          columnGap="8px"
          alignItems="center"
          _after={{
            display: 'block',
            width: '1px',
            height: '12px',
            backgroundColor: '#c2c8cf',
            content: `""`,
          }}
        >
          사용자 가이드
        </Flex>
        <Flex
          columnGap="8px"
          alignItems="center"
          _after={{
            display: 'block',
            width: '1px',
            height: '12px',
            backgroundColor: '#c2c8cf',
            content: `""`,
          }}
        >
          카카오톡 문의하기
        </Flex>
        <Flex>
          약관 및 정책
        </Flex>
      </Flex>

      <Flex columnGap="8px">
        <Flex
          columnGap="8px"
          alignItems="center"
          _after={{
            display: 'block',
            width: '1px',
            height: '12px',
            backgroundColor: '#c2c8cf',
            content: `""`,
          }}
        >
          사업자번호: 108-86-01122
        </Flex>
        <Flex
          columnGap="8px"
          alignItems="center"
          _after={{
            display: 'block',
            width: '1px',
            height: '12px',
            backgroundColor: '#c2c8cf',
            content: `""`,
          }}
        >
          e-mail : contact@kidsnote.com
        </Flex>
        <Flex
          columnGap="8px"
          alignItems="center"
          _after={{
            display: 'block',
            width: '1px',
            height: '12px',
            backgroundColor: '#c2c8cf',
            content: `""`,
          }}
        >
          Tel.1644-6734
        </Flex>
        <Flex
          columnGap="8px"
          alignItems="center"
          _after={{
            display: 'block',
            width: '1px',
            height: '12px',
            backgroundColor: '#c2c8cf',
            content: `""`,
          }}
        >
          경기도 성남시 분당구 판교역로 235, 4층 키즈노트
        </Flex>
        <Flex>
          대표이사: 최장욱
        </Flex>
      </Flex>

      <Text>
        © Kids Note, Inc. All rights reserved.
      </Text>
    </Flex>
  );
}
