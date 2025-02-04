import chalk from "chalk";

const promptMain = [
    {
        name:"select",
        description: chalk.bgGreen.bold(
            "Escolha a ferramenta (1 - QRCODE ou 2 - PASSWORD)",
        ),
        pattern: /^[1-2]+$/,
        message:chalk.bgRed.italic( 
            "Escolha apenas entre 1 e 2" 
        ),
        required:true
    }
] 

export default promptMain;