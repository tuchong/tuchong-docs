# 活动信息

    GET /events/get/

## 说明
获取活动列表

## URL
http://tuchong.com/api/events/get/

## 是否需要登陆
否

## 参数

- `status` — (可选)。活动状态，可选值为('open', 'closed')，分别是正在进行，已经结束，默认为正在进行。
- `page` — (可选)。返回结果的页码，范围1~1000，默认为1。
- `count` — (可选)。单页返回的记录条数，范围1~100，默认为20。

### 例子
**请求**

    GET http://tuchong.com/api/events/get/?status=closed

**返回**
``` json
{
    "eventList":[
    {
        "tag_id":"394911",
        "type":"event",
        "tag_name":"test event",
        "synonym_id":null,
        "status":"closed",
        "display_order":"0",
        "cover_img_id":null,
        "revision":"4",
        "posts":"4",
        "new_posts":"0",
        "participants":"4",
        "owner_id":"443012",
        "title":"test event",
        "subtitle":"",
        "description":"tttttttttttttt event"
        }
    ],
    "result":"SUCCESS"
}
```
