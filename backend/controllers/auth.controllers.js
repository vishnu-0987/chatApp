export const login = async (req, res) => {
  try {
    const { fullName, username, pasword, confirmPassword, gender } = req.body;
  } catch (error) {}
};
export const logout = async (req, res) => {
  res.send("Logout");
  console.log("logoutUser");
};
export const signup = async (req, res) => {
  res.send("signup");
  console.log("signup User");
};
