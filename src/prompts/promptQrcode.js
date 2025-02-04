import chalk from "chalk";

const promptQRcode = [
    {
        name:"link",
        description:chalk.bgYellow.bold("Digite o link para gerar o QRCODE")
    },
    {
        name:"type",
        description:chalk.bgYellow.bold("Escolha entre os tipos de QRCODE 1 - NORMAL ou 2 - TERMINAL"),
        pattern:/^[1-2]+$/,
        message:chalk.bgRed.italic("Escolha apenas entre 1 e 2"),
        required:true
    }
]

export default promptQRcode;