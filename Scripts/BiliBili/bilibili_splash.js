// 2022-03
// 引用地址 https://github.com/yjqiang/surge_scripts/blob/main/scripts/bilibili/bilibili_splash.js
// B站预加载开屏广告
let body = JSON.parse($response.body);
for (let item of body["data"]["list"]) {
    item["duration"] = 0;  // 显示时间
    // 2040 年
    item["begin_time"] = 2240150400;
    item["end_time"] = 2240150400;
}
$done({body: JSON.stringify(body)});
