# 用户信息

    GET /site/get/

## 说明
获取和某人/小站的关系以及用户信息

## URL
http://tuchong.com/api/site/get/

## 是否需要登陆
是

## 参数

- `site_id` — (必须)。用户id或小站id。

### 例子
**请求**

    GET http://tuchong.com/api/site/get/?site_id=443539

**返回**
``` json
{
    "site":{
        "site_id":"443539",
        "type":"user",
        "name":"skyss",
        "domain":null,
        "url":"http:\/\/tuchong.com\/443539\/",
        "icon":"http:\/\/s1.tuchong.net\/sites\/443\/443539\/logo_small.jpg?1",
        "description":"handsome",
        "followers":0,
        "members":0,
        "qualified":false,
        "following":"1",
        "tags":[
        ]
    },
    "relationship":{
        "to_id":"443539",
        "is_following":0
    },
    "result":"SUCCESS"
}
```
