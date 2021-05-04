const db = require("../services/postgres.service");

exports.getInfo = async () => {
    let getInfoResponse = await db.query(
        'SELECT * FROM main.info'
    )
    return getInfoResponse
}
