function index(req, res, next) {
    res.status(200).json({
        message: "Express.js Deployment test on vercel"
    })
}

module.exports = {
    index
}