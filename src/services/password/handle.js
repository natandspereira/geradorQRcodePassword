



async function handle(){
    let characters = [];
    let password = "";

    const passwordLegth = process.env.PASSWORD_LENGTH;

    if(process.env.UPPERCASE_LETTERS === "true"){
        characters.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    if(process.env.LOWERCASE_LETTERS === "true"){
        characters.push(... "abcdefghijklmnopqrstuvwxyz");
    }

    if(process.env.NUMBERS === "true"){
        characters.push(... "0123456789");
    }

    if(process.env.SPECIAL_CHARACTERS === "true"){
        characters.push(... "!@#$%^*()-");
    }

    for(let i=0; i<passwordLegth; i++){
        const index = Math.floor(Math.random() * characters.length)
        password += characters[index];
    }

    return password;
}

export default handle;