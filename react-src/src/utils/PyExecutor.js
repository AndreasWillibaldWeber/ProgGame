import { filesystem, os} from "@neutralinojs/lib"

export async function pyExecutor(code) {
    await filesystem.writeFile(window.NL_PATH + "/code.py", code);
    let command = "python3 code.py";
    let commandOut = await os.execCommand(command);
    return commandOut.stdOut || commandOut.stdErr;
 }