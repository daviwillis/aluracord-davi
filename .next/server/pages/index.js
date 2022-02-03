"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PaginaInicial)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "@skynexui/components"
var components_ = __webpack_require__(704);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./config.json
var config = __webpack_require__(181);
;// CONCATENATED MODULE: ./pages/index.js






function Titulo(props) {
    const Tag = props.tag || 'h1';
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Tag, {
                className: style_default().dynamic([
                    [
                        "8b94c9a3767554e0",
                        [
                            Tag,
                            config/* theme.colors.neutrals.000 */.rS.O.O.M6
                        ]
                    ]
                ]),
                /*#__PURE__*/ children: props.children
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "8b94c9a3767554e0",
                dynamic: [
                    Tag,
                    config/* theme.colors.neutrals.000 */.rS.O.O.M6
                ],
                children: `${Tag}.__jsx-style-dynamic-selector{color:${config/* theme.colors.neutrals.000 */.rS.O.O.M6};
font-size:24px;
font-weight:600}`
            })
        ]
    }));
}
function PaginaInicial() {
    const [username, setUsername] = external_react_default().useState('');
    const roteamento = (0,router_namespaceObject.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_.Box, {
            styleSheet: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                //   backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: 'url(https://img.wallpapersafari.com/desktop/1920/1080/53/88/SBpLfJ.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundBlendMode: 'multiply',
                width: '100vw',
                height: '100vh'
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Box, {
                styleSheet: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: {
                        xs: 'column',
                        sm: 'row'
                    },
                    width: '100%',
                    maxWidth: '700px',
                    borderRadius: '5px',
                    padding: '32px',
                    margin: '16px',
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    backgroundColor: config/* theme.colors.neutrals.700 */.rS.O.O.qy
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Box, {
                        as: "form",
                        onSubmit: function(infosDoEvento) {
                            infosDoEvento.preventDefault();
                            console.log('Algu\xe9m submeteu o form');
                            roteamento.push('/chat');
                        // window.location.href = '/chat';
                        },
                        styleSheet: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: {
                                xs: '100%',
                                sm: '50%'
                            },
                            textAlign: 'center',
                            marginBottom: '32px'
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Titulo, {
                                tag: "h2",
                                children: "Vamos conversar?"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                                variant: "body3",
                                styleSheet: {
                                    marginBottom: '32px',
                                    color: config/* theme.colors.neutrals.300 */.rS.O.O.wl
                                },
                                children: config/* name */.u2
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.TextField, {
                                value: username,
                                onChange: function(event) {
                                    console.log('usuario digitou', event.target.value);
                                    // Onde ta o valor?
                                    const valor = event.target.value;
                                    // Trocar o valor da variavel
                                    // através do React e avise quem precisa
                                    setUsername(valor);
                                },
                                style: {
                                    width: 320
                                },
                                label: "Digite o seu username do GitHub",
                                textFieldColors: {
                                    neutral: {
                                        textColor: config/* theme.colors.neutrals.200 */.rS.O.O.Ug,
                                        mainColor: config/* theme.colors.neutrals.900 */.rS.O.O.H,
                                        mainColorHighlight: config/* theme.colors.primary.500 */.rS.O.T.pl,
                                        backgroundColor: config/* theme.colors.neutrals.800 */.rS.O.O.YY
                                    }
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Button, {
                                type: "submit",
                                label: "Entrar",
                                fullWidth: true,
                                buttonColors: {
                                    contrastColor: config/* theme.colors.neutrals.000 */.rS.O.O.M6,
                                    mainColor: config/* theme.colors.primary.500 */.rS.O.T.pl,
                                    mainColorLight: config/* theme.colors.primary.400 */.rS.O.T.aD,
                                    mainColorStrong: config/* theme.colors.primary.600 */.rS.O.T.RW
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Box, {
                        styleSheet: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: config/* theme.colors.neutrals.800 */.rS.O.O.YY,
                            border: '1px solid',
                            borderColor: config/* theme.colors.neutrals.999 */.rS.O.O.jh,
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px'
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Image, {
                                styleSheet: {
                                    borderRadius: '50%',
                                    marginBottom: '16px'
                                },
                                src: `https://github.com/${username}.png`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                                variant: "body4",
                                styleSheet: {
                                    color: config/* theme.colors.neutrals.200 */.rS.O.O.Ug,
                                    backgroundColor: config/* theme.colors.neutrals.900 */.rS.O.O.H,
                                    padding: '3px 10px',
                                    borderRadius: '1000px'
                                },
                                children: username
                            })
                        ]
                    })
                ]
            })
        })
    }));
};


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

/***/ }),

/***/ 816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [181], () => (__webpack_exec__(2)));
module.exports = __webpack_exports__;

})();