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

This template use custom language identifier (e.g., "en", "zh", "jp") to mark and control languages. 
{:.lang .lang-en}

1. In the text, you can use the command {% raw %} {:.lang .lang-{lang-identifier}}, such as {:.lang .lang-en} {% endraw %} under a markdown paragraph to declare the language. For **each paragraph** to be applied with the language switch, do this once. Refer to [markdown](https://github.com/hc495/hc495.github.io/blob/master/mainpage.md){:target="_blank"} for an example.
2. In each markdown file, declare the language in the header by the `langs` dictionary. The `marker`s are the language identifier used in the markdown body, and the `label`s are the words presented in the top-right of the page.
{:.lang .lang-en}

English Font Test: in vestitu vario Flora principatur, nemorum dulcisono que cantu celebrantur.
{:.lang .lang-en}

中文字体测试：遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。
{:.lang .lang-zh}

## Publication List Example

{% include publication_list.html lang='en' %}

您可能注意到我在自己的主页设计了一个论文导出功能，但目前这项功能并未得到针对复用性的维护，故是一项TBA

## Acknowledgments

When designing, I referred to the following personal homepage:

- [Yokoi Sho's Personal Page](https://www.cl.ecei.tohoku.ac.jp/~yokoi/index.html){:target="_blank"}
- [Yepeng Ding's Pensonal Page](https://yepengding.github.io/){:target="_blank"}

<div class="end-mark"></div>