// export class Result<E> {
//   public loading: boolean = true
//   public error: any = null
//   public result: E = {} as E

//   public get ready(): boolean {
//     return !this.loading;
//   }

//   public reset(): void {
//     // Clear a result, while keeping the same ref
//     this.loading = true
//     this.error = null
//     this.result = {} as E
//   }
// }

export class Results<E> {
  public loading: boolean = true
  public error: any = null
  public count: number = 0
  public result: E = {} as E
  public results: E[] = []

  public get ready(): boolean {
    return !this.loading;
  }

  public reset(): void {
    // Clear a result, while keeping the same ref
    this.loading = true
    this.error = null
    this.count = 0
    this.result = {} as E
    this.results = []
  }
}
