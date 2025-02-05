const handleErrors = (err, req, res, next) => {
  // code
  console.log("Step 3 handle Error");
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Something wrong!!" });
};

module.exports = handleErrors;
