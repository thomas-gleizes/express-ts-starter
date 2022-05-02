import fs from "fs";
import { dirname } from "path";
import { getDateTime } from "utils/getDate";

const filePath = `${dirname(require.main.filename)}/trace.log`;

export default function trace(str: string): void {
  try {
    const content = `${getDateTime()} (${Date.now()}) => ${str}\n`;

    if (fs.existsSync(filePath)) {
      fs.appendFileSync(filePath, content);
    } else {
      fs.writeFileSync(filePath, content);
    }
  } catch (e) {
    console.log("trace failed : ", e);
  }
}
