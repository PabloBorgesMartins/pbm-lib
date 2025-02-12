# Tailwind config

## Objetivo
Padronizar a configuração e o tema da biblioteca tailwindcss entre os projetos de frontend

## Instalação
```bash
npm install @pbm/tailwind-config
```

## Configuração

> Caso não tenha configurado o tailwindcss no seu projeto ainda, siga as instruções da [documentação oficial](https://tailwindcss.com/docs/installation/using-postcss)

- Sobreescreva o contéudo do arquivo ```tailwind.config.js``` da raíz do projeto com o seguinte código

	```ts
	import { config } from '@pbm/tailwind-config'

	config.content = ['PATH/DOS/COMPONENTES', 'node_modules/@pbm/**/*.js']

	export default config
	```