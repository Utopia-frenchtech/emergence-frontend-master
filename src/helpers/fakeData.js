// @see http://marak.github.io/faker.js/
import faker from 'faker'
export default {
  message: (options) => ({
    content: faker.lorem.paragraph(),
    createdAt: (options && options.createdAt) || faker.date.past(),
    sender: {
      id: (options && options.id) || faker.random.uuid(),
      name: faker.name.firstName() + ' ' + faker.name.lastName()
    }
  }),
  shop: {
    category: () => ({
      id: faker.random.uuid(),
      title: faker.hacker.noun(),
      bgColor: faker.internet.color(),
      icon: faker.image.abstract(32, 32)
    })
  }
}
