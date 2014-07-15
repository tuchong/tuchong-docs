# 取消关注站点

    POST /site/unfollow/

## 说明
取消关注站点/用户

## URL
http://tuchong.com/api/site/unfollow/

## 是否需要登陆
是

## 参数

- `site_id` — (必须)。用户id或小站id。

### 例子
**请求**

    POST http://tuchong.com/api/site/unfollow/
**post数据**

    site_id=66008

**返回**
``` json
{
    "message":"取消关注成功",
    "result":"SUCCESS"
}
```
