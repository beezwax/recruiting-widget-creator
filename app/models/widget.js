import FileDb from '../file-db.js';

const db = new FileDb('widget-data.json');

export default class Widget {
  constructor({ id, name, purpose, active } = {}) {
    this.id = Number(id) || null;
    this.name = name || '';
    this.purpose = purpose || '';
    this.active = ['true', true].includes(active);
    this.errors = {
      active: [],
      name: [],
      purpose: [],
    };
  }

  static find(id) {
    const records = db.read();
    const record = records.find(r => r.id === Number(id));
    if (!record) {
      throw new Error(`No Widget found with id ${id}`)
    }
    return new Widget(record);
  }

  static findAll() {
    const records = db.read();
    return records.map(r => new Widget(r));
  }

  update(values) {
    const { name, purpose, active } = new Widget(values);
    Object.assign(this, { name, purpose, active });
  }

  save() {
    const records = db.read();

    if (!this.id) {
      const highestId = Math.max(...records.map(r => r.id).concat(0));
      this.id = highestId + 1;
    }
    const existingIndex = records.findIndex(r => r.id === this.id);

    if (existingIndex > -1) {
      records.splice(existingIndex, 1, this)
    } else {
      records.push(this);
    }

    db.write(records);

    return true;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      purpose: this.purpose,
      active: this.active,
    }
  }
}
