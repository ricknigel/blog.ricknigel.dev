---
title: 'Serverless Frameworkを使用してAPI Gatewayにカスタムドメインを設定する方法'
date: '2021/04/10'
category: ['AWS']
---

## 概要

Serverless Frameworkを使用して、API Gatewayにカスタムドメインを設定する際、まずそのカスタムドメインをRoute53で管理しているかどうかで設定方法が異なります。

Route53でドメインを管理している場合、とても楽にServerless FrameworkからAPI Gatewayにカスタムドメインを設定することが出来ます。(そういった記事は調べればたくさん出てきます)

また、外部サービスでドメインを購入している場合、上記のように楽に設定するするには、サブドメインをRoute53に委任する必要があります。

外部サービスからRoute53にドメインを委任する方法は、[こちらの記事](http://developersnote.jp/aws/route53.html)が参考になります。

上記記事を確認するとわかりますが、Route53にドメインを委任するには、ホストゾーンを1つ登録する必要が有り、ここに**月0.5USD**の料金が掛かります。

大した額では無いのですが、DNS周りの知識が浅い私は、Route53に委任する方法しかないと思っておりました。

しかし、Route53にサブドメインを委任せず、無料でカスタムドメインをAPI Gatewayに設定する方法が有ったため、その手順を備忘録として記事にしました。

## 前提

- ドメインは、Route53ではない外部のサービス(この記事ではお名前ドットコムを利用)で購入している
- API Gatewayで設定するカスタムドメインにサブドメインを使用する
- 証明書は**AWS Certificate Manager**(ACM)より発行されたものを使用する
- この記事では、サブドメインとして```sub.ricknigel.dev```を使用する
- Serverless Frameworkの認証周りの設定は完了済みである
- Serverless Frameworkを使用してAPI Gatewayを構築する
- API Gatewayは、東京リージョン(ap-northeast-1)で構築する

## 手順

### 1. ACMにてカスタムドメインへ証明書の発行をリクエストする

まずAWSのマネジメントコンソールより、ACMに移動します。
この時、Serverless Frameworkで構築するAPI Gatewayのエンドポイントタイプによって、リージョンを変更する必要が有ります。

- エッジ最適化の場合、```バージニア北部リージョン(us-east-1)```
- リージョンの場合、API Gatewayと同じリージョン(この記事では```ap-northeast-1```)

Serverless Frameworkを使用してAPI Gatewayを構築する場合、エンドポイントタイプのデフォルトはエッジ最適化が設定されるため、ここでは```us-east-1```にてACMでの作業を実施します。

#### 「証明書のリクエスト」をクリック

![acm1](/assets/setting-custom-domain-in-apigateway/acm1.png)


#### 「パブリック証明書のリクエスト」を選択し、「証明書のリクエスト」をクリック

![acm2](/assets/setting-custom-domain-in-apigateway/acm2.png)

#### 使用するサブドメインを入力し、「次へ」をクリック

![acm3](/assets/setting-custom-domain-in-apigateway/acm3.png)

#### 「DNSの検証」が選択状態のまま、「次へ」をクリック

![acm4](/assets/setting-custom-domain-in-apigateway/acm4.png)

#### 何も設定せず「確認」をクリック

![acm5](/assets/setting-custom-domain-in-apigateway/acm5.png)

####  「確定とリクエスト」をクリック

![acm6](/assets/setting-custom-domain-in-apigateway/acm6.png)

####  CNAMEに設定する値が表示されるので、画像の①、②の値をメモしておく

ステータスは検証保留中となる。

![acm7](/assets/setting-custom-domain-in-apigateway/acm7.png)

#### DNSサーバにCNAMEレコードを追加する

ここでは、ドメイン購入元のお名前ドットコムでレコードを追加する。

![acm8](/assets/setting-custom-domain-in-apigateway/acm8.png)

#### ステータスが発行済みとなったことを確認する

CNAMEレコードを追加後、20分程待った後に再度ACMを開くとステータスが発行済みとなる。

これでドメインへの証明書の発行が完了となる。

![acm9](/assets/setting-custom-domain-in-apigateway/acm9.png)

### 2. Serverless FrameworkでAPI Gatewayを構築する

#### Serverlessのプロジェクトを作成

ここではランタイムを```Node.js```、プロジェクト名を```custom-domain-test```にしました。

```shell
$ sls create -t aws-nodejs -p custom-domain-test
$ cd custom-domain-test
```

serverless.ymlは、下記のようになります。(コード部分)

```yml
service: custom-domain-test
frameworkVersion: '2'

provider:
  name: aws
  runtime: nodejs12.x
  lambdaHashingVersion: 20201221

functions:
  hello:
    handler: handler.hello
```

#### serverless-domain-managerをインストールする

```shell
$ npm init -y
$ npm i -D serverless-domain-manager
```

#### serverless.ymlを編集する

リージョンを東京リージョン(ap-northeast-1)に設定する。

```yml
provider:
  name: aws
  runtime: nodejs12.x
+  region: ap-northeast-1
  lambdaHashingVersion: 20201221
```

カスタムドメインの設定を追加

この時、```createRoute53Record```には、```false```を設定する。

```yml
+ plugins:
+   - serverless-domain-manager

+ custom:
+   customDomain:
+     stage: dev
+     domainName: sub.ricknigel.dev
+     certificateName: sub.ricknigel.dev
+     basePath: ''
+     createRoute53Record: false
```

functionsにAPI Gatewayの設定を追加

```yml
  functions:
    hello:
      handler: handler.hello
+     events:
+       - http:
+           path: test
+           method: get
```

#### API Gatewayで使用するカスタムドメインを作成

```shell
$ sls create_domain
```

コマンド実行後、マネジメントコンソールよりAPI Gatewayのカスタムドメイン欄にて、カスタムドメインが追加されている(リージョンは、東京を指定)

![confirm](/assets/setting-custom-domain-in-apigateway/confirm.png)

#### AWSへデプロイする

この時、API Gatewayのエンドポイントも表示されるので、メモする。

```shell
$ sls deploy
...
endpoints:
  GET - https://xxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/dev/test
...
```

#### CNAMEレコードを追加する

メモしたエンドポイントのドメインを値に設定する

![cname](/assets/setting-custom-domain-in-apigateway/cname.png)

しばらくすると、DNSが切り替わります。下記コマンドで切り替わったことが確認できます。

```shell
$ dig sub.ricknigel.dev CNAME
...
;; ANSWER SECTION:
sub.ricknigel.dev.	3523	IN	CNAME	xxxxxxxxxx.execute-api.ap-northeast-1.amazonaws.com.
...
```

先ほど追加したAPI Gatewayのドメインが表示されていれば切り替え完了となります。

作成したAPIを実行してみます。

```shell
$ curl https://sub.ricknigel.dev/test
{
  "message": "Go Serverless v1.0! Your function executed successfully!",
  "input": {
    "resource": "/test",
    "path": "/test",
    "httpMethod": "GET",
...
```

お疲れ様でした。これでAPI Gatewayのカスタムドメインの設定は完了となります。

---

## 参考記事

- [Serverless Framework - AWS Lambda Events - API Gateway](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/)
- [Route53でサブドメインだけ管理する方法](http://developersnote.jp/aws/route53.html)
- [API Gatewayでカスタムドメインを利用する（SSL証明書のみAWS機能で用意するパターン）](https://dev.classmethod.jp/articles/api-gateway-custom-domain/)
- [[AWS] Serverless Frameworkで独自ドメインをSSL付きで設定する](https://blog.katsubemakito.net/aws/lambda-with-serverless-framework2)
