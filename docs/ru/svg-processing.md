<p align="right">
<a href="../en/svg-processing.md">English description</a> | Описание на русском
</p>

# Работа с SVG

В TARS поддерживается два workflow для работы с векторной графикой: SVG-спрайт и SVG-symbols. Эти два подхода отличаются от остальных (инлайн в HTML, инлайн в CSS, base64, SVG-stack) почти 100%-й поддержкой во всех современных браузерах (начиная с IE9 включительно), кешируемостью, быстродействием и удобством работы.

Вы можете использовать **только один тип работы** с SVG-графикой в проекте. Одновременно SVG-symbols и SVG-спрайт не поддерживаются. Вы можете указать все настройки проекта для работы с SVG-графикой в [конфигурационном файле проекта](options.md#svg).

**Очень важно, чтобы при сохранении SVG-картинки в ней присутствовал атрибут viewBox! Сохраняйте SVG-картинку как объект, который может быть вставлен в HTML без изменений (в Adobe Illustrator это опция "Image location – Embed").**

## SVG symbols

**При выборе этого workflow сборка для IE8 недоступна**

В данном подходе SVG-изображения склеиваются в один общий SVG-файл, в котором каждая отдельная SVG-картинка представляется в виде [SVG-symbol](https://developer.mozilla.org/ru/docs/Web/SVG/Element/symbol). В этом случае вы можете переиспользовать каждую отдельную иконку несколько раз, задавать ей цвет (даже два) и размеры через CSS. Частично об этом подходе можно прочесть на [habrahabr.ru](https://habrahabr.ru/post/272505/) и в [западных источниках](https://css-tricks.com/svg-symbol-good-choice-icons/).

Изображения, которые должны быть включены таким образом, необходимо складывать в папку (указан путь по умолчанию): `static/img.lazy/svg/`. Вложенность директорий **НЕ** поддерживается.

Подключение этих иконок производится в шаблонах. В CSS можно лишь добавить цвета, размеры, заливку, цвет и толщину границ. Для подключения используются хелперы, которые генерируют весь необходимый HTML-код и атрибуты для подключения конкретной иконки.

Подключение в Handlebars:

```handlebars
{{Icon iconName='iconName' className='customClass' iconWidth='25' iconHeight='25'}}
```

Подключение в Jade:

```jade
!= jadeHelpers.Icon.call(locals, {iconName: 'iconName', className: 'customClass', iconWidth: '25', iconHeight: '25'})
```

Подключение в Pug:

```jade
!= pugHelpers.Icon.call(locals, {iconName: 'iconName', className: 'customClass', iconWidth: '25', iconHeight: '25'})
```

При подключении иконки вы можете задать два параметра: имя иконки (iconName), которая подключается (без расширения), имя класса (customClass), размеры (iconWidth, iconHeight). **Размеры можно не задавать, эти опции не обязательны и могут быть вычисленны автоматически**. Если имя класса не будет указано, то оно сгенерируется автоматически - по шаблону icon__iconName. Если не указаны размеры, то будут использованы размеры из svg файла. Иконки можно подключать как в шаблонах страниц, так и в компонентах. Данные хелперы сгенерируют следующий код:

```html
<svg class="chrome" width="32px" height="32px">
    <use xlink:href="#chrome"></use>
</svg>
```

Файл с готовыми символами генерируется в TARS автоматически. Остается только подключить его. В TARS поддерживается несколько способов подключения SVG-symbols:
* **inject** — инжект в тело HTML;
* **separate-file-with-link** — хранение в отдельном файле, при этом каждая иконка подключается из этого файла;
* **separate-file** — хранение в отдельном файле.

В случае инжекта в use указывается только ID иконки (ее имя). Вы можете управлять, куда именно инжектить SVG-symbols с помощью шаблона %=symbols=%, который по умолчанию присутствует в шаблоне - если вы используете оригинальную версию TARS. **Нет необходимости удалять эти метки, а также подключение различных полифилов или скриптов для старых браузеров, так как они будут  автоматически удалены из готовой сборки, если они не используются!**

В случае хранения в отдельном файле с подключением из него, к ID иконки добавляется **полный путь** до этого файла.

```html
<svg class="chrome" width="32px" height="32px">
    <use xlink:href="static/images/svg-symbols.svg#chrome"></use>
</svg>
```

В этом случае SVG-symbols кешируется браузером. При этом вы можете задать путь, по которому файл с SVG-symbols будет находится в проекте, с помощью опции pathToExternalSymbolsFile в конфигурационном файле проекта. По умолчанию файл создается в корне готовой сборки.

Данный способ нативно поддерживается во всех современных браузерах, кроме IE9 - Edge. Для них в TARS предусмотрен полифил. Вы можете его не включать в сборку, если не поддерживаете IE. Код подключения полифила по умолчанию присутствует в шаблоне, если вы используете оригинальную версию TARS. **Нет необходимости удалять эти метки, а также подключение различных полифилов или скриптов для старых браузеров, так как они будут автоматически удалены из готовой сборки, если они не используются!**

Третий способ подразумевает, что вы сами реализуете подключение SVG-symbols в шаблон. Вам необходимо будет написать код, который загрузит файл SVG-symbols и вставит его в код страницы. Наиболее интересные подходы описаны на [css-tricks](https://css-tricks.com/ajaxing-svg-sprite/) и [osvaldas.info](http://osvaldas.info/caching-svg-sprite-in-localstorage). Последний способ один из самых эффективных.

Как использовать тот или иной тип подключения SVG-symbols вы можете узнать из [документации о конфиге проекта](options.md#svg).

## SVG-спрайты

В данном подходе SVG-изображения склеиваются в один SVG-спрайт. SVG-изображения в release-версии минифицируются и к нему добавляется hash в название. Изображения, которые должны быть включены таким образом, необходимо складывать в папку (указан путь по умолчанию): `static/img.lazy/svg/`. Вложенность директорий **НЕ** поддерживается.

Подключение SVG-спрайта производится с помощью миксина (пример на SCSS):

```scss
@include bg-svg($svg-image-name);     // Подключение svg-изображения
```

Обратите внимание, что в миксин передается **переменная** с именем исходной картинки (без расширения).

Миксин `bg-svg` в CSS подключит SVG-спрайт в качестве фона, задаст все необходимые смещения и размеры. Если сборка выполнена с ключом `--ie` или `--ie8`, то будет создан спрайт с растрированными векторными изображениями. Вам не нужно думать о том, как это будет работать в IE8, так как TARS все сделает за вас.

В данном подходе вы не сможете задать цвет SVG-изображения через CSS. Необходимо, чтобы SVG-картинка уже была полностью готова к использованию, прежде чем она попадет в спрайт.
