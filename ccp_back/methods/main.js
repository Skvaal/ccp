exports.main = async function (req, res) {

    const bip39 = require('bip39');
    const crypto = require('crypto');

    // Отключение CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

    // Генерируем мнемоническую фразу
    var mnemonic = await bip39.generateMnemonic();
    // Переводим из мнемонической фразы в Seed
    var seed = await bip39.mnemonicToSeed(mnemonic);
    // Переводим
    // var seedHEX = bin2hex(seed);
    // Получаем entropy
    var entropy = await bip39.mnemonicToEntropy(mnemonic);
    // Проверяем корректность мнемонической фразы
    var validate = await bip39.validateMnemonic(mnemonic);
    // Создаем Мастер пароль
    var master_node = await crypto.createHmac('sha512', entropy)
        // .update('I love cupcakes')
        .digest('hex');
    // Приватный ключ
    var private_key = master_node.slice(0,64);
    // Чейн код
    var chain_code = master_node.slice(64,128);




    console.log(mnemonic);
    console.log(seed);
    // console.log(seedHEX);
    console.log(validate);
    console.log(entropy);
    console.log(master_node);
    console.log('private_key: ' + private_key);
    console.log('chain_code: ' + chain_code);
    // console.log(sss);

    res.json(1);
    // Запрос в базу данных для получения транзакций на основе ключа
    // Запрос в базу
}
