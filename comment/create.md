# 创建评论

    POST /reply/add/

## 说明
创建一条评论

## URL
http://tuchong.com/api/reply/add/

## 是否需要登陆
是

## 参数

- `post_id` — (可选)。图博id，如果不提供此参数，则必须有site_id。
- `site_id` — (可选)。小站id，如果不提供此参数，则必须有post_id。
- `content` — (必须)。评论内容。
- `anonymous` — (可选)。是否匿名发布，值为'on'则是，否则为否，默认为否。
- `replyto` — (可选)。回复给某些用户的id数组。
- `sync_to_weibo` — (可选)。同步到新浪微博，1为是，0为否，默认为否。
- `image_id` — (可选)。回复图片的id。

### 例子
**请求**

    POST http://tuchong.com/api/reply/add/
**post数据**

    post_id=6609030&content=myComment

**返回**
``` json
{
    "comment":{
        "note_id":"3747976",
        "post_id":"6609030",
        "type":"comment",
        "content":"myComment",
        "created_at":"2014-07-15 11:34:38",
        "delete":true,
        "reply":false,
        "author_id":"443539",
        "anonymous":0,
        "likes":0,
        "liked":false,
        "reply_to":null,
        "author":{
            "site_id":"443539",
            "type":"user",
            "name":"skyss",
            "domain":"",
            "url":"http:\/\/tuchong.com\/443539\/",
            "icon":"http:\/\/s1.tuchong.net\/sites\/443\/443539\/logo_small.jpg?1",
            "description":"handsome",
            "followers":0
        }
    },
    "result":"SUCCESS"
}
```
