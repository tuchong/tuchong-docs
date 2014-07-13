# 删除评论

    POST /comment/delete/

## 说明
删除图博的某一条评论

## URL
http://tuchong.com/api/comment/delete/

## 是否需要登陆
是

## 参数

- `note_id` — (必须)。评论id。

### 例子
**请求**

    POST http://tuchong.com/api/comment/delete/
**post数据**

    note_id=3734528

**返回**
``` json
{
    "result":"SUCCESS"
}
```
