const db = require("./connection");

module.exports = class User {
  static saveUser(firstName, lastName, email, hashedPassword) {
    return db.execute(
      "INSERT INTO users (firstName, lastName,email, password) VALUES (?,?,?, ?)",
      [firstName, lastName, email, hashedPassword]
    );
  }
  static createUserTable() {
    return db.execute(
      "CREATE TABLE IF NOT \
        EXISTS users (id int auto_increment primary key, \
          firstName varchar(255) not null,\
          lastName varchar(255) not null,\
           email varchar(255) not null,\
            password varchar(255) not null) "
    );
  }
  static findUserByEmail(email) {
    return db.execute("SELECT * FROM users WHERE email = ?", [email]);
  }
};
