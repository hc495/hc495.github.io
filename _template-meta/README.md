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

1. **Folk this repo, and rename to `your_name.github.io`**
2. **Custom your contents and settings** 
   You need to focus on these files:  
   - `CNAME` to your own site name, empty to use `your_name.github.io`
   - `_config.yml`. Please follow the comments in the `_config.yml`.
   - `README.md` to your own content.
   - `Subpages\` to your own subpages (if any).
   - `Data\` to your own publications. Read the follows and the comments in `Data`.
3. **Open Github pages in repo settings.**

## Publication List Example

{% include publication_list.html lang='en' %}

您可能注意到我在自己的主页设计了一个论文导出功能，但目前这项功能并未得到针对复用性的维护，故是一项TBA

## Acknowledgments

When designing, I referred to the following personal homepage:

- [Yokoi Sho's Personal Page](https://www.cl.ecei.tohoku.ac.jp/~yokoi/index.html){:target="_blank"}
- [Yepeng Ding's Pensonal Page](https://yepengding.github.io/){:target="_blank"}

<div class="end-mark"></div>