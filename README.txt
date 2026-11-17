TIME IN FOLDS 网站初版
========================

这是一个可运行的静态网站原型，包含首页、作品展厅占位区、材料档案弹窗、五阶段时间轴和创作档案。

如何运行（Windows）
1. 解压整个 ZIP 文件。
2. 安装 VS Code：https://code.visualstudio.com/
3. 在 VS Code 中选择「文件」->「打开文件夹」，选择解压后的 time_in_folds_site 文件夹。
4. 在左侧文件列表中点击 index.html。
5. 最简单的运行方式：在文件管理器中双击 index.html，用浏览器打开。
6. 推荐方式：在 VS Code 左侧「扩展」中搜索 Live Server，安装后，右键 index.html -> Open with Live Server。

如何替换作品图片
- 将图片放进 assets 文件夹。
- 后续可以把 index.html 中的占位区域替换成 <img src="assets/你的图片文件名.jpg">。
- 目前角度按钮只是界面交互演示，不代表真实 360° 旋转。
- 真正 360° 旋转需要准备 3D 模型（例如 glb/glTF）并接入 3D 查看器。

说明
当前图片区域是占位设计，不包含用户自己的羊作品图片。收到作品正面、侧面、背面及细节图后，才能替换成真实作品内容。
