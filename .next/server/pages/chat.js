"use strict";
(() => {
var exports = {};
exports.id = 180;
exports.ids = [180];
exports.modules = {

/***/ 202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ChatPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@skynexui/components"
var components_ = __webpack_require__(704);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./config.json
var config = __webpack_require__(181);
;// CONCATENATED MODULE: external "@supabase/supabase-js"
const supabase_js_namespaceObject = require("@supabase/supabase-js");
;// CONCATENATED MODULE: ./pages/chat.js





// Como fazer AJAX: https://medium.com/@omariosouto/entendendo-como-fazer-ajax-com-a-fetchapi-977ff20da3c6
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzg5OTg0OSwiZXhwIjoxOTU5NDc1ODQ5fQ.wq8Xy2PnPlWAEOLTBvLc2-hIoJUzkUdgBkXkm4D4tH0';
const SUPABASE_URL = 'https://igrbivtqeawobmribeqx.supabase.co';
const supabaseClient = (0,supabase_js_namespaceObject.createClient)(SUPABASE_URL, SUPABASE_ANON_KEY);
function ChatPage() {
    const [mensagem1, setMensagem] = external_react_default().useState('');
    const [listaDeMensagens, setListaDeMensagens] = external_react_default().useState([]);
    external_react_default().useEffect(()=>{
        supabaseClient.from('mensagens').select('*').order('id', {
            ascending: false
        }).then(({ data  })=>{
            console.log('Dados da consulta:', data);
            setListaDeMensagens(data);
        });
    }, []);
    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            // id: listaDeMensagens.length + 1,
            de: 'daviwillis',
            texto: novaMensagem
        };
        supabaseClient.from('mensagens').insert([
            // Tem que ser um objeto com os MESMOS CAMPOS que você escreveu no supabase
            mensagem
        ]).then(({ data  })=>{
            console.log('Criando mensagem: ', data);
            setListaDeMensagens([
                data[0],
                ...listaDeMensagens, 
            ]);
        });
        setMensagem('');
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(components_.Box, {
        styleSheet: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: config/* theme.colors.primary.500 */.rS.O.T.pl,
            backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundBlendMode: 'multiply',
            color: config/* theme.colors.neutrals.000 */.rS.O.O.M6
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Box, {
            styleSheet: {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                borderRadius: '5px',
                backgroundColor: config/* theme.colors.neutrals.700 */.rS.O.O.qy,
                height: '100%',
                maxWidth: '95%',
                maxHeight: '95vh',
                padding: '32px'
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Box, {
                    styleSheet: {
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: config/* theme.colors.neutrals.600 */.rS.O.O.RW,
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px'
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(MessageList, {
                            mensagens: listaDeMensagens
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_.Box, {
                            as: "form",
                            styleSheet: {
                                display: 'flex',
                                alignItems: 'center'
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_.TextField, {
                                value: mensagem1,
                                onChange: (event)=>{
                                    const valor = event.target.value;
                                    setMensagem(valor);
                                },
                                onKeyPress: (event)=>{
                                    if (event.key === 'Enter') {
                                        event.preventDefault();
                                        handleNovaMensagem(mensagem1);
                                    }
                                },
                                placeholder: "Insira sua mensagem aqui...",
                                type: "textarea",
                                styleSheet: {
                                    width: '100%',
                                    border: '0',
                                    resize: 'none',
                                    borderRadius: '5px',
                                    padding: '6px 8px',
                                    backgroundColor: config/* theme.colors.neutrals.800 */.rS.O.O.YY,
                                    marginRight: '12px',
                                    color: config/* theme.colors.neutrals.200 */.rS.O.O.Ug
                                }
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
function Header() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Box, {
            styleSheet: {
                width: '100%',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                    variant: "heading5",
                    children: "Chat"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_.Button, {
                    variant: "tertiary",
                    colorVariant: "neutral",
                    label: "Logout",
                    href: "/"
                })
            ]
        })
    }));
}
function MessageList(props) {
    console.log(props);
    return(/*#__PURE__*/ jsx_runtime_.jsx(components_.Box, {
        tag: "ul",
        styleSheet: {
            overflow: 'scroll',
            display: 'flex',
            flexDirection: 'column-reverse',
            flex: 1,
            color: config/* theme.colors.neutrals.000 */.rS.O.O.M6,
            marginBottom: '16px'
        },
        children: props.mensagens.map((mensagem)=>{
            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Text, {
                tag: "li",
                styleSheet: {
                    borderRadius: '5px',
                    padding: '6px',
                    marginBottom: '12px',
                    hover: {
                        backgroundColor: config/* theme.colors.neutrals.700 */.rS.O.O.qy
                    }
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Box, {
                        styleSheet: {
                            marginBottom: '8px'
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Image, {
                                styleSheet: {
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px'
                                },
                                src: `https://github.com/${mensagem.de}.png`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                                tag: "strong",
                                children: mensagem.de
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                                styleSheet: {
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: config/* theme.colors.neutrals.300 */.rS.O.O.wl
                                },
                                tag: "span",
                                children: new Date().toLocaleDateString()
                            })
                        ]
                    }),
                    mensagem.texto
                ]
            }, mensagem.id));
        })
    }));
}


/***/ }),

/***/ 704:
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [181], () => (__webpack_exec__(202)));
module.exports = __webpack_exports__;

})();