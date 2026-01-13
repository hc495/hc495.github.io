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
3. **Open Github pages in repo settings.** (Step 6 - 9 in [this guide](https://docs.github.com/en/pages/quickstart){:target="_blank"})

## Multilingual Settings
{:.lang .lang-en}

## 多语言设置
{:.lang .lang-zh}

## -- ..- .-.. - .. .-.. .. -. --. ..- .- .-.. ... . - - .. -. --. ...
{:.lang .lang-mylang}

This template use custom language identifier (e.g., "en", "zh", "jp") to mark and control languages. 
{:.lang .lang-en}

このテンプレートでは、独自の言語識別子（例：「en」「zh」「jp」）を用いて言語の指定および制御を行う.
{:.lang .lang-jp}

本模板使用语言标识符（如"en", "zh", "jp"）来标记和控制显示语言.
{:.lang .lang-zh}

- .... .. ... - . -- .--. .-.. .- - . ..- ... . -.-. ..- ... - --- -- .-.. .- -. --. ..- .- --. . .. -.. . -. - .. ..-. .. . .-. -.--. . .-.-.- --. .-.-.- --..-- .-..-. . -. .-..-. --..-- .-..-. --.. .... .-..-. --..-- .-..-. .--- .--. .-..-. -.--.- - --- -- .- .-. -.- .- -. -.. -.-. --- -. - .-. --- .-.. .-.. .- -. --. ..- .- --. . ... .-.-.-
{:.lang .lang-mylang}

1. In the markdown text, you can use the command {% raw %} {:.lang .lang-{lang-identifier}}, such as {:.lang .lang-en} {% endraw %} under a markdown paragraph to declare the language. For **each paragraph** to be applied with the language switch, do this once. Notice that the blank line will cut the paragraph. Refer to [markdown](https://github.com/hc495/hc495.github.io/blob/master/mainpage.md){:target="_blank"} for an example. If one paragraph is not declared to any language, the paragraph will not be effected by the language switch (i.e., will always be visable).
2. In each markdown file, declare the language in the header by the `langs` dictionary. The `marker`s are the language identifier used in the markdown body, and the `label`s are the words presented in the top-right of the page.
3. You can set the font according to the lang-identifier in the `fonts` of `_config.yml`. English Font Test: in vestitu vario Flora principatur, nemorum dulcisono que cantu celebrantur.
{:.lang .lang-en}

1. Markdown テキスト内では、Markdown 段落の直下に {% raw %}{:.lang .lang-{lang-identifier}}{% endraw %}`（例：`{% raw %}{:.lang .lang-en}{% endraw %}）というコマンドを記述することで、言語を宣言できる. 言語切り替えを適用したい各段落ごとに、この指定を一度行うこと. なお、空行が入ると段落は分割される点に注意されたい. 具体例については、[markdown](https://github.com/hc495/hc495.github.io/blob/master/mainpage.md){:target="_blank"} を参照のこと. いずれの言語にも宣言されていない段落は、言語切り替えの影響を受けず（すなわち常に表示される）. 
2. 各 Markdown ファイルのヘッダにおいて、langs 辞書を用いて言語を宣言する. marker は Markdown 本文中で使用する言語識別子であり、label はページ右上に表示される表記である.
3. `_config.yml` の fonts において、lang-identifier に応じたフォントを設定できる。
{:.lang .lang-jp}

4. 在markdown文件中，您可以在一个段落的下一行使用命令 {% raw %} {:.lang .lang-{lang-identifier}}，如 {:.lang .lang-zh} {% endraw %} 来声明其所属的语言. 对于各个希望被语言切换管理的段落，您需要重复一次这样的操作. 请注意：空行前后的两个部分会被视为两个段落. 请参考这份[markdown](https://github.com/hc495/hc495.github.io/blob/master/mainpage.md){:target="_blank"}的实现. 如果一个段落未被任何语言标识符管理，那么它将不受语言切换的影响，即：总是可见. 
5. 在每一个markdown文件中，请在其头部的`langs`词典中声明该页面应用的语言. `marker`字段指markdown中使用的语言标识符，而`label`指页面右上方语言切换链接中显示的语言标签.
6. 您可以在`_config.yml`的`fonts`中设定对应于语言标识符的字体. 中文字体测试：遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。
{:.lang .lang-zh}

## Publication List Example

The publication list is recorded in YAML files located in the `data/` directory (see details below) and is categorized and configured in `_config.yml`.
This categorization is mainly intended to accommodate different output format requirements for different types of publications. For example, this template includes two types of publications—international conference papers and preprints, which require different output formats (see details below). Therefore, in the `publication_list` section of `_config.yml`, their source files, titles, output styles, and whether they are included in publication statistics are configured separately.
You may add or remove publication types in _config.yml according to your needs, and add the corresponding YAML files in the `Data/` directory.
{:.lang .lang-en}

**Publication List Source.** The YAML files in the `data/` directory store detailed information about publications; see the examples for details.
Please note that the filenames `authors.yml` and `venues.yml` in the `data/` directory are reserved keywords and must not be changed, even if you do not use them. These files define shorthand entries for authors and venues, allowing them to be conveniently referenced in publication records. If an author or venue is not registered in these files, their information can also be specified directly as a string.
Note that a venue must be registered in venues.yml in order for it to be included in the cumulative statistics of impact factor and H5 Index.
{:.lang .lang-en}

**Publication List Style.** The `_includes/publication_list_style` directory contains template files for generating different types of publication lists, written in the Jekyll language.
You may modify these template files according to your needs, or add new template files as required. If you add a new template file, please also add a corresponding entry to `_includes/publication_list_style/index.html` by following the existing examples.
{:.lang .lang-en}

論文一覧は `data/` フォルダ内の YAML ファイルにより記録され（詳細は後述）、`_config.yml` において分類・設定される.
この分類は、論文の種類ごとに異なる出力形式の要件に対応することを主な目的としている。例えば、本テンプレートには国際会議論文とプレプリントという二種類の論文タイプが含まれており、それぞれ異なる出力形式を必要とする（詳細は後述）. そのため、`_config.yml` の `publication_list` 項目では、各論文タイプについて、対応するソースファイル、タイトル、出力形式、および論文数の集計対象とするかどうかを個別に設定している.
利用者は自身の要件に応じて `_config.yml` 内で論文タイプを追加・削除し、あわせて `Data/` フォルダ内に対応する YAML ファイルを追加することができる.
{:.lang .lang-jp}

**論文情報.** `data/` フォルダ内の YAML ファイルには、論文に関する詳細な情報が記録されている。具体例についてはサンプルを参照されたい.
なお、`data/` フォルダ内の `authors.yml` および `venues.yml` は予約されたファイル名であり、使用しない場合であっても変更してはならない. これらのファイルには、著者名や会議名の簡易表記（ショートハンド）が定義されており、論文エントリ内から迅速に参照できるようになっている. これらのファイルに登録されていない場合でも、文字列として著者や会議の情報を直接記述することは可能である.
ただし、会議の簡易表記を venues.yml に登録しておかなければ、インパクトファクターおよび H5 Index の累積統計には反映されない点に注意されたい.
{:.lang .lang-jp}

**フォーマットファイル.** `_includes/publication_list_style` フォルダには、異なる種類の論文一覧を生成するためのフォーマットファイルが含まれており、Jekyll 言語で記述されている。
利用者は自身の要件に応じてこれらのフォーマットファイルを編集することも、新たなフォーマットファイルを追加することもできる. 新しいフォーマットファイルを追加した場合は、既存の形式に倣って `_includes/publication_list_style/index.html` に索引を追加すること.
{:.lang .lang-jp}

论文列表由`data/`文件夹中的YAML文件记录（详见下述），并在`_config.yml`中进行分类配置. 这种分类主要为了满足不同种类论文的输出格式不同的需求，比如，本示例包含了国际会议和预印本两种论文类型，它们需要不同的输出格式（详见下述），因此`_config.yml`的`publication_list`项目中分别配置了它们的源文件，标题，输出格式和是否参与论文统计. 您可以在`_config.yml`中根据自己的需求添加或删除论文类型，并在`Data/`文件夹中添加相应的YAML文件.
{:.lang .lang-zh}

**论文数据** `data/`文件夹中的YAML文件记录了论文的具体信息，详见示例. 请注意，`data/`文件夹中的`authors.yml`和`venues.yml`的文件名是关键词，不可修改，即使您不使用它们. 它们记录了作者或会议的快捷方式，以便在论文条目中迅速引用. 如不在文件中注册，也可以使用字符串形式保存作者或会议的信息. 需要注意，您必须在`venues.yml`中记录会议快捷方式，才能使它们参与统计累计影响因子和H5 Index.
{:.lang .lang-zh}

**论文列表格式.** `_includes/publication_list_style`文件夹中包含了生成不同类型论文列表的格式文件，由`jekyll`语言编写. 您可以根据自己的需求修改这些格式文件，或者添加新的格式文件. 如果您添加新的格式文件，请在`_includes/publication_list_style/index.html`中仿照现有格式添加索引.
{:.lang .lang-zh}

Insert {% raw %} {% include paper_statics.html lang='lang-identifier' %} {% endraw %}, e.g., {% raw %} {% include paper_statics.html lang='en' %} {% endraw %}, to include the paper statistics line for the specified language. Edit the `publication_statics` dictionary in the `_config.yml` for detailed settings.
{:.lang .lang-en}

Insert {% raw %} {% include publication_list.html lang='lang-identifier' %} {% endraw %}, e.g., {% raw %} {% include publication_list.html lang='jp' %} {% endraw %}, to include the publication list for the specified language. The publication data are stored in the `Data/` folder in YAML format. Please refer to the comments in the sample files for detailed instructions.
{:.lang .lang-jp}

You don't need to add language identifiers after these includes, as the include files have them built-in.  
{:.lang .lang-en}

You don't need to add language identifiers after these includes, as the include files have them built-in.  
{:.lang .lang-jp}

插入 {% raw %} {% include paper_statics.html lang='lang-identifier' %} {% endraw %}，例如 {% raw %} {% include paper_statics.html lang='zh' %} {% endraw %}，来包含指定语言的论文统计行. 具体设置请编辑 `_config.yml` 中的 `publication_statics` 词典.
{:.lang .lang-zh}

您无需在这些include后添加语言标识符，include文件已经内置了它们.  
{:.lang .lang-zh}

{% include paper_statics.html lang='en' %}

{% include paper_statics.html lang='jp' %}

{% include paper_statics.html lang='zh' %}

{% include publication_list.html lang='en' %}

{% include publication_list.html lang='jp' %}

{% include publication_list.html lang='zh' %}

## Acknowledgments

Example background image is from [Pixiv](https://www.pixiv.net/artworks/88175245){:target="_blank"}.

When designing, I referred to the following personal homepage:

- [Sho Yokoi's Personal Page](https://www.cl.ecei.tohoku.ac.jp/~yokoi/index.html){:target="_blank"}
- [Yepeng Ding's Personal Page](https://yepengding.github.io/){:target="_blank"}
- [Dong Li's Personal Page](https://dong.li/){:target="_blank"}
- [Kentaro Inui's Personal Page](https://kentaro-inui.github.io/){:target="_blank"}

<div class="end-mark"></div>