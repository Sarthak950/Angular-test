---@type ChadrcConfig 
 local M = {}
 M.ui = {theme = 'monekai'}

M.plugins = "custom.plugins"

M.highlights = "custom.highlights"
--i added this

-- M.ui{
--     nvdash = {
--         load_on_startup = true,
--         header = {
--             [[                @@@%%%%%%%%%@@                ]],
--             [[              @@@%%%%%%%%%#######%@@          ]],
--             [[            @@@@%%%%%%%######?######%@        ]],
--             [[            @@@@%%%%%%%#######:########%@     ]],
--             [[          @@@@@%%%%%%#########:??#######%     ]],
--             [[          @@@%%%%%####???###?+:??####?###@    ]],
--             [[        @@@%%%%%%#?+???###?:+?##??###?##@     ]],
--             [[      @??%@%%%##????????++:;+?+????????#@     ]],
--             [[      #  ;?%#?+; ..::+?+ ::;++++++?+???#      ]],
--             [[      %  :?%;;;:  ....:#+ :;+++????+???@      ]],
--             [[      #;;+??+++:   ...;##: ;;;++???++?%       ]],
--             [[      %#%+::++?#+;:::;?##+ ;;;;++??++#        ]],
--             [[      %?% : :???+?++???######?+;;+??#         ]],
--             [[      @%# ; ;??;;+ ;???+;;:..::.:+?%          ]],
--             [[        @???;;?+;;;+ ;:;;......;;;#@          ]],
--             [[        %##?++?+++;+ ??% @%%@@@@              ]],
--             [[        @_:?_:+_:_:#%                         ]],
--             [[                                              ]],
--         },
--     },
-- }




vim.opt.relativenumber = true






return M
