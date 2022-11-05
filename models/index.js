const Clothing = require(`./Clothing-model`);
const Furniture = require(`./Furniture-model`);
const Set = require(`./Purchased-Model`);
const Tag = require('./Tag-model');

// furniture to Set relationship
Furniture.belongsTo(Set);
Set.hasMany(Furniture);

// furniture to Tag relationship
Furniture.hasMany(Tag);
Tag.hasMany(Furniture);

// clothing to set relationship
Clothing.belongsTo(Set)
Set.hasMany(Clothing)

// clothing to tag relationship
Clothing.belongsTo(Tag)
Tag.hasMany(Clothing)




module.exports = {
    Clothing, Furniture, Set, Tag
}
