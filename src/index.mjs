import * as core from '@actions/core'
import axios from 'axios'

try {
  const token = core.getInput('token')
  console.log(`Token: ${token}`)

  const message = JSON.parse(core.getInput('message'))
  console.log(`Message: ${message}`)

  const update = !!message.ts

  const { data, status } = await axios.post(
    `https://slack.com/api/chat.${update ? 'update' : 'postMessage'}`,
    message,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json; charset=utf-8'
      }
    }
  )

  console.log(data)

  if (status == 200) {
    const timestamp = data.message.ts
    console.log(`output: ${timestamp}`)
    core.setOutput("timestamp", timestamp)
  }

} catch (error) {
  core.setFailed(error.message)
}
