import { bundleMdx } from '../dist/index.js'
import * as fs from 'fs'

process.env.NODE_ENV = 'production'

const source = `import { Callout } from "@it-incubator/mdx-components";

# Деплой на Vercel

Деплой на Vercel происходит автоматически при пуше в ветку \`master\`.

## Деплой проекта

1. Зарегистрируйтесь на [Vercel](https://vercel.com/signup).
   Рекомендую использовать GitHub для авторизации.

2. Перейдите на [страницу dashboard](https://vercel.com/dashboard), нажмите на кнопку \`Add New\` и выберите \`Project\`.
   ![Add new project](./images/vercel-new-project.png)

3. Убедитесь что у vercel есть все разрешения для GitHub и выберите репозиторий с проектом.
   ![Select repository](./images/vercel-select-repository.png)

4. Никаких настроек делать не нужно - просто нажмите \`Deploy\`.

5. После деплоя, вам будет доступен URL вашего проекта.

Но, наша задача - задеплоить не только проект, но и **Storybook**.

## Деплой Storybook

1. Создайте новую ветку \`storybook-deploy\` и переключитесь на нее.

2. В корне проекте создайте файл \`vercel.json\` со следующим содержимым:

   \`\`\`json filename="vercel.json" {3} /buildCommand/ /storybook/
   {
     "$schema": "https://openapi.vercel.sh/vercel.json",
     "buildCommand": "pnpm run build-storybook",
     "devCommand": "pnpm run storybook",
     "installCommand": "pnpm i",
     "framework": null,
     "outputDirectory": "./storybook-static"
   }
   \`\`\`

3. Закоммитьте и запушьте изменения в ветку \`storybook-deploy\`.

4. Перейдите в настройки проекта на Vercel и добавьте домен для ветки \`storybook-deploy\`.
   ![Add domain](./images/add-domain.png)

<Callout>
  Если у вас нет собственного домена - можете использовать саб-домены
  vercel.app, как на скриншоте
</Callout>
5. После этого, при каждом пуше в ветку \`storybook-deploy\`, Vercel будет автоматически
деплоить Storybook.

## Настройка github actions

Для того что бы не мерджить две ветки вручную при каждом изменении в проекте, можно настроить github actions.

1. В ветке master/main создайте файл \`.github/workflows/deploy-storybook.yml\` со следующим содержимым:

   \`\`\`yml filename=".github/workflows/deploy-storybook.yml" showLineNumbers {5,17,18}
   name: Build and Deploy Storybook
   on:
     push:
       branches:
         - "master"
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout 🛎️
           uses: actions/checkout@v2.3.1

         - name: Merge dev -> storybook-deploy 🚀
           uses: devmasx/merge-branch@1.4.0
           with:
             type: now
             from_branch: master
             target_branch: storybook-deploy
             github_token: \${{ github.token }}
   \`\`\`

2. В выделенных строках убедитесь что указаны правильные ветки:

   - \`master\` - основная ветка, иногда называется \`main\`
   - \`from_branch: master\` - должна совпадать с основной веткой
   - \`target_branch: storybook-deploy\` - ветка для деплоя Storybook, которую мы создали ранее

3. На GitHub, в **_настройках проекта_** перейдите в \`actions/general\` и для Workflow Permissions выберите \`Read and Write permissions\` и нажмите \`Save\`
   ![actions-setup](./images/workflow-permissions.png)

4. Закоммитьте и запушьте изменения в основную ветку.

5. После этого, при каждом пуше в основную ветку, GitHub Actions будет автоматически мерджить изменения в ветку \`storybook-deploy\`, что приведет к автоматическому деплою Storybook на Vercel.
`


const result = await bundleMdx(source)

fs.writeFileSync('./test.json', JSON.stringify(result), 'utf-8')