import { getName, getBackstory, getImage } from "~/server/openai/openai"

export default defineEventHandler(async() => {
  let name = await getName()
  let backstory = await getBackstory(name)
  let image = await getImage(backstory)

  return {
    name: name,
    backstory: backstory,
    image: image,
  }
})
