// 간단한 예
Math.pow(7, 2); // 49
Math.pow(7, 3); // 343
Math.pow(2, 10); // 1024
// 분수 지수
Math.pow(4, 0.5); // 2 (4의 제곱근)
Math.pow(8, 1 / 3); // 2 (8의 세제곱근)
Math.pow(2, 0.5); // 1.4142135623730951 (2의 제곱근)
Math.pow(2, 1 / 3); // 1.2599210498948732 (2의 세제곱근)
// 양의 지수
Math.pow(7, -2); // 0.02040816326530612 (1/49)
Math.pow(8, -1 / 3); // 0.5
// 양의 밑
Math.pow(-7, 2); // 49 (제곱의 결과값은 양수입니다.)
Math.pow(-7, 3); // -343 (세제곱은 음수가 될 수 있습니다.)
Math.pow(-7, 0.5); // NaN (음수는 실제 제곱근을 가지지 않습니다.)
// "짝수"와 "홀수" 근이 서로 가깝게 놓여 있고
// 부동소수점 정밀도의 한계로 인해,
// 밑이 음수이며 지수가 분수라면 언제나 NaN을 반환합니다.
Math.pow(-7, 1 / 3); // NaN