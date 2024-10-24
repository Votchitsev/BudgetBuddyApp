import * as SQLite from "expo-sqlite";

class DBManager {
  db: any;

  constructor() {
    this.init();
  }

  private async init() {
    this.db = await SQLite.openDatabaseAsync("app.db");
  }

  public exec = async (SQLQuery: string) => {
    if (!this.db) {
      await this.init();
    }

    return await this.db.execAsync(SQLQuery);
  };
}

export default DBManager;
