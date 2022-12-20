module.exports = (sequelize, DataTypes) => {
    const FamilyUserAsset = sequelize.define('family_user_asset', {
        asset_name: {
            type: DataTypes.STRING,
        }
    })

    return FamilyUserAsset;
}