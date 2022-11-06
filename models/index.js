const Clothing = require(`./Clothing-model`);
const Crafting = require('./Crafting-Model');
const Furniture = require(`./Furniture-model`);
const Set = require(`./Set-Model`);
const Tag = require('./Tag-model');

// furniture to Set relationship
Furniture.belongsTo(Set);
Set.hasMany(Furniture);

// furniture to Tag relationship
Furniture.belongsToMany(Tag);
Tag.hasMany(Furniture);

// clothing to set relationship
Clothing.belongsTo(Set)
Set.hasMany(Clothing)

// clothing to tag relationship
Clothing.belongsToMany(Tag)
Tag.hasMany(Clothing)

// Crafting to Set relationship
Crafting.belongsTo(Set)
Set.hasMany(Crafting)

// Crafting to Tag relationship
Crafting.belongsToMany(Tag)
Tag.hasMany(Crafting)


module.exports = {
    Clothing, Furniture, Set, Tag
}
