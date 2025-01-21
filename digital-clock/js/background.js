/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/

chrome.runtime.onMessage.addListener((request, sender) => {
    var _a, _b, _c;
    if (request === "open_extension_popup") {
        (_b = (_a = chrome.action) === null || _a === void 0 ? void 0 : _a.openPopup) === null || _b === void 0 ? void 0 : _b.call(_a, { windowId: (_c = sender.tab) === null || _c === void 0 ? void 0 : _c.windowId });
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseUlBQXlJLDhFQUE4RTtBQUN2TjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWdpdGFsLWNsb2NrLW5ldy10YWItZXh0ZW5zaW9uLy4vc3JjL2JhY2tncm91bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlcikgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIGlmIChyZXF1ZXN0ID09PSBcIm9wZW5fZXh0ZW5zaW9uX3BvcHVwXCIpIHtcbiAgICAgICAgKF9iID0gKF9hID0gY2hyb21lLmFjdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9wZW5Qb3B1cCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHsgd2luZG93SWQ6IChfYyA9IHNlbmRlci50YWIpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy53aW5kb3dJZCB9KTtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==