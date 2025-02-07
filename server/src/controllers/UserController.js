import{UserRegistrationService, UserLogInService, UserLogOutService} from "../services/UsersService.js";



// Registration Service
export const userRegistration = async (req, res) => {
  const result = await UserRegistrationService(req);
  return res.json(result);
}

// LogIn service
export const userLogIn = async (req, res) => {
  const result = await UserLogInService(req, res);
  return res.json(result)
}

// LogOut service
export const userLogOut = async (req, res) => {
  const result = await UserLogOutService(req, res);
  return res.json(result);
}