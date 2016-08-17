
学习了下Hbuilder+Mui，Mui这个框架是快速开发安卓和ios端H5应用的一个利器。唯一的缺点就是开源项目太少，并且开发文档编写水平低，有的重要函数都不知道是用来做什么的....

由于h5对我来说学习成本比较低，所以简单给博客做了一个app。是根据官方提供的的36kr阅读器改造而来的，具体参见：https://github.com/dcloudio/casecode/tree/master/reader

针对hexo类博客需要注意的是，博客本身都是静态html，怎么考虑文章的增量获取和刷新呢？仅仅通过rss不行，因为rss最多只显示最新的几十篇文章。所以最好采用类似谷歌之前rss阅读器的那种api接口，但是google rss已经退出市场，只能找feedly进行代替。

feedly api接口文档：https://developer.feedly.com/

有了文章获取的接口，剩下的就是开发了，其实就是把36kr阅读器改改，官方提供的这个例子并不好，代码耦合太多，后续有时间可以进一步改进。

附上安卓版安装包和截图：
apk下载：http://pan.baidu.com/s/1boNLtsr

截图：
<!-- more -->
![](http://ww1.sinaimg.cn/bmiddle/7d6b7503jw1f6ve9388d9j20jz0zkwgd.jpg)
![](http://ww3.sinaimg.cn/bmiddle/7d6b7503jw1f6vea1rssoj20jz0zkacy.jpg)

PS:IOS端没有证书所以不能发布，重复文章是因为feedly自身的问题...