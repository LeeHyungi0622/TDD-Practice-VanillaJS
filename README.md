# TDD 개발 실습 - VanillaJS

![](/imgs/210404_vanilla_javascript_img.jpeg)

## **Robust한 JavaScript 어플리케이션을 만들기 위한 준비**

본 프로젝트는 TDD방식으로 간단한 VanillaJS 어플리케이션을 만들어보는 실습을 통해 TDD 방식의 개발에 좀 더 익숙해지기 위한 목적에서 만들었습니다.

- **Test suite**
  - describe('test에 대한 설명', 테스트 구현 함수)
- **Test spec**
  - it('test에 대한 설명', 기대식을 가진 테스트 구현 함수)
- **기대식과 matcher**
  - expect(결과 값).toBe(기대하는 값)
- **Spy**

  - spyOn(감시할 객체, 감시할 메소드)

## **JavaScript 문제해결 - Module pattern**

모듈 패턴은 자바스크립트에서 가장 많이 사용되는 패턴이다.
함수로 데이터를 감추고, 모듈 API를 담고 있는 객체를 반환하는 형태

### **임의 모듈 패턴 : 임의 함수를 호출하여 생성하는 모듈**

여러 객체가 필요한 경우에 사용되는 패턴 방식이다.

```javascript
// namespace 만들기
var App = App || {};
// namespace에 함수를 추가. 의존성있는 God function을 주입
// Person이라는 module(함수)를 넣어준다.
App.Person = function (God) {
  // God module이 name을 생성하는 역할을 한다.
  // God module을 통해 생성한 name값을 변수에 초기화한다.
  var name = God.makeName();

  // API 노출 (getter, setter 함수를 가지는 객체를 반환)
  return {
    getName: function () {
      return name;
    },
    setName: function (newName) {
      name = newName;
    }
  };
};

const person = App.Person(God);
person.getName();
```

### **즉시 실행 함수(IIFE) 모듈 패턴(Singleton instance) : 즉시 실행 함수(IIFE) 기반의 모듈**

singleton일 경우(단일 객체가 필요한 경우)에 사용되는 패턴 방식이다.

```javascript
var App = App || {};
App.Person = (function () {
  let name = '';
  return {
    getName(God) {
      name = name || God.makeName();
      return name;
    },
    setName(newName) {
      name = newName;
    }
  };
})(); //함수 선언 즉시 실행한다. singleton
```

<ins><b>위와같이 모듈을 생성하는데에는 두 가지 원칙이 필요하다.</b></ins>

1. `단일 책임 원칙`에 따라 모듈은 한 가지 역할만 한다.
   해당 역할만 집중함으로서 모듈을 더욱 튼튼하고 견고하게 만들고 테스트하기 쉬워진다.
2. 모듈 자신이 사용할 객체가 있다면 `의존성 주입`형태로 제공한다.
   팩토리 주입형태로 제공하기도 하며 테스트하기 쉬워진다.

## <b>Project status</b>

**(1) <ins>Project initial setup</ins>**

- 🗓️ **2021.04.04(Sun)**

- **Issue1) Project initial setup**

  → [https://github.com/LeeHyungi0622/TDD-Practice-VanillaJS/issues/1](https://github.com/LeeHyungi0622/TDD-Practice-VanillaJS/issues/1)

  - **Jasmine framework 설치**
  - standalone으로 설치하는 방법 : 모든 Jasmine 코드를 브라우저에 올려서 실행 (실무에서는 많이 사용되지 않는다)

    - 우선 standalone 방식으로 진행 (다운받은 jasmine-standalone 폴더를 프로젝트의 하위에 복사)

      → [https://jasmine.github.io/pages/getting_started.html](https://jasmine.github.io/pages/getting_started.html)

  - karma 라이브러리와 함께 설치하는 방법 (테스트 자동화)

- **Issue2) Make existing code better with module pattern**

  → [https://github.com/LeeHyungi0622/TDD-Practice-VanillaJS/issues/2](https://github.com/LeeHyungi0622/TDD-Practice-VanillaJS/issues/2)

  - **<ins>보이는 부분과 보이지 않는 부분을 나눠서 생각하기</ins>**
    - 버튼과 카운트 숫자를 출력하는 부분 (보이는 부분)
    - 클릭 이벤트를 받고 카운트 값을 갱신하는 부분(보이지 않는 부분)
