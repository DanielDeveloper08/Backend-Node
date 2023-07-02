const usuariosGet = (req,res) => {
    
    const query = req.query;

    res.json({
        msg:'get API',
        query
    })
}

const usuariosPut = (req,res) => {

    const  id  = req.params.id;
    const body = req.body;

    res.json({
        msg:'put API',
        id,
        body
    })
}

const usuariosPost = (req,res) => {
    res.json({
        msg:'post API'
    })
}

const usuariosDelete = (req,res) => {
    res.json({
        msg:'delete API'
    })
}

const usuariosPatch = (req,res) => {
    res.json({
        msg:'PATCH API'
    })
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}