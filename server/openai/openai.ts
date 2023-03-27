import { Configuration, OpenAIApi } from "openai"

const runtimeConfig = useRuntimeConfig()
const configuration = new Configuration({ apiKey: runtimeConfig.OPENAI_API_KEY, });
const openai = new OpenAIApi(configuration)

function generateNamePrompt() {
  return `
  Suggest a name for a fictional character,
  in the style of MTG
  `
  // return `Suggest a name for a BattleMech prototype`
}

function generateBackstoryPrompt(name: any) {
  return `
  Write a very short bio for a character named ${name}.
  Describe their skills, weaponry, where they live, what they look like,
  do not mention their name again,
  answer maximum length of 80 characters,
  `
  // return `
  // Write a very short technical description for a BattleMech: ${name}.
  // Describe their weapons, power and defense system, their purpose,
  // do not mention their name again,
  // answer maximum length of 80 characters`
}

function generateImagePrompt(backstory: any) {
  return `
  A digital illustration of ${backstory},
  4k, detailed, trending in artstation,
  portrait, fantasy vivid colors,
  `
  // return `
  // a digital illustration of battlemech: ${backstory},
  // 4k, detailed, trending in artstation,
  // action battle scene on a futuristic battlefield,
  // photorealistic, ultrarealistic,`
}

export async function getName() {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generateNamePrompt(),
    temperature: .7,
    max_tokens: 10,
  })
  let text: any = completion.data.choices[0].text
  // remove unnecessary punctuation and other potential leftovers
  return text.replace(/[.:_]/gi, '')
}

export async function getBackstory(name: any) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generateBackstoryPrompt(name),
    temperature: .7,
    max_tokens: 100,
  })
  return completion.data.choices[0].text
}

export async function getImage(backstory: any) {
  const completion = await openai.createImage({
    prompt: generateImagePrompt(backstory),
    n: 1,
    size: "256x256",
    response_format: "url"
  })
  return completion.data.data[0].url
}
