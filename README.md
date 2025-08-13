# Overview
You can search for licensed high-definition commercial video material in AI model clients that support the MCP protocol.

# Features
Search and recommend relevant video materials from Guangchang's tens of millions of licensed high-definition commercial videos
- Get structured results with titles and links

# Getting Started
1. Get a Key
You need to obtain a server key from the [GuangChang MCP](https://open.vjshi.com/mcp) to access the search API capabilities.

2. Complete Configuration
Please replace YOUR_API_KEY with your key and add the following code to an MCP-compatible tool (such as Claude App, Cherry Studio, Cursor, Cline, Windsurf, etc.)

```json
    {
      "mcpServers": {
        "vjshi-video-mcp": {
          "command": "npx",
          "args": ["-y","@vjshi/vjshi-video-mcp"],
          "env": {
            "VJSHI_API_KEY": "YOUR_API_KEY"
          },
          "disabled": false,
          "isActive": true
        }
      }
    }
```

# License
This project is licensed under the MIT License - see the LICENSE file for details.