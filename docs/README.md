<h2 align="center" id="my903api">MY903 PLVE API</h2>

> 叱咤903API koa2 版本, 通过Web网页版请求歌曲接口数据, 有问题请提 [issue](https://github.com/trebleC/my903-plve-api/issues), 或者你有其他想法欢迎`PR`.

<!-- ## API结构图

 -->

## API接口

### 获取派台歌

接口说明: 调用此接口, 可获取最新派台歌歌词

参数列表:

- 可选参数

	- `pageNo`: 页码, 默认值为 `0`

接口地址: `/songs`

调用例子: `/songs?pageNo=0`

示例截图:

![获取903派台歌](https://github.com/trebleC/my903-plve-api/blob/main/screenshot/songs.png?raw=true)


### 获取903专业推介排行

接口说明: 调用此接口, 可获取最新903专业推介排行

参数列表:

- 可选参数

	- `pageNo`: 页码, 默认值为 `0`

接口地址: `/rank`

调用例子: `/rank?pageNo=0`

示例截图:

![获取专业推介](https://github.com/trebleC/my903-plve-api/blob/main/screenshot/rank.png?raw=true)
