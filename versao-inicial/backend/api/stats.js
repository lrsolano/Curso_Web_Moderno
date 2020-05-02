module.exports = app => {
    const get = async (req,res) => {

        const results = {}
         await app.db('stat')
            .then(values => values.map(v => results[v.name] = v.value))
            .then(_ => res.json(results))
            .catch(err => res.status(500).send(err))


    }
    return { get }
}