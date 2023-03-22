export default class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected buyValue: number;
  protected status?: boolean;

  constructor(
    model: string,
    year: number,
    color: string,
    buyValue: number,
    id: string | undefined,
  ) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.buyValue = buyValue;
    this.status = false;
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setId(value: string) {
    this.id = value;
  }

  public getModel(): string {
    return this.model;
  }

  public setModel(value: string) {
    this.model = value;
  }

  public getYear(): number {
    return this.year;
  }

  public setYear(value: number) {
    this.year = value;
  }

  public getColor(): string {
    return this.color;
  }

  public setColor(value: string) {
    this.color = value;
  }

  public getBuyValue(): number {
    return this.buyValue;
  }

  public setBuyValue(value: number) {
    this.buyValue = value;
  }

  // getStatus(): boolean {
  //   return this.status;
  // }
}