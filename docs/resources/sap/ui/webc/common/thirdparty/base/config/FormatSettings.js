sap.ui.define(["exports","../features/LegacyDateFormats","../InitialConfiguration","../FeaturesRegistry"],function(e,t,a,i){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.getLegacyDateCalendarCustomizing=e.getFirstDayOfWeek=void 0;t=n(t);function n(e){return e&&e.__esModule?e:{default:e}}let r;const s=()=>{if(r===undefined){r=(0,a.getFormatSettings)()}return r.firstDayOfWeek};e.getFirstDayOfWeek=s;const u=(0,i.getFeature)("LegacyDateFormats");const g=u?t.default.getLegacyDateCalendarCustomizing:()=>[];e.getLegacyDateCalendarCustomizing=g});
//# sourceMappingURL=FormatSettings.js.map