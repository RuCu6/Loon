/***********************************

> 應用名稱：圖圖記賬
> 軟件版本：2.3.0
> 下載地址：https://apps.apple.com/cn/app/id1546356856
> 腳本作者：Cuttlefish
> 微信賬號：墨魚手記
> 解鎖說明：解鎖高級會員權限
> 更新時間：2022-02-18
> 通知頻道：https://t.me/ddgksf2021
> 問題反饋：https://t.me/ddgksf2013_bot
> 特別說明：本腳本僅供學習交流使用，禁止轉載售賣
 
[rewrite_local]

# ～ 圖圖記賬解鎖會員權限（2022-02-18）@ddgksf2013
https?:\/\/api\.magictouch\.design\/user\/user\/getUserByDevice url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/tutujizhang.js

[mitm] 

hostname=bookapi.ellabook.cn

***********************************/


















body = $response.body.replace(/end_time":0/g, 'end_time":4071137036');
$done({ body });
