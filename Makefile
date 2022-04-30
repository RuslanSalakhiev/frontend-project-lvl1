install: # установка
	npm ci

brain-games: # запуск игры
	node bin/brain-games.js

brain-even: # запуск игры
	node bin/brain-even.js

brain-calc: # запуск игры
	node bin/brain-calc.js

brain-gcd: # запуск игры
	node bin/brain-gcd.js

brain-progression: # запуск игры
	node bin/brain-progression.js

brain-prime: # запуск игры
	node bin/brain-prime.js

publish: #публикация
	npm publish --dry-run

lint: # запуск линтера
	npx eslint .