import { Store } from "@/uvicore/store"

interface Counter extends Object {
  count: number
}

class CounterStore extends Store<Counter> {
  protected data(): Counter {
    return {
      count: 0
    }
  }

  incrementCount() {
    this.state.count++;
  }
}

export const counterStore: CounterStore = new CounterStore()
