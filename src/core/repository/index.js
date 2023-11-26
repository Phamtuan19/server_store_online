class BaseRepository {

  constructor(props) {
    this.Model = props.model;
  }

  async findById(id) {
    return this.Model.findById(id);
  }

  async find(option = {}) {
    return this.Model.find(option);
  }

  async findOne(option = {}) {
    return this.Model.findOne(option).exec();
  }

  async read() {
    return this.Model.find({});
  }

  async create(data) {
    return await new this.Model(data).save();
  }

  async update(id, data) {
    return this.Model.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return this.Model.findByIdAndDelete(id);
  }
}
export default BaseRepository;
