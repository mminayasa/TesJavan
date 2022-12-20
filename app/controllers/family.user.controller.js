const db = require('../models')
const FamilyUser = db.family_users
const FamilyUserAsset = db.family_user_assets

// create a new family users
exports.create = (req, res) => {
    // validate request
    if (!req.body.name) {
        res.status(400).send({
            message: 'Name cannot be empty!'
        })
        return
    }

    // create a family
    const family_user = {
        name: req.body.name,
        gender: req.body.gender
    }

    // save a family
    FamilyUser.create(family_user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the Family'
            })
        })
}

// create family children
exports.create_children = (req, res) => {
    // validate request
    if (!req.body.name && !req.body.parent_id) {
        res.status(400).send({
            message: 'Name and parent_id cannot be empty!'
        })
        return
    }

    // create a family
    const family_user = {
        name: req.body.name,
        gender: req.body.gender,
        parent_id: req.params.parent_id
    }

    // save a family
    FamilyUser.create(family_user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the Family'
            })
        })
}

// get all family user
exports.findAll = (req, res) => {
    const parent_id = req.query.parent_id;
    var condition = parent_id ? parent_id : null;

    FamilyUser.findAll({ where: { parent_id: condition } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving family users."
            });
        });
};

// Find a single Familiy with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    FamilyUser.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Family with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Family with id=" + id
            });
        });
};

// update family
exports.update = (req, res) => {
    const id = req.params.id;

    FamilyUser.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Family user was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update family user with id=${id}. Maybe Family was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Family with id=" + id
            });
        });
};

// delete family user specific id
exports.delete = (req, res) => {
    const id = req.params.id;

    FamilyUser.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Family was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Family with id=${id}. Maybe Family was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Family with id=" + id
            });
        });
};

// Asset Parts
// Create and save assets
exports.createAsset = (req, res) => {
    return FamilyUserAsset.create({
        asset_name: req.body.asset_name,
        familyUserId: req.params.id
    })
        .then((asset) => {
            console.log(">> Created asset: " + JSON.stringify(asset, null, 4))
            res.send(asset)
        })
        .catch((err) => {
            console.log(">> Error while creating asset: ", err);
        })
}

// find family users with asset
exports.findFamilyWithAsset = (familyUserId) => {
    return FamilyUser.findByPk(familyUserId, { include: ["family_user_assets"] })
        .then((family) => {
            res.send(family)
        })
        .catch((err) => {
            console.log(">> Error while finding family user: ", err);
        });
};

// get the assets for a given asset id
exports.findAssetById = (id) => {
    return FamilyUserAsset.findByPk(id, { include: ["family_user"] })
        .then((asset) => {
            return asset;
        })
        .catch((err) => {
            console.log(">> Error while finding asset: ", err);
        });
};

exports.findAllWithAsset = (req, res) => {
    return FamilyUser.findAll({
        include: ["family_user_assets"],
    }).then((family_users) => {
        res.send(family_users)
    });
};



