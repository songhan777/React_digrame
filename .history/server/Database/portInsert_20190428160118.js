const { mongoose, Schema} = require('./config');
const portTable = mongoose.model('port_table', new Schem({
    get:[],
    post:{}
}))

const Entriy = new portTable({
    get:['/list', '/team', '/user']
})