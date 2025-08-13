#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
function getApiKey() {
    const apiKey = process.env.VJSHI_API_KEY;
    if (!apiKey) {
        console.error("VJSHI_API_KEY environment variable is not set");
        process.exit(1);
    }
    return apiKey;
}
const VJSHI_API_KEY = getApiKey();
const VJSHI_API_URL = "https://www.vjshi.com/api";
const SEARCH_VIDEO_TOOL = {
    name: "SEARCH_VIDEO",
    description: "使用关键词搜索视频",
    inputSchema: {
        type: "object",
        properties: {
            keyword: {
                type: "string",
                description: "需要搜索的关键词，关键词之间用空格分割，关键词数量不能超过5个"
            }
        },
        required: ["keyword"]
    }
};
const TOOLS = [
    SEARCH_VIDEO_TOOL,
];
async function handleVideoSearch(keyword) {
    const url = new URL(`${VJSHI_API_URL}/vjh/video/search/mcp`);
    url.searchParams.set("keyword", keyword);
    url.searchParams.append("sk", VJSHI_API_KEY);
    const response = await fetch(url.toString());
    const data = await response.json();
    if (data.code === 'SUCCESS') {
        return {
            content: [{
                    type: "text",
                    text: JSON.stringify(data.data, null, 2)
                }],
        };
    }
    if (data.data?.value) {
        const errorMessage = data.data.value;
        return {
            content: [{
                    type: "text",
                    text: `Error calling tool '${SEARCH_VIDEO_TOOL.name}': ${errorMessage}`
                }],
            isError: true
        };
    }
    return {
        content: [{
                type: "text",
                text: `Error calling tool '${SEARCH_VIDEO_TOOL.name}': ${data.code} - ${data.message}`
            }],
        isError: true
    };
}
const server = new Server({
    name: "mcp-server/vjshi-video-mcp",
    version: "1.0.0",
}, {
    capabilities: {
        tools: {},
    },
});
server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: TOOLS,
}));
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const name = request.params.name;
    try {
        if (name === SEARCH_VIDEO_TOOL.name) {
            const { keyword } = request.params.arguments;
            return await handleVideoSearch(keyword);
        }
        return {
            content: [{
                    type: "text",
                    text: `Unknown tool: ${request.params.name}`
                }],
            isError: true
        };
    }
    catch (error) {
        return {
            content: [{
                    type: "text",
                    text: `Error: ${error instanceof Error ? error.message : String(error)}`
                }],
            isError: true
        };
    }
});
async function runServer() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("VJSHI Video MCP Server running on stdio");
}
runServer().catch((error) => {
    console.error("Fatal error running server:", error);
    process.exit(1);
});
