const { product } = require('../models')

exports.addProduct = async(req,res) => {
    try {
        const data = {
            productName : req.body.productName,
            harga : req.body.harga,
            description : req.body.description,
            image : req.file.filename
        }

        await product.create(data)

        res.send({
            message : "sucesss"
        })
    } catch (error) {
        console.log(error);
        res.status({
          status: "failed",
          message: "Server Error",
    })
    }
}


exports.getProducts = async(req,res) => {
    try {
        let data = await product.findAll({
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          })

          data = JSON.parse(JSON.stringify(data))

          data = data.map((item) => {
            return { ...item, image: process.env.PATH_FILE + item.image };
          })

        res.send({
            message : "sucesss",
            data
        })
    } catch (error) {
        console.log(error);
        res.status({
          status: "failed",
          message: "Server Error",
    })
    }
}


exports.getProduct = async(req,res) => {
    try {
        const { id } = req.params
        let data = await product.findOne({
            where : {
                id : id
            },
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          })

          data = JSON.parse(JSON.stringify(data))

          data = {
            ...data,
            image: process.env.PATH_FILE + data.image,
            }

        res.send({
            message : "sucesss",
            data
        })
    } catch (error) {
        console.log(error);
        res.status({
          status: "failed",
          message: "Server Error",
    })
    }
}


exports.updateProduct = async(req,res) => {
    try {
        const { id } = req.params
        const data = {
            productName : req?.body?.productName,
            harga : req?.body?.harga,
            description : req?.body?.description,
            image : req?.file?.filename
        }
        
        await product.update(data ,{
            where : {
                id : id
            },
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          })

        res.send({
            message : "sucesss",
            data
        })
    } catch (error) {
        console.log(error);
        res.status({
          status: "failed",
          message: "Server Error",
    })
    }
}


exports.deleteProduct = async(req,res) => {
    try {
        const { id } = req.params
        
        await product.destroy({
            where : {
                id : id
            }})

        res.send({
            message : "sucesss"
        })
    } catch (error) {
        console.log(error);
        res.status({
          status: "failed",
          message: "Server Error",
    })
    }
}

