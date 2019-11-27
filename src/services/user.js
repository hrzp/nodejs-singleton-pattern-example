const BaseService = require("./base");

class UserService extends BaseService {
  async login(username, password) {
    let result = await this.db.getUser(username, password);
    this.responseHandler.setSuccessfulStatus(result, "Bigir");
    return this.responseHandler;
  }

  async register(username, password, mail) {
    let result = await this.db.insertUser(username, password, mail);
    this.responseHandler.setSuccessfulStatus(result, "BigirRegister");
    return this.responseHandler;
  }
}

module.exports = UserService;
