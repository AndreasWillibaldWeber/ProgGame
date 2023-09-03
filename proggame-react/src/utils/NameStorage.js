import { storage } from "@neutralinojs/lib"

export async function saveName(name) {
    const timeStamp = (new Date()).toLocaleString("en-US", {timeZone: "Europe/Berlin"});
    let names = []
    try {
        names = await storage.getKeys();
    } catch (e) {
        console.log(e.message);
    }
    const lnr = names.length < 10 ? "0" + (names.length + 1).toString() : (names.length + 1).toString();
    await storage.setData(lnr + "-" + name, timeStamp);
}

export async function loadNames() {
    return await storage.getKeys();
}


