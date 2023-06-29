local plugins = {

    -- {
    --     "jackMort/ChatGPT.nvim",
    --     event = "VeryLazy",
    --     dependency = {
    --         "MunifTanjim/nui.nvim",
    --         "nvim-lua/plenary.nvim",
    --         "nvim-telescope/telescope.nvim"
    --     },
    -- },


    {
        'kevinhwang91/nvim-ufo',
    },

    {
        "neovim/nvim-lspconfig",
        config = function ()
            require "plugins.configs.lspconfig"
            require "custom.configs.lspconfig"
        end,
    },

    {
        "ThePrimeagen/vim-be-good",
    },

    {

        "zbirenbaum/copilot.lua",
        lazy = false,
        cmd = "Copilot",
        event = "InsertEnter",
        config = function()
            require("copilot.suggestion").is_visible()
            require("copilot.suggestion").accept()
            require("copilot.suggestion").accept_word()
            require("copilot.suggestion").accept_line()
            require("copilot.suggestion").next()
            require("copilot.suggestion").prev()
            require("copilot.suggestion").dismiss()
            require("copilot.suggestion").toggle_auto_trigger()
            require("copilot").setup({
                panel = {
                    enabled = true,
                    auto_refresh = true,
                    keymap = {
                        jump_prev = "[[",
                        jump_next = "]]",
                        accept = "<CR>",
                        --accept = "<Tab>",
                        refresh = "gr",
                        open = "<M-CR>"
                    },
                    layout = {
                        position = "bottom", -- | top | left | right
                        ratio = 0.4
                    },
                },
                suggestion = {
                    enabled = true,
                    auto_trigger = true,
                    debounce = 75,
                    keymap = {
                        accept = "<S-Tab>",
                        --accept_word = false,
                        --accept_line = false,
                        next = "<M-]>",
                        prev = "<M-[>",
                        dismiss = "<C-]>",
                    },
                },
                filetypes = {
                    -- c = false,
                    -- cpp = false,
                    python = true,
                    yaml = false,
                    markdown = false,
                    help = false,
                    gitcommit = false,
                    gitrebase = false,
                    hgcommit = false,
                    svn = false,
                    cvs = false,
                    ["."] = false,
                },
                copilot_node_command = 'node', -- Node.js version must be > 16.x
                server_opts_overrides = {},
            })
        end,
    },

    {
        "kylechui/nvim-surround",
        config = function()
            require("surround").setup({})
        end,
    },

    {
        "folke/trouble.nvim",
        requires = "kyazdani42/nvim-web-devicons",
        config = function()
            require("trouble").setup({
                auto_open = false,
                auto_close = true,
            })
        end,
    },
    {
        "cdelledonne/vim-cmake",
        ft = "cmake",

    },
    {
        "jose-elias-alvarez/null-ls.nvim",
        lazy = false,
        requires = {
            "nvim-lua/plenary.nvim",
            "neovim/nvim-lspconfig",
        },
    },

    {
        "glepnir/lspsaga.nvim",
        event = "LspAttach",
        config = function()
            require("lspsaga").setup({})
        end,
        dependencies = {
            {"nvim-tree/nvim-web-devicons"},
            --Please make sure you install markdown and markdown_inline parser
            {"nvim-treesitter/nvim-treesitter"}
        }

    },

    {
        "mustache/vim-mustache-handlebars",
        lazy = false,
    },
}

return plugins
