import { Sequelize } from "sequelize";

// Singleton class
export class DBConnection {
  static sequelize;
  static getInstance() {
    console.log(DBConnection.sequelize);
    if (!DBConnection.sequelize) {
      console.log(`i'm here`);
      DBConnection.sequelize = new Sequelize(
        "mysql://root@localhost/todo_list"
      );
      console.log(`obj: ${DBConnection.sequelize}`);
      DBConnection.sequelize
        .authenticate(() => {
          console.log("Database connected successfully!");
        })
        .catch((reason) => {
          console.log(`Failed: ${reason}`);
        });
    } else {
      console.log("Database already connected");
    }
    return DBConnection.sequelize;
  }
}
