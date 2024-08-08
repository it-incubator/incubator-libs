#!/bin/bash

sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/eslint-config/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/prettier-config/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/stylelint-config/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/tsconfig/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/ui-kit/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/utils/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/md-bundler/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/mdx-components/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/nestjs-logger/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/storage-sdk/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/nodejs-storage-sdk/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/nestjs-prom-metrics/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/telegram-bot-client/.npmrc

