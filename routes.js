const express = require("express");
const router = new express.Router();


// app.use(express.json())

const USERS = [{
    id: 1,
    username: "hummingbird123"
}, {
    id: 2,
    username: "ravenman"
}];

router.get("/", function (req, res) {
    return res.json({
        users: USERS
    });
});




router.get('/:id', (req, res) => {
    const user = USERS.find(u => u.id === +req.params.id)
    res.json({
        user
    })
});
// router.delete("/:id", function (req, res) {
//     const idx = users.findIndex(u => u.id === +req.params.id);
//     users.splice(idx, 1);
//     return res.json({
//         message: "deleted"
//     })
// })

module.exports = router;