const LAST_FW_VERSION = ""
const BUILD_TIME = ""

const checkFirmvare = (current, actualVer = LAST_FW_VERSION, actualBult = BUILD_TIME) =>{
  // actualVer = LAST_FW_VERSION;
  if (actualVer) {
    const currentVerParts = current.split(".");
    const actualVerParts = actualVer.split(".");
    for (let i = 0; i <= actualVerParts.length; i++) {
      const a = parseInt(actualVerParts[i]) || 0;
      const b = parseInt(currentVerParts[i]) || 0;
      if (a > b) return true;
      if (a < b) return false;
    }
  }
  return false;
}