# 更新图博

    POST /post/update/

## 说明
更新多个（或单个）图博的基本信息，包括标题、内容、标签。

## URL
http://tuchong.com/api/post/update/

## 是否需要登陆
是

## 参数

- `post_id` — (可选)。图博id，如果要更新多个图博，则为图博id数组。
- `title` — (可选)。图博标题。
- `content` — (可选)。图博内容。
- `tags` — (可选)。图博标签名称的字符串，用逗号分开，或者为标签名称的数组。

### 例子
**请求**

    POST http://tuchong.com/api/post/update/
**post数据**

    post_id=6483327&content=thisiscontent&tags=tag1%2Ctag2

**返回**
``` json
{
    "count":1,
    "message":"成功修改1个作品",
    "result":"SUCCESS"
}
```
