# Module Federation으로 Micro Frontend 구현하기

[Module Federation으로 Micro Frontend 구현하기](https://velog.io/@davin/Module-Federation%EC%9C%BC%EB%A1%9C-%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0) 아티클에서 사용된 실습 코드 레퍼지토리 입니다.

이 레퍼지토리는 3개의 원격 어플리케이션(`kidsnote`, `e-docs`, `layout`)과 1개의 호스트 어플리케이션(`main`)으로 구성되어 있습니다.

![](https://velog.velcdn.com/images/davin/post/f310328f-2833-43c1-b1ee-790ff4e22b79/image.png)

각각의 어플리케이션은 아래와 같은 라우터 구조를 가지고 있습니다.

![](https://velog.velcdn.com/images/davin/post/ce74cbd2-a17e-49a8-a730-d0a08baaa5cd/image.png)

1. 아래 명령어를 입력하면 해당 레퍼지토리를 클론 할 수 있습니다.
```zsh
git clone https://github.com/davindev/module-federation-example.git
```

2. 아래 명령어를 입력하면 [localhost:3000](http://localhost:3000)에서 `layout` 원격 어플리케이션을 실행할 수 있습니다.
```zsh
cd layout
npm install
npm run build
npm start
```

3. 아래 명령어를 입력하면 [localhost:3002](http://localhost:3002)에서 `kidsnote` 원격 어플리케이션을 실행할 수 있습니다.
```zsh
cd kidsnote
npm install
npm run build
npm start
```

4. 아래 명령어를 입력하면 [localhost:3003](http://localhost:3003)에서 `e-docs` 원격 어플리케이션을 실행할 수 있습니다.
```zsh
cd e-docs
npm install
npm run build
npm start
```

5. 아래 명령어를 입력하면 [localhost:3001](http://localhost:3001)에서 `main` 호스트 어플리케이션을 실행할 수 있습니다.
```zsh
cd main
npm install
npm run build
npm start
```

6. 모든 어플리케이션을 실행한 후, 브라우저에서 http://localhost:3001으로 진입하면 통합된 어플리케이션을 사용할 수 있습니다.

![](https://velog.velcdn.com/images/davin/post/b137a038-c6d4-4eea-b67c-e9b50ea958a8/image.gif)
