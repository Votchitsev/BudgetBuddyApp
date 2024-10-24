import { DBManager } from "@shared/model";
import { IncomeDBTable } from "@entities/income";

class DBGenerator {
  public static async generate() {
    const connect = new DBManager();
    await connect.exec(IncomeDBTable);
  }
}

export default DBGenerator;
