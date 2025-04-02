import { faker } from '@faker-js/faker'
export const generateMockUserData = () => {
  const email = faker.internet.email();
  return {
    token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMUpQVjY0UjlGUUcxTTVDNkUzQUpONVhXSyIsImxvYyI6ImZyb250IiwiZXhwIjoxNzQzNTU4OTgwfQ.${faker.string.alphanumeric(
      43
    )}`,
    user_id: faker.string.alphanumeric(20).toUpperCase(),
    invite_code: faker.string.numeric(8),
    invite_link: `https://app.dorylus.chat/${faker.string.numeric(8)}`,
    parent_user_id: faker.datatype.boolean() ? faker.string.alphanumeric(20).toUpperCase() : "",
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
    is_agent: faker.datatype.boolean({ probability: 0.1 }),
    bio: faker.person.bio(),
    phone: faker.phone.number(),
    email: email,
  }
}
