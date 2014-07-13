# 删除图博

    POST /post/delete/

## 说明
删除某一图博

## URL
http://tuchong.com/api/post/delete/

## 是否需要登陆
是

## 参数

- `post_id` — (必须)。要删除的图博id。
- `reason` — (可选)。删除原因，将会以通知的形式发送给被删除图博的作者。

### 例子
**请求**

    POST http://tuchong.com/api/post/delete/
**post数据**

    post_id=6483327&reason=deletereason

**返回**
``` json
{
    "message":"删除成功",
    "redirect":"http:\/\/tuchong.com\/443539\/",
    "result":"SUCCESS"
}
```
