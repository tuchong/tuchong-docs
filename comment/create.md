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

    post_id=6484977&content=%E6%B5%8B%E8%AF%95%E8%AF%84%E8%AE%BA&image_id=7170669&anonymous=on&replyto%5B%5D=408653&replyto%5B%5D=308962

**返回**
``` json
{
    "comment":{
        "note_id":"3748114",
            "post_id":"6484977",
            "type":"comment",
            "content":"测试评论",
            "created_at":"2014-07-15 13:02:59",
            "delete":true,
            "reply":false,
            "author_id":0,
            "anonymous":1,
            "likes":0,
            "reply_to_array":[
                "408653",
            "308962"
                ],
            "liked":false,
            "image":{
                "img_id":7170669,
                "user_id":308962,
                "title":"DSC04535 - ",
                "excerpt":"",
                "width":2000,
                "height":1333
            },
            "reply_to":[
            {
                "site_id":"408653",
                "type":"user",
                "name":"LAMHOMEPHONE",
                "domain":"",
                "url":"http:\/\/tuchong.com\/408653\/",
                "icon":"http:\/\/test-static.tuchong.com\/style\/default\/images\/noavatar_small.gif",
                "description":"",
                "followers":0
            },
            {
                "site_id":"308962",
                "type":"user",
                "name":"Rusamuk",
                "domain":"",
                "url":"http:\/\/tuchong.com\/308962\/",
                "icon":"http:\/\/s1.tuchong.net\/sites\/308\/308962\/logo_small.jpg?4",
                "description":"Life is elsewhere, for I just came back from there.",
                "followers":2416
            }
        ],
            "author":{
                "site_id":0,
                "type":"user",
                "name":"匿名影友",
                "domain":null,
                "url":"http:\/\/tuchong.com\/0\/",
                "icon":"http:\/\/test-static.tuchong.com\/style\/default\/images\/noavatar_small.gif",
                "description":"",
                "followers":0
            }
    },
        "result":"SUCCESS"
}
```
