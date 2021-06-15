# Vue3 Notes


## Composition API

**Hooks**
The `created` and `beforeCreated` events are no longer needed as both of these are what the `setup()` method actually do.  This means all API queries you would normally add to `created` can go right in `setup()`.

All other methods exist but are `imported` and then called like so

```js
import {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    onActivate,
    onDeactive,
    onErrorCaptured,
    onRenderedTracked,
    onRenderedTriggered
} from 'vue';

// Note that the old beforeDestroy still works but is now called onBeforeUnmounted
// Note that the old destroyed still works but is now called onUnmounted

export default ComponentName {
    setup() {
        onBeforeMount(() => {
            console.log("Before Mount!");
        });

    }
}
```
