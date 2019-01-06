import ts from 'typescript';
import { ParserOptions, ESTreeToken, ESTreeComment } from './temp-types-based-on-js-source';
import { Program } from './estree/spec';
declare type AST<T extends ParserOptions> = Program & (T['range'] extends true ? {
    range: [number, number];
} : {}) & (T['tokens'] extends true ? {
    tokens: ESTreeToken[];
} : {}) & (T['comment'] extends true ? {
    comments: ESTreeComment[];
} : {});
export { AST_NODE_TYPES } from './ast-node-types';
export { version };
declare const version: any;
export declare function parse<T extends ParserOptions = ParserOptions>(code: string, options?: T): AST<T>;
export declare function parseAndGenerateServices(code: string, options: ParserOptions): {
    ast: Program;
    services: {
        program: ts.Program | undefined;
        esTreeNodeToTSNodeMap: WeakMap<object, any> | undefined;
        tsNodeToESTreeNodeMap: WeakMap<object, any> | undefined;
    };
};
