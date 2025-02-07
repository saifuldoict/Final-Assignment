import {createTeamServices, deleteTeamServices, getTeamServices, updateTeamServices} from "../services/TeamService.js";


export const createTeamController = async (req, res) => {
    let result = await createTeamServices(req);
    return res.json(result);
}

export const getTeamController = async (req, res) => {
    let result = await getTeamServices(req);
    return res.json(result);
}
export const UpdateTeamController = async (req, res) => {
    let result = await updateTeamServices(req);
    return res.json(result);
}

export const deleteTeamController = async (req, res) => {
    let result = await deleteTeamServices(req);
    return res.json(result);
}