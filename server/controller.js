module.exports = {
    read: (req, res) => {
        const database = req.app.get('db');
        
        database.get_inventory()
        .then( (products) => res.status(200).send(products) )
        .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong"});
        console.log(err)} );
    },
    create: (req, res) => {
        const database = req.app.get('db');
        const {name, price, image} = req.body;

        database.create_product([name, price, image])
        .then(() => res.sendStatus(200))
        .catch(err => {res.status(500).send({error: 'Something went wrong'})
        console.log(err)})
    },
    
}
