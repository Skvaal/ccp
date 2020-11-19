exports.main = async function (req, res) {

    const router = require('../router');
    const pg = require('pg');
    var Pool = require('pg-pool');
    var pool = new pg.Pool(router.ccp_db);

    // Валидатор
    // Запрос данных с базы данных
    const resultArray = await (async () => {
        var client = await pool.connect()
        try {
            var result = await client.query(
                // Выбираем все транзакции в рамках теста
                'SELECT * ' +
                'FROM transactions' +
                ';'
                ,[]
            )
        } finally {
            client.release()
        }
        return result.rows;
    })().catch(e => console.error(e.message, e.stack))

    // let resArray = resultArray.filter();

    res.json(resultArray);

}
