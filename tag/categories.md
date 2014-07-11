# 标签分类

    GET tag/categories

***

## 说明
返回指定类型的标签

***

## URL
http://tuchong.com/api/tag/categories

***

## 是否需要登陆
否

***

## 参数

- **type** — 必须。标签类型，可选值为('uncategorized', 'event', 'subject', 'style', 'location', 'equipment')，分别是未分类，活动，题材，风格，地区，器材。
- **page** — 可选。返回结果的页码，范围1~1000，默认为1。
- **count** — 可选。单页返回的记录条数，范围1~100，默认为20。

***

## 例子
**请求**

    api/tag/categories?type=style

**返回**
``` json
{
    "tagList":[
    {
        "tag_id":"394905",
        "type":"style",
        "tag_name":"styleTag",
        "synonym_id":null,
        "status":"open",
        "display_order":"0",
        "cover_img_id":null,
        "revision":"3",
        "posts":"0",
        "new_posts":"0",
        "participants":"0",
        "owner_id":null,
        "title":"",
        "subtitle":"",
        "description":""
        }
    ],
    "result":"SUCCESS"
}
```
