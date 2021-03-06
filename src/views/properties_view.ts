import Property from "../models/Property";

export default {
  render(property: Property) {
    return {
      id: property.id,
      image: `${process.env.API_URL}/image/${property.image}`,
      type_property: property.type_property,
      city: property.city,
      state: property.state,
      neighborhood: property.neighborhood,
      price: property.price,
      dependencies: property.dependencies,
    }
  },

  renderMany(properties: Property[]) {
    return properties.map(property => this.render(property));
  }
}