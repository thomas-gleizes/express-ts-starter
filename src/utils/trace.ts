import fs from "node:fs/promises";
import { dirname } from "node:path";

import { getDateTime } from "utils/date";

export default function trace(str: string): void {
  const content = `${getDateTime()} (${Date.now()}) : ${str}\n`;
  const filePath = `${dirname(require.main.filename)}/../trace.log`;

  fs.access(filePath)
    .then(() => fs.appendFile(filePath, content))
    .catch(() => fs.writeFile(filePath, content))
    .catch((e) => console.log("trace failed", e));
}
