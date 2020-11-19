exports.main = async function (req, res) {

    const router = require('../router');
    const pg = require('pg');
    var Pool = require('pg-pool');
    var pool = new pg.Pool(router.ccp_db);
    const crypto = require('crypto');

    // Отключение CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

    // Валидатор
    try {
        var transactions = [];
        let iterations = 10;
        let j = 0;
        for (var i of req.body.wallets) {
            while (j < iterations) {
                j++
                transactions.push({
                    time: '12.12.2020',
                    address_from: i.toString(),
                    address_to: crypto.createHash('sha256').update(i+j.toString(), 'utf8').digest("hex"),
                    amount: 100,
                    commission: (100 * 0.02).toFixed(2)

                })
            }
            j = 0;
        }

        // Запрос данных с базы данных
        const result = await (async () => {
            var client = await pool.connect()
            try {
                for (var k of transactions) {
                    var result = await client.query(
                        'INSERT INTO transactions ' +
                        '   ( ' +
                        '       time,' +
                        '       address_from, ' +
                        '       address_to, ' +
                        '       amount, ' +
                        '       commission ' +
                        '   ) ' +
                        'VALUES ' +
                        '   ( ' +
                        '       $1, ' +
                        '       $2, ' +
                        '       $3, ' +
                        '       $4, ' +
                        '       $5 ' +
                        '   ) ' +
                        ';'
                        ,[
                            k.time,
                            k.address_from,
                            k.address_to,
                            k.amount,
                            k.commission
                        ]
                    )
                }
            } finally {
                client.release()
            }
            return result.rows;

        })().catch(e => console.error(e.message, e.stack))
        res.sendStatus(200);
        // console.log(transactions);

    } catch (e) {
        console.log(e);
        res.sendStatus(404)
    }




}
