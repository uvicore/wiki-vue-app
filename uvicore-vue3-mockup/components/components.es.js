import { defineComponent, ref, pushScopeId, popScopeId, openBlock, createBlock, Fragment, createVNode, toDisplayString, withScopeId, createStaticVNode, createTextVNode } from "vue";
var _sfc_main$1 = defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0);
    return { count };
  }
});
var HelloWorld_vue_vue_type_style_index_0_scoped_true_lang = "\na[data-v-2ced3828] {\n  color: #42b983;\n}\nlabel[data-v-2ced3828] {\n  margin: 0 0.5em;\n  font-weight: bold;\n}\ncode[data-v-2ced3828] {\n  background-color: #eee;\n  padding: 2px 4px;\n  border-radius: 4px;\n  color: #304455;\n}\n";
const _withId = /* @__PURE__ */ withScopeId("data-v-2ced3828");
pushScopeId("data-v-2ced3828");
const _hoisted_1$1 = /* @__PURE__ */ createStaticVNode('<p data-v-2ced3828> LIB1: Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank" data-v-2ced3828>VSCode</a> + <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" data-v-2ced3828> Vetur </a> or <a href="https://github.com/johnsoncodehk/volar" target="_blank" data-v-2ced3828>Volar</a> (if using <code data-v-2ced3828>&lt;script setup&gt;</code>) </p><p data-v-2ced3828>See <code data-v-2ced3828>README.md</code> for more information.</p><p data-v-2ced3828><a href="https://vitejs.dev/guide/features.html" target="_blank" data-v-2ced3828> Vite Docs </a> | <a href="https://v3.vuejs.org/" target="_blank" data-v-2ced3828>Vue 3 Docs</a></p>', 3);
const _hoisted_4 = /* @__PURE__ */ createVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Edit "),
  /* @__PURE__ */ createVNode("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ createTextVNode(" to test hot module replacement. ")
], -1);
popScopeId();
const _sfc_render$1 = /* @__PURE__ */ _withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock(Fragment, null, [
    createVNode("h1", null, toDisplayString(_ctx.msg), 1),
    _hoisted_1$1,
    createVNode("button", {
      type: "button",
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.count++)
    }, "count is: " + toDisplayString(_ctx.count), 1),
    _hoisted_4
  ], 64);
});
_sfc_main$1.render = _sfc_render$1;
_sfc_main$1.__scopeId = "data-v-2ced3828";
var _sfc_main = defineComponent({
  name: "Loading",
  props: {
    msg: {
      type: String,
      default: "loading..."
    },
    animation: {
      type: String,
      default: "spin"
    },
    spinColor: {
      type: String,
      default: "bg-green-500"
    },
    msgColor: {
      type: String,
      default: "text-gray-400"
    }
  },
  computed: {
    spinClass() {
      return this.spinColor + " animate-" + this.animation;
    }
  }
});
const _hoisted_1 = { class: "inline-flex" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Fragment, null, [
    createVNode("div", _hoisted_1, [
      createVNode("div", {
        class: ["duration-300 w-5 h-5 mx-2", _ctx.spinClass]
      }, null, 2)
    ]),
    createVNode("span", {
      class: ["animate-pulse px-1 text-sm font-medium", _ctx.msgColor]
    }, toDisplayString(_ctx.msg), 3)
  ], 64);
}
_sfc_main.render = _sfc_render;
export { _sfc_main$1 as HelloWorld, _sfc_main as Loading1 };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5lcy5qcyIsInNvdXJjZXMiOlsiLi4vbGliL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC52dWUiLCIuLi9saWIvY29tcG9uZW50cy9sb2FkaW5nL0xvYWRpbmcxLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxoMT57eyBtc2cgfX08L2gxPlxuXG4gIDwhLS0gPGltZyBzcmM9XCJAL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIj4gLS0+XG5cbiAgPHA+XG4gICAgTElCMTogUmVjb21tZW5kZWQgSURFIHNldHVwOlxuICAgIDxhIGhyZWY9XCJodHRwczovL2NvZGUudmlzdWFsc3R1ZGlvLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5WU0NvZGU8L2E+XG4gICAgK1xuICAgIDxhXG4gICAgICBocmVmPVwiaHR0cHM6Ly9tYXJrZXRwbGFjZS52aXN1YWxzdHVkaW8uY29tL2l0ZW1zP2l0ZW1OYW1lPW9jdHJlZi52ZXR1clwiXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgID5cbiAgICAgIFZldHVyXG4gICAgPC9hPlxuICAgIG9yXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9qb2huc29uY29kZWhrL3ZvbGFyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Vm9sYXI8L2E+XG4gICAgKGlmIHVzaW5nXG4gICAgPGNvZGU+Jmx0O3NjcmlwdCBzZXR1cCZndDs8L2NvZGU+KVxuICA8L3A+XG5cbiAgPHA+U2VlIDxjb2RlPlJFQURNRS5tZDwvY29kZT4gZm9yIG1vcmUgaW5mb3JtYXRpb24uPC9wPlxuXG4gIDxwPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3ZpdGVqcy5kZXYvZ3VpZGUvZmVhdHVyZXMuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgVml0ZSBEb2NzXG4gICAgPC9hPlxuICAgIHxcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly92My52dWVqcy5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VnVlIDMgRG9jczwvYT5cbiAgPC9wPlxuXG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cImNvdW50KytcIj5jb3VudCBpczoge3sgY291bnQgfX08L2J1dHRvbj5cbiAgPHA+XG4gICAgRWRpdFxuICAgIDxjb2RlPmNvbXBvbmVudHMvSGVsbG9Xb3JsZC52dWU8L2NvZGU+IHRvIHRlc3QgaG90IG1vZHVsZSByZXBsYWNlbWVudC5cbiAgPC9wPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHJlZiwgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0hlbGxvV29ybGQnLFxuICBwcm9wczoge1xuICAgIG1zZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIHNldHVwOiAoKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSByZWYoMClcbiAgICByZXR1cm4geyBjb3VudCB9XG4gIH1cbn0pXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbmEge1xuICBjb2xvcjogIzQyYjk4Mztcbn1cblxubGFiZWwge1xuICBtYXJnaW46IDAgMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5jb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgcGFkZGluZzogMnB4IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogIzMwNDQ1NTtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJpbmxpbmUtZmxleFwiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZHVyYXRpb24tMzAwIHctNSBoLTUgbXgtMlwiXG4gICAgICA6Y2xhc3M9XCJzcGluQ2xhc3NcIlxuICAgID48L2Rpdj5cbiAgPC9kaXY+XG4gIDxzcGFuIGNsYXNzPVwiYW5pbWF0ZS1wdWxzZSBweC0xIHRleHQtc20gZm9udC1tZWRpdW1cIiA6Y2xhc3M9XCJtc2dDb2xvclwiPnt7IG1zZyB9fTwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6IFwiTG9hZGluZ1wiLFxuXG4gIHByb3BzOiB7XG4gICAgbXNnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnbG9hZGluZy4uLidcbiAgICB9LFxuICAgIGFuaW1hdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3NwaW4nLFxuICAgIH0sXG4gICAgc3BpbkNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnYmctZ3JlZW4tNTAwJ1xuICAgIH0sXG4gICAgbXNnQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0LWdyYXktNDAwJ1xuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIHNwaW5DbGFzcygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuc3BpbkNvbG9yICsgJyBhbmltYXRlLScgKyB0aGlzLmFuaW1hdGlvbjtcbiAgICB9XG4gIH1cbn0pXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBd0NBLGtCQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQTtBQUFBO0FBQUEsRUFHZCxPQUFPLE1BQU07VUFDTCxRQUFRLElBQUk7V0FDWCxFQUFFO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNiLGdCQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQTtBQUFBLElBRVgsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBO0FBQUEsSUFFWCxXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUE7QUFBQSxJQUVYLFVBQVU7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQTtBQUFBO0FBQUEsRUFJYixVQUFVO0FBQUEsSUFDUixZQUFvQjthQUNYLEtBQUssWUFBWSxjQUFjLEtBQUs7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
