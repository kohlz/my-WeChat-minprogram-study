# 微信小程序学习

## 基本组件

- 视图容器
  - [movable-area](https://github.com/kohlz/my-WeChat-minprogram-study/tree/master/miniprogram/pages/movable-area)
  - [scroll-view](https://github.com/kohlz/my-WeChat-minprogram-study/tree/master/miniprogram/pages/scroll-view)
  - [swiper](https://github.com/kohlz/my-WeChat-minprogram-study/tree/master/miniprogram/pages/swiper)

- 基础内容
  - [icon](https://github.com/kohlz/my-WeChat-minprogram-study/tree/master/miniprogram/pages/icon)
  - [progress](https://github.com/kohlz/my-WeChat-minprogram-study/tree/master/miniprogram/pages/progress)
  - [rich-text](https://github.com/kohlz/my-WeChat-minprogram-study/tree/master/miniprogram/pages/rich-text)
  - [text](https://github.com/kohlz/my-WeChat-minprogram-study/tree/master/miniprogram/pages/text)
- [表单](https://github.com/kohlz/my-WeChat-minprogram-study/tree/master/miniprogram/pages/form)
  - button
  - checkbox
  - radio-group
  - label
  - picker
  - switch
  - slider
  - input
  - textarea
- 媒体组件
  - [audio](https://github.com/kohlz/my-WeChat-minprogram-study/tree/master/miniprogram/pages/audio)
  - [camera](https://github.com/kohlz/my-WeChat-minprogram-study/tree/master/miniprogram/pages/camera)
  - [image](https://github.com/kohlz/my-WeChat-minprogram-study/tree/master/miniprogram/pages/image)
  - [video](https://github.com/kohlz/my-WeChat-minprogram-study/tree/master/miniprogram/pages/video)

## 项目结构

```
.
│  .gitignore
│  project.config.json
│  project.private.config.json
│  README.md
│  uploadCloudFunction.bat
│
├─cloudfunctions
│  └─quickstartFunctions
│      │  config.json
│      │  index.js
│      │  package.json
│      │
│      ├─createCollection
│      │      index.js
│      │
│      ├─getMiniProgramCode
│      │      index.js
│      │
│      ├─getOpenId
│      │      index.js
│      │
│      ├─selectRecord
│      │      index.js
│      │
│      ├─sumRecord
│      │      index.js
│      │
│      └─updateRecord
│              index.js
│
└─miniprogram
    │  app.js
    │  app.json
    │  app.wxss
    │  envList.js
    │  sitemap.json
    │
    ├─images
    │      1.jpg
    │      2.jpg
    │
    └─pages
        ├─audio
        │      audio.js
        │      audio.json
        │      audio.wxml
        │      audio.wxss
        │
        ├─camera
        │      camera.js
        │      camera.json
        │      camera.wxml
        │      camera.wxss
        │
        ├─form
        │      form.js
        │      form.json
        │      form.wxml
        │      form.wxss
        │
        ├─icon
        │      icon.js
        │      icon.json
        │      icon.wxml
        │      icon.wxss
        │
        ├─image
        │      image.js
        │      image.json
        │      image.wxml
        │      image.wxss
        │
        ├─index
        │      index.js
        │      index.json
        │      index.wxml
        │      index.wxss
        │
        ├─movable-area
        │      movable-area.js
        │      movable-area.json
        │      movable-area.wxml
        │      movable-area.wxss
        │
        ├─progress
        │      progress.js
        │      progress.json
        │      progress.wxml
        │      progress.wxss
        │
        ├─rich-text
        │      rich-text.js
        │      rich-text.json
        │      rich-text.wxml
        │      rich-text.wxss
        │
        ├─scroll-view
        │      scroll-view.js
        │      scroll-view.json
        │      scroll-view.wxml
        │      scroll-view.wxss
        │
        ├─swiper
        │      swiper.js
        │      swiper.json
        │      swiper.wxml
        │      swiper.wxss
        │
        ├─text
        │      text.js
        │      text.json
        │      text.wxml
        │      text.wxss
        │
        └─video
                video.js
                video.json
                video.wxml
                video.wxss
```



## 关于作者

| 姓名     | 朱皓哲                     |
| -------- | -------------------------- |
| 学校     | 七宝德怀特                 |
| 联系方式 | hzzhu_kohl@qibaodwight.org |

