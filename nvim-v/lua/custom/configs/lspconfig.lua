local on_attach = require("plugins.configs.lspconfig").on_attach 
local capabilities = require("plugins.configs.lspconfig").capabilities

local lspconfig = require "lspconfig"
--add js html css hbs json node to lsp
local servers = { "clangd", "html", "cssls","glint" }



for _, lsp in ipairs(servers) do
    lspconfig[lsp].setup {
        on_attach = on_attach,
        capabilities = capabilities,
    }
end


local cmp_nvim_lsp = require "cmp_nvim_lsp"

require("lspconfig").clangd.setup {
    on_attach = on_attach,
    filetypes = { "c", "cpp", "objc", "objcpp", "" },
    single_file_support = true,
    capabilities = cmp_nvim_lsp.default_capabilities(),
    cmd = {
        "clangd",
        "--offset-encoding=utf-16",
    },
}

-- require("lspconfig").glint.setup{
--     on_attach = on_attach,
--     capabilities = cmp_nvim_lsp.default_capabilities(),
--     cmd = {
--         "glint",
--         "--config",
--         vim.fn.expand("~/.config/glint/config.js")
--     },
-- }


local lspconfig = require "lspconfig"
