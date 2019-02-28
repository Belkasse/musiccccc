{
  "name": "Play",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "dfaXI",
  "actions": [
    {
      "info": "1",
      "infoIndex": "1",
      "storage": "1",
      "varName": "search",
      "name": "Store Command Params"
    },
    {
      "server": "0",
      "varName": "",
      "storage": "1",
      "varName2": "botmem",
      "name": "Get Bot as Member"
    },
    {
      "member": "2",
      "varName": "botmem",
      "permission": "CONNECT",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "22",
      "name": "Check Member Permissions"
    },
    {
      "member": "2",
      "varName": "botmem",
      "permission": "SPEAK",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "24",
      "name": "Check Member Permissions"
    },
    {
      "member": "2",
      "varName": "botmem",
      "permission": "USE_VAD",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "26",
      "name": "Check Member Permissions"
    },
    {
      "video": "${tempVars(\"search\")}",
      "key": "AIzaSyAZ1uTYfKguS-o-xru-icR8PM44F4DQhdE",
      "info": "6",
      "resultNo": "0",
      "storage": "1",
      "varName": "videokind",
      "name": "YouTube Search"
    },
    {
      "storage": "1",
      "varName": "videokind",
      "comparison": "1",
      "value": "\"youtube#video\"",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "28",
      "name": "Check Variable"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${tempVars(\"search\")}&key=AIzaSyAZ1uTYfKguS-o-xru-icR8PM44F4DQhdE",
      "path": "items[0].snippet.channelTitle",
      "storage": "2",
      "varName": "channel",
      "debugMode": "1",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${tempVars(\"search\")}&key=AIzaSyAZ1uTYfKguS-o-xru-icR8PM44F4DQhdE",
      "path": "items[0].snippet.publishedAt",
      "storage": "2",
      "varName": "published",
      "debugMode": "1",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${tempVars(\"search\")}&key=AIzaSyAZ1uTYfKguS-o-xru-icR8PM44F4DQhdE",
      "path": "items[0].snippet.thumbnails.default.url",
      "storage": "2",
      "varName": "coverart",
      "debugMode": "1",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${tempVars(\"search\")}&key=AIzaSyAZ1uTYfKguS-o-xru-icR8PM44F4DQhdE",
      "path": "items[0].snippet.title",
      "storage": "2",
      "varName": "title",
      "debugMode": "1",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${tempVars(\"search\")}&key=AIzaSyAZ1uTYfKguS-o-xru-icR8PM44F4DQhdE",
      "path": "items[0].id.videoId",
      "storage": "2",
      "varName": "url",
      "debugMode": "1",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "channel": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "playchannel",
      "name": "Store Voice Channel Info"
    },
    {
      "title": ":arrow_forward: Added to Queue: ${serverVars(\"title\")}",
      "author": "",
      "color": "e2e2e2",
      "timestamp": "true",
      "url": "https://www.youtube.com/watch?v=${serverVars(\"url\")}",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "${serverVars(\"coverart\")}",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "time": "${serverVars(\"published\")}",
      "storage": "2",
      "varName": "realpublished",
      "name": "Convert Timestamp to Date"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "In Channel:",
      "message": "${tempVars(\"playchannel\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Published At:",
      "message": "${serverVars(\"realpublished\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "channel": "0",
      "varName": "",
      "name": "Join Voice Channel"
    },
    {
      "url": "${serverVars(\"url\")}",
      "seek": "0",
      "volume": "",
      "passes": "1",
      "bitrate": "64000",
      "type": "0",
      "name": "Play YouTube Video"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: The bot doesn't have permission to join your voice channel!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: The bot doesn't have permission to speak in your voice channel!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: The bot doesn't have permission to use voice activation detection in your voice channel!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: You are either trying to play a channel or a playlist! Channels are static objects and playlists are currently unsupported! Please enter different keywords!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    }
  ]
}


client.login(process.env.BOT_TOKEN);
