---
title: '自分用マークダウン記法のチートシート'
date: '20210109'
category: ['その他']
---

このブログのマークダウン記法のチートシートを下記に示す。

(自分が記事を書く際に見るための備忘録としてまとめた記事です。)

# サンプル1

## サンプル2

### サンプル3

#### サンプル4

##### サンプル5

###### サンプル6

## リスト表記

- list1
  - nested list1_1
    - list
    - list
  - nested list1_2
- list2
- list3

## 番号付きリスト

1. inc list1
  1. inc list1_1
  2. inc list1_2
2. inc list2
3. inc list3

*現状、ネストした番号付きリストに出来ていない。*

## テキスト

テキスト sample sample sample sample sample sample sampleテキスト sample sample sample sample sample sample sampleテキスト sample sample sample sample sample sample sampleテキスト [sample](#) sample sample sample sample sample sampleテキスト sample sample sample sample sample sample sampleテキスト sample sample sample sample sample sample sample

## 引用

> sample sample sample sample sample sampleテキスト sample sample sample sample sample sample sampleテキスト sample sample sample sample sample sample sampleテキスト sample sample sample sample sample sample sampleテキスト sample sample sample sample sample sample sample

> <cite>[引用元](#)</cite>

二重引用

> sample test
>
>> double cite sample text

*現状、引用内で改行が出来ていない。*


## テーブル

|Normal|Center|Right|
|---|:-:|--:|
|sample text sample text sample text sample text sample text sample text sample text sample text|sample text sample text sample text sample text sample text sample text sample text sample text|sample text sample text sample text sample text sample text sample text sample text sample text|
|sample text sample text sample text sample text sample text sample text sample text sample text|sample text sample text sample text sample text sample text sample text sample text sample text|sample text sample text sample text sample text sample text sample text sample text sample text|
|sample text sample text sample text sample text sample text sample text sample text sample text|sample text sample text sample text sample text sample text sample text sample text sample text|sample text sample text sample text sample text sample text sample text sample text sample text|
|sample text sample text sample text sample text sample text sample text sample text sample text|sample text sample text sample text sample text sample text sample text sample text sample text|sample text sample text sample text sample text sample text sample text sample text sample text|
|sample text sample text sample text sample text sample text sample text sample text sample text|sample text sample text sample text sample text sample text sample text sample text sample text|sample text sample text sample text sample text sample text sample text sample text sample text|


## コード

```javascript
import React, { FC } from 'react';
import Layout from '../components/Layout';
import { AllMarkdownRemark } from '../types';

type Props = {
  data: AllMarkdownRemark;
};

const IndexPage: FC<Props> = () => (
  <Layout activePath={location.pathname}>
    当サイトは、サイト管理者が日常で得たIT知識を備忘録も兼ねてまとめたサイトです。
  </Layout>
);

export default IndexPage;
```

```java
package l2f.gameserver.model;

public abstract strictfp class L2Char extends L2Object {
  public static final Short ERROR = 0x0001;

  public void moveTo(int x, int y, int z) {
    _ai = null;
    log("Should not be called");
    if (1 > 5) { // wtf!?
      return;
    }
  }
}

```

*現状、ファイル名や行数の表示が出来ていない。*


## 注釈

注釈text[^1]


[^1]: 注釈先です。

## code記法

gatsbyは、`gatsby-cli`です

## 強調

アスタリスクで囲む *sample*

アンダースコアで囲む _sample_

アスタリスク2個で囲む **sample**

アンダースコア2個で囲む __sample__

アスタリスク3個で囲む`***sample***` ***sample***

アンダースコア3個で囲む`___sample___` ___sample___

### 水平線

アスタリスク3個 `***`

***

ハイフン3個 `---`

---

アンダースコア3個 `___`

___


## リンク

`[google](https://www.google.co.jp/)`

[google](https://www.google.co.jp/)

`https://www.google.co.jp/`

https://www.google.co.jp/

*現状、リンククリック時に新規ウィンドウで開くことが出来ていない。*

## 取り消し線

`~~sample~~`

~~sample~~

## 折り畳み

```
<details>
  <summary>aaaaaaaaaaaaaaaaa</summary>
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
</details>
```

<details>
  <summary>aaaaaaaaaaaaaaaaa</summary>
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
</details>

## チェックボックス

```
- [ ] チェック無し
- [x] チェック有り
```

- [ ] チェック無し
- [x] チェック有り

## 画像

```
![sampleImage](/assets/markdown-sample/sampleImage.png)
```

![sampleImage](/assets/markdown-sample/sampleImage.png)
