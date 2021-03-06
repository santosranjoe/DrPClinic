Object.defineProperty(exports, "__esModule", { value: true });
var keyframe_animation_1 = require("tns-core-modules/ui/animation/keyframe-animation");
var css_animation_parser_1 = require("tns-core-modules/ui/styling/css-animation-parser");
var converters_1 = require("tns-core-modules/ui/styling/converters");
function createKeyframeAnimation(styles, duration, delay, easing) {
    var info = createKeyframeAnimationInfo(styles, duration, delay, easing);
    return keyframe_animation_1.KeyframeAnimation.keyframeAnimationFromInfo(info);
}
exports.createKeyframeAnimation = createKeyframeAnimation;
var createKeyframeAnimationInfo = function (styles, duration, delay, easing) { return ({
    isForwards: true,
    duration: duration || 0.01,
    delay: delay,
    curve: getCurve(easing),
    keyframes: styles.map(parseAnimationKeyframe),
}); };
var getCurve = function (value) { return converters_1.animationTimingFunctionConverter(value); };
var parseAnimationKeyframe = function (styles) { return ({
    duration: getKeyframeDuration(styles),
    declarations: getDeclarations(styles),
}); };
var getKeyframeDuration = function (styles) { return styles.offset; };
function getDeclarations(styles) {
    var unparsedDeclarations = Object.keys(styles).map(function (property) { return ({ property: property, value: styles[property] }); });
    return css_animation_parser_1.parseKeyframeDeclarations(unparsedDeclarations);
}
//# sourceMappingURL=utils.js.map