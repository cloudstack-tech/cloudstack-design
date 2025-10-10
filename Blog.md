# 踩坑记录

1. tailwindcss 的 @plugin 的调用路径上如果出现了其他 ts 文件，会导致路径引用失败，需要一个干净的文件单独导出 plugin
2. 可以使用 plop 来创建模版用于快速搭建项目
3. tsup 的 entry 下不能有多个 css 文件，不然会导致 dts 生成失败（莫名其妙）
