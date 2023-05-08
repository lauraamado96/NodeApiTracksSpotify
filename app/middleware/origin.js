
const checkOrigin = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop()
        if (token === '123456') {
            next()
        } else {
            res.status(409)
            res.send({ error: '¡No puedes pasar por aqui!' })
        }

    } catch (e) {
        next()
    }

}

module.exports = checkOrigin