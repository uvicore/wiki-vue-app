# mReschke

## Built
npm init @vitejs/app
npm instal --save vue@next vue-router@4 vuex@next axios
npm install --save-dev eslint eslint-plugin-vue
npm install -save-dev tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p


I also installed vue-cli app with router, vuex... and stole their folder
structure and brought it into vite!

Articles

* Tailwind https://tailwindcss.com/docs/guides/vue-3-vite
* News reader tutorial https://itnext.io/hackernews-reader-with-vue-3-vite-2-and-vuex-4-part-1-247315ceb06a



## Resources

* https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/vue/tabs/text
* https://www.creative-tim.com/product/vue-notus
* https://github.com/quatrochan/Equal
* https://github.com/aotearoan/neon (This is the one with split vue and ts files!)




# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"


