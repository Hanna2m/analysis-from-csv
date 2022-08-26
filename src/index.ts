import {MatchReader} from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summaryHtml = Summary.winAnalysisHtmlReport(('Man United'));
const summaryConsole = Summary.winAnalysisConsoleReport(('Man United'));

matchReader.load();
summaryHtml.buildAndPrintReport(matchReader.matches);
summaryConsole.buildAndPrintReport(matchReader.matches)

