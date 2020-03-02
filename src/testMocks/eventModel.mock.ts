class EventMockModel {
  constructor(public data?: any) { }

  save() {
    return this.data;
  }
}

export default EventMockModel;