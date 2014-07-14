# 创建图博

    POST /post/create/

## 说明
创建一个图博

## URL
http://tuchong.com/api/post/create/

## 是否需要登陆
是

## 参数

- `site_id` — (必须)。小站id。
- `type` — (必须)。图博类型，可选值为('multi-photo', 'text')。分别是发组图，发文字。
- `title` — ()。图博标题，若图博类型为文字，则为必须，否则可选。
- `content` — (可选)。图博内容。
- `tags` — (可选)。图博标签名称的字符串，用逗号分开，或者为标签名称的数组。
- `events` — (可选)。参与的活动的id数组。
- `alb_id` — (可选)。相册id，当创建图博类型为组图时，将发布的图片加入到的相册id。
- `postToWeibo` — (可选)。同步到新浪微博，1为是，0为否，默认为否。
- `is_original` — (可选)。是否原创，1为是，0为否，默认为否。
- `images` — ()。图片的关联数组，若图博类型为组图，则为必须，否则可选。

### 例子
**请求**

    POST http://tuchong.com/api/favorite/create/
**post数据**

    post_id=6487300

**返回**
``` json
{
    "favoriteStatus":"favorite",
    "favoriteCount":"1",
    "message":"分享成功",
    "result":"SUCCESS"
}
```
