const Clothing = require(`./Clothing-model`);
const Crafting = require('./Crafting-Model');
const Furniture = require(`./Furniture-model`);
const Set = require(`./Set-Model`);
const Tag = require('./Tag-model');
const User = require(`./User-model`);

// furniture to Set relationship
Furniture.belongsTo(Set);
Set.hasMany(Furniture);

// furniture to Tag relationship
Furniture.belongsTo(Tag);
Tag.hasMany(Furniture);

// clothing to set relationship
Clothing.belongsTo(Set)
Set.hasMany(Clothing)

// clothing to tag relationship
Clothing.belongsTo(Tag)
Tag.hasMany(Clothing)

// Crafting to Set relationship
Crafting.belongsTo(Set)
Set.hasMany(Crafting)

// Crafting to Tag relationship
Crafting.belongsToMany(Tag)
Tag.hasMany(Crafting)

// User to Furniture
User.hasMany(Furniture)
Furniture.belongsToMany(User)

// User to clothing
User.hasMany(Clothing)
Clothing.belongsToMany(User)

// User to crafting
User.hasMany(Crafting)
Crafting.belongsToMany(User)

module.exports = {
    Clothing, Furniture, Set, Tag
}
