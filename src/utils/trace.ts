import fs from "fs";
import { dirname } from "path";

const filePath = `${dirname(require.main.filename)}/trace.log`;

export default function trace(str: string): void {
  try {
    if (fs.existsSync(filePath)) {
      fs.appendFileSync(filePath, `${Date.now()} ${str}\n`);
    } else {
      fs.writeFileSync(filePath, `${Date.now()} ${str}\n`);
    }
  } catch (e) {
    console.log("trace failed : ", e);
  }
}
