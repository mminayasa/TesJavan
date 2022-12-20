module.exports = app => {
    const family_users = require('../controllers/family.user.controller.js')

    var router = require('express').Router()

    // create a new family users
    router.post('/', family_users.create)

    // retrieve all family users
    router.get("/", family_users.findAll);

    // create a new family children
    router.post('/:parent_id/children', family_users.create_children)

    // update family users
    router.put('/:id', family_users.update)

    // find family users with asset
    router.get("/assets", family_users.findAllWithAsset)

    // Retrieve a single Family with id
    router.get("/:id", family_users.findOne);

    // create asset of family users
    router.post("/:id/assets", family_users.createAsset)

    // get assets
    router.get('/assets/:id', family_users.findAssetById)


    app.use('/api/family-users', router)
}