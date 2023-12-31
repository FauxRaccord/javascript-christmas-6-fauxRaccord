const tryErrorCase = {
  dateInputs: ["43", "32", "-0", "0", "12.0", "12.0000000000004", "25"],
  menusInputs: [
    "티본스테이크1",
    "양송이수프-1,티본-스테이크-1",
    "시저샐러드-1,티본스테이크--1",
    "티본스테이크-foo",
    "티본스테이크-1.0",
    "티본스테이크-1,티본스테이크-1",
    "티본스테이크-1.000000000000004",
    "티본스테이크-1.시저샐러드-1",
    "티본스테이크-1시저샐러드-1",
    "티본스테이크-1,,시저샐러드-1",
    "티본스테이크-1,-,시저샐러드-1",
    "-1",
    "티본스테이크-1,-1,시저샐러드-1",
    "foo-1",
    "티본스태이크-1",
    "티본스테이크-0",
    "샴페인-1,제로콜라-2,레드와인-1",
    "제로콜라-15",
    "티본스테이크-10,타파스-10,해산물파스타-1",
    "양송이수프-3,타파스-2,시저샐러드-5,티본스테이크-3,해산물파스타-2,아이스크림-5,제로콜라-1",
    "양송이수프-3,타파스-2,시저샐러드-3,티본스테이크-1,해산물파스타-2,아이스크림-3,제로콜라-6",
  ],
  expectedDate: 25,
  expectedMenus: {
    appetizer: { 양송이수프: 3, 타파스: 2, 시저샐러드: 3 },
    main: { 티본스테이크: 1, 해산물파스타: 2 },
    dessert: { 아이스크림: 3 },
    drink: { 제로콜라: 6 },
  },
  logs: [
    ...Array.from(
      { length: 6 },
      () => "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
    ),
    ...Array.from(
      { length: 20 },
      () => "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
    ),
    "12월 25일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!",
    "<주문 메뉴>",
    "양송이수프 3개",
    "타파스 2개",
    "시저샐러드 3개",
    "티본스테이크 1개",
    "해산물파스타 2개",
    "아이스크림 3개",
    "제로콜라 6개",
    "<할인 전 총주문 금액>",
    "211,000원",
    "<증정 메뉴>",
    "샴페인 1개",
    "<혜택 내역>",
    "크리스마스 디데이 할인: -3,400원",
    "평일 할인: -6,069원",
    "특별 할인: -1,000원",
    "증정 이벤트: -25,000원",
    "<총혜택 금액>",
    "-35,469원",
    "<할인 후 예상 결제 금액>",
    "200,531원",
    "<12월 이벤트 배지>",
    "산타",
  ],
};

export default tryErrorCase;
