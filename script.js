import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1, //代表模擬用戶數量
  duration: '1s', //代表執行時間
};

export default function () {
  http.get('https://test.k6.io'); //測試目標網址
}
