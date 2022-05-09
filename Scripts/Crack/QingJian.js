/*
微信公众号：少年歌行PRO 制作
电报资源发布群（禁言纯净）@shao66 
电报水友交流群（资源同步）@sngxpro
电报私聊 @shaogebot
QQ群：654371081

QX:
[rewrite_local]
^https:\/\/cn1\.invit\.vip\/users\/info url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/qing/qing.js

[mitm]
hostname = cn1.invit.vip

[app下载地址]
电子请柬制作 - 婚礼邀请函制作必备APP
appstore下载，https:\/\/apps.apple.com\/cn\/app\/%E7%94%B5%E5%AD%90%E8%AF%B7%E6%9F%AC%E5%88%B6%E4%BD%9C-%E5%A9%9A%E7%A4%BC%E9%82%80%E8%AF%B7%E5%87%BD%E5%88%B6%E4%BD%9C%E5%BF%85%E5%A4%87app\/id1354806829

*/

var body = $response.body;
var url = $request.url;

const path1 = '\/users\/info';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.data["is_vip"] = 1;
	obj.data["vip_exp"] = 1800000000;
	body = JSON.stringify(obj);  
 }

$done({body});
