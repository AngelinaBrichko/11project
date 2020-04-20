
# 11 проект с настройками Webpack
*hhttps://angelinabrichko.github.io/11project/*

## Версия
*v2.0.0*

## Инструкция как открыть проект 
1. склонировать проект с помощью терминала: git clone https://github.com/AngelinaBrichko/11project.git
2. открыть работу в редакторе 
3. npm run dev - произойдет локальная сборка и откроется проект
- если используется Windows: ввести в консоль npm install --save-dev cross-env и изменить настройки scripts в package.json : "scripts": {
        "build": "cross-env NODE_ENV=production rimraf dist && webpack --mode production",
        "dev": "cross-env NODE_ENV=development webpack-dev-server --mode development --open --watch",
        "deploy": "cross-env NODE_ENV=production gh-pages -d dist"
     }

## scripts в package.json
- build  финальная сборка (rimraf dist удаляет папку dist при каждой сборке)
- dev сборка для разработки (--watch сайт будет обнавляться каждый раз при сохранении)
- deploy сборка для выкладывания сайта на сервер




