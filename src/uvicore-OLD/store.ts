import {reactive, readonly} from 'vue';

// https://medium.com/@mario.brendel1990/vue-3-the-new-store-a7569d4a546f

export abstract class Store<T extends Object> {
  protected state: T;

  public constructor() {
    let data = this.data();
    this.setup(data);
    this.state = reactive(data) as T;
  }

  protected abstract data(): T

  protected setup(data: T): void {}

  protected clearState() {
    this.setup(this.data());
  }

  public getState(): T {
    return readonly(this.state) as T
  }

}
