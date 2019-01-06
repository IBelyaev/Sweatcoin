import ts from 'typescript';
import { Extra } from './temp-types-based-on-js-source';
/**
 * Calculate project environments using options provided by consumer and paths from config
 * @param {string} code The code being linted
 * @param {string} filePath The path of the file being parsed
 * @param {string} extra.tsconfigRootDir The root directory for relative tsconfig paths
 * @param {string[]} extra.project Provided tsconfig paths
 * @returns {ts.Program[]} The programs corresponding to the supplied tsconfig paths
 */
export default function calculateProjectParserOptions(code: string, filePath: string, extra: Extra): ts.Program[];
