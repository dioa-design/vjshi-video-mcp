[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/dioa-design-vjshi-video-mcp-badge.png)](https://mseep.ai/app/dioa-design-vjshi-video-mcp)

# 🎬 VJshi MCP Video Search Tool

## 📖 About This Project
🔍 Search for licensed high-quality commercial videos in AI clients that support MCP protocol

---

## ✨ Main Features
🎯 Find and get video recommendations from VJshi's huge library of licensed high-quality commercial video content

### What You Get:
- 🎥 Huge library of licensed, high-quality videos
- 🏢 Commercial licence included - no copyright worries
- 🚀 Quick and smart search results
- 📋 Easy-to-use output format

---

## 🚀 Getting Started

### Step 1️⃣: Get Your API Key
🔑 Go to the [VJshi MCP](https://www.vjshi.com/open/mcp) to get your server key

> 💡 **Note**: You need this key to use the search feature

### Step 2️⃣: Set It Up
⚙️ Replace `YOUR_API_KEY` with your real key, then add this setup to your MCP-compatible AI client

**Works With:** Claude App, Cherry Studio, Cursor, Cline, Windsurf, and more

```json
{
  "mcpServers": {
    "vjshi-video-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@vjshi/vjshi-video-mcp@latest"
      ],
      "env": {
        "VJSHI_API_KEY": "YOUR_API_KEY"
      },
      "disabled": false,
      "isActive": true
    }
  }
}
```

---

## 📄 Licence
📜 This project uses the **MIT Licence**. Check the LICENSE file for full details.

---

## 🤝 Get Help
Got questions or ideas? Visit [VJshi MCP](https://www.vjshi.com/open/mcp) for more support!