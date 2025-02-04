import prompt from "prompt";
import Mainprompt from "./prompts/promptMain.js";
import createQRcode from "./services/qrcode/create.js";
import createPassword from "./services/password/create.js";

async function main(){
    prompt.get(Mainprompt, async (err, choose) =>{
        if(choose.select == 1) await createQRcode();
        if(choose.select == 2) await createPassword();
    });

    prompt.start();
}

main();