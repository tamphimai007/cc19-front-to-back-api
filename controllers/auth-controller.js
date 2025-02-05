exports.register = (req, res, next) => {
  try {
    // code
    res.json({ message: "hello register " });
  } catch (error) {
    next(error);
  }
};

exports.login = (req, res, next) => {
  //code
  try {
    console.log(aaa);
    res.json({ message: "Hello Login " });
  } catch (error) {
    next(error);
  }
};
