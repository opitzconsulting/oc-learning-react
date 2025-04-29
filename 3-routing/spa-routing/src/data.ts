import { fakerDE } from '@faker-js/faker';

interface Item {
  name: string;
  tel: string;
}

export class Store {
  #data: Record<string, Item> = {};

  constructor(qty = 10) {
    fakerDE.seed(123);

    for (let i = 0; i < qty; i++) {
      const item = {
        name: fakerDE.person.fullName(),
        tel: fakerDE.phone.number(),
      } satisfies Item;
      const id = fakerDE.string.uuid();
      this.#data[id] = item;
    }
  }

  getAll() {
    return Object.entries(this.#data)
      .map(([id, val]) => ({
        id,
        ...val,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  getItem(id: string) {
    const item = this.#data[id];
    if (!item) {
      return undefined;
    }
    return {
      ...item,
    };
  }
  static #instance: Store | undefined;
  static get instance() {
    if (!this.#instance) {
      this.#instance = new Store();
    }
    return this.#instance!;
  }
}
