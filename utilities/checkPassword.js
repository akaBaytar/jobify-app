import bcrypt from 'bcrypt';

const checkPassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};

export default checkPassword;
