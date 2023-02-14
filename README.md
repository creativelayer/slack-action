# slack-action

This action posts a message to slack

## Inputs

### `token`

**Required** Your slack authorization token.

### `message`

**Required** The message to post. The message is formatted JSON and may include a "ts" field, which causes the action to use `chat.update` instead of `chat.postMessage`

## Outputs

### `timestamp`

The timestamp from the response, useful for updating messages later.

## Example usage

```yaml
uses: creativelayer/slack-action@v1.0
with:
  token: '${{ secrets.SLACK_TOKEN }}'
  message: |
    {
      "ts":"optional timestamp of a previous message",
      "channel":"<channel-id>", 
      "blocks": [
        {
          "type":"section",
          "text":{
            "type":"mrkdwn",
            "text":"*Hello!*"
          }
        }
      ]
    }'
```
