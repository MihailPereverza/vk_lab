import fs from "fs";

const name = './db/db.json'
let network = JSON.parse(fs.readFileSync(name).toString())

export const getNetwork = () => {
    return network
}

export const saveNetwork = () => {
    fs.writeFileSync(
        name,
        JSON.stringify(
            network,
            null,
            4
        ),
        'utf8'
    )
}