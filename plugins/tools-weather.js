import axios from "axios"

let handler = async (m, { args }) => {
  if (!args[0]) throw " please provide place or location name"
  try {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`
    )
    const res = await response
    const name = res.data.name
    const Country = res.data.sys.country
    const Weather = res.data.weather[0].description
    const Temperature = res.data.main.temp + "°C"
    const Minimum_Temperature = res.data.main.temp_min + "°C"
    const Maximum_Temperature = res.data.main.temp_max + "°C"
    const Humidity = res.data.main.humidity + "%"
    const Wind = res.data.wind.speed + "km/h"
    const wea = `╔╦═══════════❑\n║║ location: ${name}\n║║ Country: ${Country}\n║║ Weather: ${Weather}\n║║Temperature: ${Temperature}\n║║ Minimum Temperature: ${Minimum_Temperature}\n║║ Maximum Temperature: ${Maximum_Temperature}\n║║ Humidity: ${Humidity}\n║║ Wind: ${Wind}\n╚╩════════❑
  `

    m.reply(wea)
    m.react('🌤️')
  } catch (e) {
    return "Error location not found!!!"
  }
}

handler.help = ['weather']
handler.tags = ['tools']

handler.command = /^(weather)$/i

export default handler
