const { inserSingleProduct, deleteSinglePruduct } = require('../controller/prductController')
const auth = require('../middleware/authenticate')

const productRouter=require('express').Router()


productRouter.post('/create',auth , inserSingleProduct)
productRouter.delete('/delete',auth,deleteSinglePruduct)

module.exports={productRouter}