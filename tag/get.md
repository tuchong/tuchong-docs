# 根据标签获取图博

    GET /tag/get/

## 说明
获取指定标签的图博

## URL
http://tuchong.com/api/tag/get/

## 是否需要登陆
否

## 参数

- `tag` — (必须)。标签名称。
- `page` — (可选)。返回结果的页码，范围1~1000，默认为1。
- `count` — (可选)。单页返回的记录条数，范围1~100，默认为20。
- `order` — (可选)。图博排序依据，可选值为('new', 'favorited', 'weekly', 'monthly')，分别是最新发布，最新分享，本周热门，本月热门。用户未登录时默认值为本周热门，登陆则为最新分享。

### 例子
**请求**

    GET http://tuchong.com/api/tag/get/?tag=%E4%B8%AD%E6%96%87

**返回**
``` json
{
    "postList":[
        {
        "post_id":"6480440",
        "author_id":"443012",
        "site_id":"443012",
        "type":"text",
        "original_post_id":null,
        "title":"article for event",
        "content":"<p> aaaaaaaaaaaaaaa f     e<br><\/p>",
        "content_old":null,
        "created":"2014-07-09 11:56:37",
        "updated":"2014-07-09 11:56:37",
        "published_at":"2014-07-09 11:56:37",
        "broadcasted_at":null,
        "replied_at":"2014-07-09 11:56:37",
        "qualified":"1",
        "editor_id":"0",
        "deleted_by":"0",
        "image_count":"0",
        "images":null,
        "tags":"394902",
        "events":"394911",
        "mentions":"",
        "is_original":"1",
        "cc":"by,nc,sa",
        "favorites":"0",
        "reposts":"0",
        "comments":"0",
        "weibo_id":null
        }
    ],
    "result":"SUCCESS"
}
```
