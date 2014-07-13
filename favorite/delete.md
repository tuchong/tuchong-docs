# 删除分享

    POST /favorite/delete/

## 说明
对图博删除分享

## URL
http://tuchong.com/api/favorite/delete/

## 是否需要登陆
是

## 参数

- `post_id` — (必须)。图博id。
- `target_site_id` — (可选)。发起删除分享请求的小站id，默认为当前登陆用户的id。

### 例子
**请求**

    POST http://tuchong.com/api/favorite/delete/
**post数据**

    post_id=6487300

**返回**
``` json
{
    "favoriteStatus":"unfavorite",
    "favoriteCount":"0",
    "message":"操作成功",
    "result":"SUCCESS"
}
```
