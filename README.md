# aws-ssm-get-param-cli [![CircleCI](https://circleci.com/gh/shelfio/aws-ssm-get-param-cli/tree/master.svg?style=svg)](https://circleci.com/gh/shelfio/aws-ssm-get-param-cli/tree/master)![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

> Fetch SSM parameter

## Usage

```
$ export DOMAIN=$(npx @shelf/aws-ssm-get-param-cli "/prod/domain")
```

## Publish

```sh
$ git checkout master
$ yarn version
$ yarn publish
$ git push origin master --tags
```

## License

MIT © [Shelf](https://shelf.io)
