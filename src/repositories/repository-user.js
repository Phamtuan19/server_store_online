import BaseRepository from "../core/repository";

class AuthRepository extends BaseRepository {
  constructor() {
    super({
      model: "users",
    });
  }
}

const authRepository = new AuthRepository();

export default authRepository;
