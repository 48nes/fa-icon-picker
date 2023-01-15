Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var IconPickerItem = function (_a) {
    var icon = _a.icon, size = _a.size, color = _a.color, onClick = _a.onClick, containerStyles = _a.containerStyles;
    var iconDiv = !!icon ? React__namespace.createElement('i', { className: icon }) : React__namespace.createElement("div", null);
    return (React__namespace.createElement("div", { onClick: function () { return !!onClick && onClick(icon); }, style: __assign({ fontSize: size, color: color, padding: 2 }, containerStyles) }, iconDiv));
};
IconPickerItem.defaultProps = {
    color: '#000',
    size: 24,
    onClick: function (_) { },
};

var iconList = [
    'fas fa-cat',
    'fas fa-heart',
];

var IconPicker = function (_a) {
    var value = _a.value, onChange = _a.onChange, hideSearch = _a.hideSearch, containerStyles = _a.containerStyles, buttonStyles = _a.buttonStyles, buttonIconStyles = _a.buttonIconStyles, pickerIconStyles = _a.pickerIconStyles, searchInputStyles = _a.searchInputStyles;
    var ref = React.useRef(null);
    var _b = React.useState(false), display = _b[0], changeDisplay = _b[1];
    var _c = React.useState(''), searchString = _c[0], setSearchString = _c[1];
    React.useEffect(function () {
        function handleClickOutside(event) {
            // @ts-ignore
            if (ref.current && !ref.current.contains(event.target)) {
                changeDisplay(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
    var buttonClick = function () { return changeDisplay(!display); };
    var onChangeSearch = function (event) {
        setSearchString(event.target.value);
    };
    return (React__namespace.createElement(Container, { style: buttonStyles, ref: ref, onClick: function () { return buttonClick(); } },
        React__namespace.createElement(IconPickerItem, { containerStyles: buttonIconStyles, icon: value }),
        display && (React__namespace.createElement(PickerContainer, { style: containerStyles, onClick: function (e) { return e.stopPropagation(); } },
            !hideSearch && (React__namespace.createElement(AppInput, { style: searchInputStyles, onChange: onChangeSearch, value: searchString, placeholder: "Search" })),
            iconList
                .filter(function (i) {
                return i.toLowerCase().includes(searchString.toLowerCase());
            })
                .map(function (icon) { return (React__namespace.createElement(IconPickerItem, { key: icon, icon: icon, containerStyles: pickerIconStyles, onClick: function (value) {
                    onChange(value);
                    changeDisplay(false);
                    setSearchString('');
                } })); })))));
};
IconPicker.defaultProps = {
    hideSearch: false,
};
var Container = styled__default["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  padding: 5px;\n  width: 50px;\n  min-height: 40px;\n  border-radius: 4px;\n  border-width: 1px;\n  border-color: #000;\n  border-style: solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  position: relative;\n  padding: 5px;\n  width: 50px;\n  min-height: 40px;\n  border-radius: 4px;\n  border-width: 1px;\n  border-color: #000;\n  border-style: solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  :hover {\n    cursor: pointer;\n  }\n"])));
var PickerContainer = styled__default["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 45px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  background-color: #fff;\n  padding: 5px;\n  width: 200px;\n  max-height: 300px;\n  border-radius: 4px;\n  border-width: 2px;\n  border-color: #000;\n  border-style: solid;\n  z-index: 10;\n"], ["\n  position: absolute;\n  top: 45px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  background-color: #fff;\n  padding: 5px;\n  width: 200px;\n  max-height: 300px;\n  border-radius: 4px;\n  border-width: 2px;\n  border-color: #000;\n  border-style: solid;\n  z-index: 10;\n"])));
var AppInput = styled__default["default"].input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var templateObject_1, templateObject_2, templateObject_3;

exports.IconPicker = IconPicker;
exports.IconPickerItem = IconPickerItem;
exports.iconList = iconList;
//# sourceMappingURL=index.js.map
