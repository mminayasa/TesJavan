module.exports = (sequelize, DataType) => {
    const FamilyUser = sequelize.define('family_user', {
        name: {
            type: DataType.STRING
        },
        gender: {
            type: DataType.ENUM('male', 'female')
        },
        parent_id: {
            type: DataType.INTEGER
        }
    })

    return FamilyUser
}