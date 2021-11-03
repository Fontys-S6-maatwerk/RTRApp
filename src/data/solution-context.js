import BaseContext from "./base-context";

export default class SolutionContext extends BaseContext {
  constructor() {
    super("/Solutions");
  }

  getFeedSolutions(userId, sortBy, ascending, sectionNumber, sectionSize) {
    console.log(userId, sortBy, ascending, sectionNumber, sectionSize);
    return this.axios.get("").then((response) => response.data);
  }

  async all() {
    try {
      let response = await this.axios.get("");

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getById(id) {
    try {
      let response = await this.axios.get("", {
        params: { id: id },
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getByAuthor(author) {
    try {
      let response = await this.axios.get("", {
        params: { author: author },
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async add(solution) {
    try {
      let response = await this.axios.post("", solution);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async update(solution) {
    try {
      let response = await this.axios.put(`/${solution.id}`, solution);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async delete(solutionId) {
    try {
      let response = await this.axios.delete(`/${solutionId}`);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
