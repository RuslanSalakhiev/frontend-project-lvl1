install: # установка
	npm ci

brain-games: # запуск игры
	node bin/brain-games.js

publish: #публикация
	npm publish --dry-run

lint: # запуск линтера
	npx eslint .