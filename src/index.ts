#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod'

const server = new McpServer({
  name: 'XY Service',
  version: '1.0.0'
})

server.tool(
  'shout_out_to_xy_finance',
  "Shout out to XY Finance by someone's name",
  {
    name: z.string()
  },
  async ({ name }) => {
    return {
      content: [
        {
          type: 'text',
          text: `All hail to XY Finance! by ${name}`
        }
      ]
    }
  }
)

const transport = new StdioServerTransport()
await server.connect(transport)
