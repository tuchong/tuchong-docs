# 创建分享

    POST /favorite/create/

## 说明
对图博创建分享

## URL
http://tuchong.com/api/favorite/create/

## 是否需要登陆
是

## 参数

- `post_id` — (必须)。图博id。
- `target_site_id` — (可选)。发起分享请求的小站id，默认为当前登陆用户的id。

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
