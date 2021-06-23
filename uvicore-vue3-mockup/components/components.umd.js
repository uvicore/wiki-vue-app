(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.components = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  var _sfc_main$1 = vue.defineComponent({
    name: "HelloWorld",
    props: {
      msg: {
        type: String,
        required: true
      }
    },
    setup: () => {
      const count = vue.ref(0);
      return { count };
    }
  });
  var HelloWorld_vue_vue_type_style_index_0_scoped_true_lang = "\na[data-v-2ced3828] {\n  color: #42b983;\n}\nlabel[data-v-2ced3828] {\n  margin: 0 0.5em;\n  font-weight: bold;\n}\ncode[data-v-2ced3828] {\n  background-color: #eee;\n  padding: 2px 4px;\n  border-radius: 4px;\n  color: #304455;\n}\n";
  const _withId = /* @__PURE__ */ vue.withScopeId("data-v-2ced3828");
  vue.pushScopeId("data-v-2ced3828");
  const _hoisted_1$1 = /* @__PURE__ */ vue.createStaticVNode('<p data-v-2ced3828> LIB1: Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank" data-v-2ced3828>VSCode</a> + <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" data-v-2ced3828> Vetur </a> or <a href="https://github.com/johnsoncodehk/volar" target="_blank" data-v-2ced3828>Volar</a> (if using <code data-v-2ced3828>&lt;script setup&gt;</code>) </p><p data-v-2ced3828>See <code data-v-2ced3828>README.md</code> for more information.</p><p data-v-2ced3828><a href="https://vitejs.dev/guide/features.html" target="_blank" data-v-2ced3828> Vite Docs </a> | <a href="https://v3.vuejs.org/" target="_blank" data-v-2ced3828>Vue 3 Docs</a></p>', 3);
  const _hoisted_4 = /* @__PURE__ */ vue.createVNode("p", null, [
    /* @__PURE__ */ vue.createTextVNode(" Edit "),
    /* @__PURE__ */ vue.createVNode("code", null, "components/HelloWorld.vue"),
    /* @__PURE__ */ vue.createTextVNode(" to test hot module replacement. ")
  ], -1);
  vue.popScopeId();
  const _sfc_render$1 = /* @__PURE__ */ _withId((_ctx, _cache, $props, $setup, $data, $options) => {
    return vue.openBlock(), vue.createBlock(vue.Fragment, null, [
      vue.createVNode("h1", null, vue.toDisplayString(_ctx.msg), 1),
      _hoisted_1$1,
      vue.createVNode("button", {
        type: "button",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.count++)
      }, "count is: " + vue.toDisplayString(_ctx.count), 1),
      _hoisted_4
    ], 64);
  });
  _sfc_main$1.render = _sfc_render$1;
  _sfc_main$1.__scopeId = "data-v-2ced3828";
  var _sfc_main = vue.defineComponent({
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
    return vue.openBlock(), vue.createBlock(vue.Fragment, null, [
      vue.createVNode("div", _hoisted_1, [
        vue.createVNode("div", {
          class: ["duration-300 w-5 h-5 mx-2", _ctx.spinClass]
        }, null, 2)
      ]),
      vue.createVNode("span", {
        class: ["animate-pulse px-1 text-sm font-medium", _ctx.msgColor]
      }, vue.toDisplayString(_ctx.msg), 3)
    ], 64);
  }
  _sfc_main.render = _sfc_render;
  exports2.HelloWorld = _sfc_main$1;
  exports2.Loading1 = _sfc_main;
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2[Symbol.toStringTag] = "Module";
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy51bWQuanMiLCJzb3VyY2VzIjpbIi4uL2xpYi9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlIiwiLi4vbGliL2NvbXBvbmVudHMvbG9hZGluZy9Mb2FkaW5nMS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8aDE+e3sgbXNnIH19PC9oMT5cblxuICA8IS0tIDxpbWcgc3JjPVwiQC9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCI+IC0tPlxuXG4gIDxwPlxuICAgIExJQjE6IFJlY29tbWVuZGVkIElERSBzZXR1cDpcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9jb2RlLnZpc3VhbHN0dWRpby5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VlNDb2RlPC9hPlxuICAgICtcbiAgICA8YVxuICAgICAgaHJlZj1cImh0dHBzOi8vbWFya2V0cGxhY2UudmlzdWFsc3R1ZGlvLmNvbS9pdGVtcz9pdGVtTmFtZT1vY3RyZWYudmV0dXJcIlxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICA+XG4gICAgICBWZXR1clxuICAgIDwvYT5cbiAgICBvclxuICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vam9obnNvbmNvZGVoay92b2xhclwiIHRhcmdldD1cIl9ibGFua1wiPlZvbGFyPC9hPlxuICAgIChpZiB1c2luZ1xuICAgIDxjb2RlPiZsdDtzY3JpcHQgc2V0dXAmZ3Q7PC9jb2RlPilcbiAgPC9wPlxuXG4gIDxwPlNlZSA8Y29kZT5SRUFETUUubWQ8L2NvZGU+IGZvciBtb3JlIGluZm9ybWF0aW9uLjwvcD5cblxuICA8cD5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly92aXRlanMuZGV2L2d1aWRlL2ZlYXR1cmVzLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgIFZpdGUgRG9jc1xuICAgIDwvYT5cbiAgICB8XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vdjMudnVlanMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPlZ1ZSAzIERvY3M8L2E+XG4gIDwvcD5cblxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJjb3VudCsrXCI+Y291bnQgaXM6IHt7IGNvdW50IH19PC9idXR0b24+XG4gIDxwPlxuICAgIEVkaXRcbiAgICA8Y29kZT5jb21wb25lbnRzL0hlbGxvV29ybGQudnVlPC9jb2RlPiB0byB0ZXN0IGhvdCBtb2R1bGUgcmVwbGFjZW1lbnQuXG4gIDwvcD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyByZWYsIGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdIZWxsb1dvcmxkJyxcbiAgcHJvcHM6IHtcbiAgICBtc2c6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICBzZXR1cDogKCkgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0gcmVmKDApXG4gICAgcmV0dXJuIHsgY291bnQgfVxuICB9XG59KVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5hIHtcbiAgY29sb3I6ICM0MmI5ODM7XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luOiAwIDAuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuY29kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICMzMDQ0NTU7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaW5saW5lLWZsZXhcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImR1cmF0aW9uLTMwMCB3LTUgaC01IG14LTJcIlxuICAgICAgOmNsYXNzPVwic3BpbkNsYXNzXCJcbiAgICA+PC9kaXY+XG4gIDwvZGl2PlxuICA8c3BhbiBjbGFzcz1cImFuaW1hdGUtcHVsc2UgcHgtMSB0ZXh0LXNtIGZvbnQtbWVkaXVtXCIgOmNsYXNzPVwibXNnQ29sb3JcIj57eyBtc2cgfX08L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiBcIkxvYWRpbmdcIixcblxuICBwcm9wczoge1xuICAgIG1zZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2xvYWRpbmcuLi4nXG4gICAgfSxcbiAgICBhbmltYXRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdzcGluJyxcbiAgICB9LFxuICAgIHNwaW5Db2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2JnLWdyZWVuLTUwMCdcbiAgICB9LFxuICAgIG1zZ0NvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndGV4dC1ncmF5LTQwMCdcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBzcGluQ2xhc3MoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLnNwaW5Db2xvciArICcgYW5pbWF0ZS0nICsgdGhpcy5hbmltYXRpb247XG4gICAgfVxuICB9XG59KVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiZGVmaW5lQ29tcG9uZW50IiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7O29CQXdDZUEsb0JBQWdCO0FBQUEsSUFDN0IsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBLFFBQ0gsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBO0FBQUE7QUFBQSxJQUdkLE9BQU8sTUFBTTtZQUNMLFFBQVFDLFFBQUk7YUFDWCxFQUFFO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ3JDRUQsb0JBQWdCO0FBQUEsSUFDN0IsTUFBTTtBQUFBLElBRU4sT0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBLFFBQ0gsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBO0FBQUEsTUFFWCxXQUFXO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUE7QUFBQSxNQUVYLFdBQVc7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQTtBQUFBLE1BRVgsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBO0FBQUE7QUFBQSxJQUliLFVBQVU7QUFBQSxNQUNSLFlBQW9CO2VBQ1gsS0FBSyxZQUFZLGNBQWMsS0FBSztBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
