"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinAnalysis_1 = require("./analyzers/WinAnalysis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static winAnalysisHtmlReport(team) {
        return new Summary(new WinAnalysis_1.WinAnalysis(team), new HtmlReport_1.HtmlReport());
    }
    static winAnalysisConsoleReport(team) {
        return new Summary(new WinAnalysis_1.WinAnalysis(team), new ConsoleReport_1.ConsoleReport());
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
