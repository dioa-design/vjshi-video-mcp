# 概述
可以在支持MCP协议的AI模型客户端中搜索正版高清商用视频素材

# 功能
在光厂数千万条正版高清商用视频素材中，为您检索并推荐相关视频素材
- 获取带有标题和链接的结构化结果

# 开始
1. 获取密钥
你需要在[光厂MCP](https://open.vjshi.com/mcp)页面获取一个服务端密钥，通过密钥你才能够使用搜索功能。

2. 完成配置
请将YOUR_API_KEY替换为你的密钥，并将下述代码添加到支持MCP的工具中（例如Claude App、Cherry Studio、Cursor、Cline、Windsurf等）
 
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

# 许可
该项目根据 MIT 许可证授权，请参阅 LICENSE 文件获取详细信息。