import { filesystem } from "@neutralinojs/lib"

export async function loadTasks() {
    const tasks = await filesystem.readFile(window.NL_PATH + "/tasks.json");
    return await JSON.parse(tasks);
 }