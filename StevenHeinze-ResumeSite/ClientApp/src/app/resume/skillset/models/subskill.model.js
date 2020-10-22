"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var skill_model_1 = require("./skill.model");
var SubSkill = /** @class */ (function (_super) {
    __extends(SubSkill, _super);
    function SubSkill() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SubSkill;
}(skill_model_1.Skill));
exports.SubSkill = SubSkill;
//# sourceMappingURL=subskill.model.js.map