---
layout: default
permalink: /
title: "Multilingual Academic Personal Page Template by Hakaze Cho (Yufeng Zhao)"
langs:
  - marker: 'en'
    label: 'English'
  - marker: 'jp'
    label: '日本語'
  - marker: 'zh'
    label: '简体中文'
  - marker: 'mylang'
    label: 'Custom Language'
---

# Multilingual Academic Personal Page Template by Hakaze Cho (Yufeng Zhao)

Features: Multi-language switching, Data-driven publication list.

## How to Start?

1. **Folk [this repo](https://github.com/hc495/Multilingual_Academic_Page_Template){:target="_blank"}, and rename to `your_name.github.io`**
2. **Custom your contents and settings** 
   You need to focus on these files:  
   - `CNAME` to your own site name, empty to use `your_name.github.io`
   - `_config.yml`. Please follow the comments in the `_config.yml`.
   - `README.md` to your own content.
   - `Subpages\` to your own subpages (if any).
   - `Data\` to your own publications. Read the follows and the comments in `Data`.
3. **Open Github pages in repo settings.**

## Multilingual Settings
{:.lang .lang-en}

## 多语言设置
{:.lang .lang-zh}

## -- ..- .-.. - .. .-.. .. -. --. ..- .- .-.. ... . - - .. -. --. ...
{:.lang .lang-mylang}

This template use custom language identifier (e.g., "en", "zh", "jp") to mark and control languages. 
{:.lang .lang-en}

本模板使用语言标识符（如"en", "zh", "jp"）来标记和控制显示语言.

- .... .. ... - . -- .--. .-.. .- - . ..- ... . -.-. ..- ... - --- -- .-.. .- -. --. ..- .- --. . .. -.. . -. - .. ..-. .. . .-. -.--. . .-.-.- --. .-.-.- --..-- .-..-. . -. .-..-. --..-- .-..-. --.. .... .-..-. --..-- .-..-. .--- .--. .-..-. -.--.- - --- -- .- .-. -.- .- -. -.. -.-. --- -. - .-. --- .-.. .-.. .- -. --. ..- .- --. . ... .-.-.-
{:.lang .lang-mylang}

1. In the markdown text, you can use the command {% raw %} {:.lang .lang-{lang-identifier}}, such as {:.lang .lang-en} {% endraw %} under a markdown paragraph to declare the language. For **each paragraph** to be applied with the language switch, do this once. Notice that the blank line will cut the paragraph. Refer to [markdown](https://github.com/hc495/hc495.github.io/blob/master/mainpage.md){:target="_blank"} for an example. If one paragraph is not declared to any language, the paragraph will not be effected by the language switch (i.e., will always be visable).
2. In each markdown file, declare the language in the header by the `langs` dictionary. The `marker`s are the language identifier used in the markdown body, and the `label`s are the words presented in the top-right of the page.
3. You can set the font according to the lang-identifier in the `fonts` of `_config.yml`. English Font Test: in vestitu vario Flora principatur, nemorum dulcisono que cantu celebrantur.
{:.lang .lang-en}

1. 在markdown文件中，您可以在一个段落的下一行使用命令 {% raw %} {:.lang .lang-{lang-identifier}}，如 {:.lang .lang-zh} {% endraw %} 来声明其所属的语言. 对于各个希望被语言切换管理的段落，您需要重复一次这样的操作. 请注意：空行前后的两个部分会被视为两个段落. 请参考这份[markdown](https://github.com/hc495/hc495.github.io/blob/master/mainpage.md){:target="_blank"}的实现. 如果一个段落未被任何语言标识符管理，那么它将不受语言切换的影响，即：总是可见. 
2. 在每一个markdown文件中，请在其头部的`langs`词典中声明该页面应用的语言. `marker`字段指markdown中使用的语言标识符，而`label`指页面右上方语言切换链接中显示的语言标签.
3. 您可以在`_config.yml`的`fonts`中设定对应于语言标识符的字体. 中文字体测试：遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。
{:.lang .lang-zh}

## Publication List Example

{% include paper_statics.html lang='en' %}

{% include paper_statics.html lang='jp' %}

{% include paper_statics.html lang='zh' %}

{% include publication_list.html lang='en' %}

## Acknowledgments

When designing, I referred to the following personal homepage:

- [Yokoi Sho's Personal Page](https://www.cl.ecei.tohoku.ac.jp/~yokoi/index.html){:target="_blank"}
- [Yepeng Ding's Pensonal Page](https://yepengding.github.io/){:target="_blank"}

<div class="end-mark"></div>