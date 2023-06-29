import { db } from "../database/database.connection.js"

export async function getPerson(req: Request, res: Response) {
    try {
        const memberNumber = await db.query(`SELECT COUNT (*) FROM people;`);
        const sortId = Math.floor(Math.random() * (memberNumber - 0 + 1)) + 0;
        const { rows: person } = await db.query(`SELECT * FROM people WHERE id=$1;`, [sortId])
        res.send(person: { id: number, firstName: string, lastName: string})
    } catch (err) {
        res.status(500).send(err.message)
    }
}
