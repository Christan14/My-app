"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plantList = void 0;

var _monstera = _interopRequireDefault(require("../assets/monstera.jpg"));

var _lyrata = _interopRequireDefault(require("../assets/lyrata.jpg"));

var _pothos = _interopRequireDefault(require("../assets/pothos.jpg"));

var _succulent = _interopRequireDefault(require("../assets/succulent.jpg"));

var _olivier = _interopRequireDefault(require("../assets/olivier.jpg"));

var _basil = _interopRequireDefault(require("../assets/basil.jpg"));

var _mint = _interopRequireDefault(require("../assets/mint.jpg"));

var _calathea = _interopRequireDefault(require("../assets/calathea.jpg"));

var _cactus = _interopRequireDefault(require("../assets/cactus.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var plantList = [{
  name: 'monstera',
  category: 'classique',
  id: '1ed',
  light: 2,
  water: 3,
  cover: _monstera["default"],
  price: 15
}, {
  name: 'ficus lyrata',
  category: 'classique',
  id: '2ab',
  light: 3,
  water: 1,
  cover: _lyrata["default"],
  price: 16
}, {
  name: 'pothos argenté',
  category: 'classique',
  id: '3sd',
  light: 1,
  water: 2,
  cover: _pothos["default"],
  price: 9
}, {
  name: 'calathea',
  category: 'classique',
  id: '4kk',
  light: 2,
  water: 3,
  cover: _calathea["default"],
  price: 20
}, {
  name: 'olivier',
  category: 'extérieur',
  id: '5pl',
  light: 3,
  water: 1,
  cover: _olivier["default"],
  price: 25
}, {
  name: 'cactus',
  category: 'plante grasse',
  id: '8fp',
  light: 2,
  water: 1,
  cover: _cactus["default"],
  price: 6
}, {
  name: 'basilique',
  category: 'extérieur',
  id: '7ie',
  light: 2,
  water: 3,
  cover: _basil["default"],
  price: 5
}, {
  name: 'succulente',
  category: 'plante grasse',
  id: '9vn',
  light: 2,
  water: 1,
  cover: _succulent["default"],
  price: 8
}, {
  name: 'menthe',
  category: 'extérieur',
  id: '6uo',
  light: 2,
  water: 2,
  cover: _mint["default"],
  price: 4
}];
exports.plantList = plantList;