## 树摇晃（ Tree Shaking ）

AoT 编译为接下来通过一个叫做 摇树优化 的过程做好了准备。 
摇树优化器从上到下遍历依赖图谱，并且 摇掉 用不到的代码，这些代码就像是圣诞树中那些死掉的松针一样。


Rollup
这个烹饪宝典中用来示范的摇树优化工具是 Rollup 。

Rollup 会通过跟踪 import 和 export 语句来对本应用进行静态分析。 
它所生成的最终代码 捆 中会排除那些被导出过但又从未被导入的代码。

Rollup 只能对 ES2015 模块摇树，因为那里有 import 和 export 语句。

> 安装 Rollup

```sh
$ npm i -D rollup rollup-plugin-node-resolve rollup-plugin-commonjs rollup-plugin-uglify
``` 

在项目根目录新建一个配置文件（ rollup-config.js ），来告诉 Rollup 如何处理应用.

