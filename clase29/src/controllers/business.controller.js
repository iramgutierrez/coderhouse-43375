import Business from "../dao/classes/business.dao.js"

const businessService= new Business();
export const getBusiness = async (req, res) => {
    let result = await businessService.getBusiness();
    if(!result) return res.status(500).send({status:"error", result:"something went wrong"})
    res.send({status:"success", result})
}

export const getBusinessById = async (req, res) => {
    const {bid} = req.params;
    let result = await businessService.getBusinessById(bid);
    if(!result) return res.status(500).send({status:"error", result:"something went wrong"})
    res.send({status:"success", result:result})
}

export const createBusiness = async (req, res) => {
    const business = req.body; // las validaciones de campos van por tu cuenta
    let result = await businessService.saveBusiness(business);
    if(!result) return res.status(500).send({status:"error", result:"something went wrong"})
    res.send({status:"success", result:result})
}

export const addProduct = async (req, res) => {
    let product = req.body; // las validaciones de campos van por tu cuenta
    let business = await businessService.getBusinessById(req.params.bid);
    business.products.push(product);
    await businessService.updateBusiness(business._id, business);
    res.send({status:"success", result:"business updated"})
}