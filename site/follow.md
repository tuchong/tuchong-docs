# 关注站点

    POST /site/follow/

## 说明
关注站点/用户

## URL
http://tuchong.com/api/site/follow/

## 是否需要登陆
是

## 参数

- `site_id` — (必须)。用户id或小站id。

### 例子
**请求**

    POST http://tuchong.com/api/site/follow/
**post数据**

    site_id=66008

**返回**
``` json
{
    "message":"关注成功",
    "hint":"正在刷新页面",
    "result":"SUCCESS"
}
```
