/**
 * @fileoverview Converts TypeScript AST into ESTree format.
 * @author Nicholas C. Zakas
 * @author James Henry <https://github.com/JamesHenry>
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */
import ts from 'typescript';
import { ESTreeNode } from './temp-types-based-on-js-source';
export declare function resetASTMaps(): void;
export declare function getASTMaps(): {
    esTreeNodeToTSNodeMap: WeakMap<object, any>;
    tsNodeToESTreeNodeMap: WeakMap<object, any>;
};
interface ConvertAdditionalOptions {
    errorOnUnknownASTType: boolean;
    useJSXTextNode: boolean;
    shouldProvideParserServices: boolean;
}
interface ConvertConfig {
    node: ts.Node;
    parent?: ts.Node | null;
    ast: ts.SourceFile;
    additionalOptions: ConvertAdditionalOptions;
}
/**
 * Converts a TypeScript node into an ESTree node
 * @param  {Object} config configuration options for the conversion
 * @param  {ts.Node} config.node   the ts.Node
 * @param  {ts.Node} config.parent the parent ts.Node
 * @param  {ts.SourceFile} config.ast the full TypeScript AST
 * @param  {Object} config.additionalOptions additional options for the conversion
 * @returns {ESTreeNode|null}        the converted ESTreeNode
 */
export default function convert(config: ConvertConfig): ESTreeNode | null;
export {};
