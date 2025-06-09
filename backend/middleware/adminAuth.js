import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({ success: false, message: "Not Authorized" });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // Demo admin logic
    if (token_decode.demo) {
      // Allow only GET and read-only POST requests
      if (
        req.method === "GET" ||
        (req.method === "POST" && req.originalUrl.includes("/list"))
      ) {
        return next();
      }
      // Block write operations
      return res.json({ success: false, message: "Demo admin is read-only" });
    }

    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Not Authorized" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
