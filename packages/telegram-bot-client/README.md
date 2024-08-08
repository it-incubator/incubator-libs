## <u>INSTRUCTION:</u>
##Чтобы установить пакет в проекте:
- добавить в корень проекта файл <b>.npmrc</b> c содержимым:
>@it-incubator:registry=https://npm.pkg.github.com

- <b>npm install @it-incubator/telegram-bot-client</b>
- изменить docker file (связаться с Артемом)

## for nestJS

<b>module.ts:</b>
```JS
import { BotService } from 'telegram-bot-client'

...
providers: [{
   provide: BotService.name,
   useFactory: () => 
     new BotService({
       baseUrl: 'URL',
       friendsToken: 1234,
     }),
}],
...
```
<b>service.ts:</b>
```JS
import { BotService } from 'telegram-bot-client'

...
constructor(
    @Inject(BotService.name)
    private readonly botHttpService: BotService
) {}

...
//this.botHttpService.sendMessage(Array<BodyType>)
const res = await this.botHttpService.sendMessage([
      {
        message: 'hello world =)',
        messengerUserId: 123456,
        autoRemoveAfterSeconds: 60,
        bodyType: 2,
      },
    ]);
...
```
<b>types:</b>
```TypeScript
type BodyType = {
    message: string,
    messengerUserId: number
    autoRemoveAfterSeconds: number,
    bodyType: MessageBodyTypes,
}
export enum MessageBodyTypes {
    PlainText = 0,
    MarkUp2 = 1,
    Html = 2
}
```
## for express.js

```JavaScript
import { BotService} from 'telegram-bot-client'

const botService = new BotService({baseUrl:' ', friendsToken: ' '})
botService.sendMessage(body)
```
***

## Example (nestJS):
<b>module.ts:</b>
```JS
import { BotService } from 'telegram-bot-client';

@Module({
  providers: [
    TelegramService,
    {
      provide: BotService.name,
      useFactory: () =>
        new BotService({
          baseUrl: 'https://st-students-bot-api.herokuapp.com',
          friendsToken: '123',
        }),
    },
  ],
})
export class TelegramModule {}
```
<b>service.ts:</b>
```JS
import { BotService } from 'telegram-bot-client';

@Injectable()
export class TelegramService {
  constructor(
      @Inject(BotService.name)
      private readonly botHttpService: BotService
) {}

async sendMessage(){
    return this.botHttpService.sendMessage([
      {
        message: 'hello world =)',
        messengerUserId: 123456,
        autoRemoveAfterSeconds: 60,
        bodyType: 2,
      },
    ]);
  }
}

```
***
# Ниже флоу создания этого проекта:

## Глобальный eslint (не обязательно)
- <b>npm install -g incubator-cli</b> (глобально)
- <b>incubator install linters</b> (в папке проекта)
- и в самом проекте потом после запуска ставим автоподгрузку eslint & prettier


## создание ПАКЕТа
- <b>npx tsdx create ИМЯ</b>

Далее нужные пакеты для пакета. В нашем пакете понадобилась библиотека axios
- <b>npm i axios</b>
- Создаем файл <b>index.ts</b>, пишем code
- <u>yarn build</u> (npm-команда) - собрать и сделать автопаблиш
- <u>yarn start</u> (npm-команда) - собирает и сделает автопаблиш каждый раз как что-то в проекте поменяется
- команда в консоли <b>yarn link</b> - создаем локально link к этому пакету для дальнейшего использования этого
  пакета в другом проекте

> мы используем команду <b>yarn link</b> чтобы собрать локально пакет и к нему в другом приложении можно было обратиться через <b>yarn link ИМЯ</b>

> Документация на библ которая помогла создать этот пакет [здесь](https://tsdx.io)
## Использование пакета в приложении CONSUMER:

- (не обязательно) <b>incubator install linters</b>
  (в папке проекта с закрытым проектом для того, чтобы подключить еслинт + настройки)

(для node приложения)
- (чтобы пользоваться link) <b>yarn add -g ts-node</b>
- (чтобы пользоваться link - типы - для TS) <b>yarn add  @types/node --save-dev</b>
- (для ts-проектов) <b>yarn add typescript</b>


- <b>yarn link ИМЯ</b> - <u>локально</u> подклуючаем пакет
- команда в консоли <b>ts-node index.ts</b> - ЗАПУСКАЕМ с нашим пакетом приложение

> Документация на библ [ts-node](https://www.npmjs.com/package/ts-node)
