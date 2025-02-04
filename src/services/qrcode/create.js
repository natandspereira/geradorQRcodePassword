import prompt from "prompt";
import promptQRcode from "../../prompts/promptQrcode.js";
import handle from "./handle.js";


async function createQRcode(){
    prompt.get(promptQRcode,  handle);

    prompt.start();
}

export default createQRcode;