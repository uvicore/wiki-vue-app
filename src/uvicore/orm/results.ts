export class Result<E> {
  public loading: boolean = true
  public error: any = null
  public result: E = {} as E

  public get ready(): boolean {
    return !this.loading;
  }
}

export class Results<E> {
  public loading: boolean = true
  public error: any = null
  public count: number = 0
  public results: E[] = []

  public get ready(): boolean {
    return !this.loading;
  }
}
