import{createServices, getServices, updateServices} from "../services/Services.js"

export const createServiceController = async (req, res) => {
    let result = await createServices(req);
    return res.json(result);
}

export const getServiceController = async (req, res) => {
    let result = await getServices(req);
    return res.json(result);
}
export const UpdateServiceController = async (req, res) => {
    let result = await updateServices(req);
    return res.json(result);
}

export const deleteServiceController = async (req, res) => {
    let result = await deleteServices(req);
    return res.json(result);
}