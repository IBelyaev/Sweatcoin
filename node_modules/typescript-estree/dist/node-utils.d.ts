/**
 * @fileoverview Utilities for finding and converting ts.Nodes into ESTreeNodes
 * @author James Henry <https://github.com/JamesHenry>
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */
import ts from 'typescript';
import { ESTreeNodeLoc, ESTreeNode, ESTreeToken } from './temp-types-based-on-js-source';
declare const _default: {
    /**
     * Expose the enum of possible TSNode `kind`s.
     */
    SyntaxKind: typeof ts.SyntaxKind;
    isAssignmentOperator: typeof isAssignmentOperator;
    isLogicalOperator: typeof isLogicalOperator;
    getTextForTokenKind: typeof getTextForTokenKind;
    isESTreeClassMember: typeof isESTreeClassMember;
    hasModifier: typeof hasModifier;
    isComma: typeof isComma;
    getBinaryExpressionType: typeof getBinaryExpressionType;
    getLocFor: typeof getLocFor;
    getLoc: typeof getLoc;
    isToken: typeof isToken;
    isJSXToken: typeof isJSXToken;
    getDeclarationKind: typeof getDeclarationKind;
    getTSNodeAccessibility: typeof getTSNodeAccessibility;
    hasStaticModifierFlag: typeof hasStaticModifierFlag;
    findNextToken: typeof findNextToken;
    findFirstMatchingToken: typeof findFirstMatchingToken;
    findChildOfKind: typeof findChildOfKind;
    findFirstMatchingAncestor: typeof findFirstMatchingAncestor;
    findAncestorOfKind: typeof findAncestorOfKind;
    hasJSXAncestor: typeof hasJSXAncestor;
    unescapeStringLiteralText: typeof unescapeStringLiteralText;
    isComputedProperty: typeof isComputedProperty;
    isOptional: typeof isOptional;
    fixExports: typeof fixExports;
    getTokenType: typeof getTokenType;
    convertToken: typeof convertToken;
    convertTokens: typeof convertTokens;
    getNodeContainer: typeof getNodeContainer;
    isWithinTypeAnnotation: typeof isWithinTypeAnnotation;
    isTypeKeyword: typeof isTypeKeyword;
    isComment: typeof isComment;
    isJSDocComment: typeof isJSDocComment;
    createError: typeof createError;
    firstDefined: typeof firstDefined;
};
export default _default;
/**
 * Returns true if the given ts.Token is the assignment operator
 * @param  {ts.Token}  operator the operator token
 * @returns {boolean}          is assignment
 */
declare function isAssignmentOperator(operator: ts.Token<any>): boolean;
/**
 * Returns true if the given ts.Token is a logical operator
 * @param  {ts.Token}  operator the operator token
 * @returns {boolean}          is a logical operator
 */
declare function isLogicalOperator(operator: ts.Token<any>): boolean;
/**
 * Returns the string form of the given TSToken SyntaxKind
 * @param  {number}  kind the token's SyntaxKind
 * @returns {string}          the token applicable token as a string
 */
declare function getTextForTokenKind(kind: number): string;
/**
 * Returns true if the given ts.Node is a valid ESTree class member
 * @param  {ts.Node}  node TypeScript AST node
 * @returns {boolean}      is valid ESTree class member
 */
declare function isESTreeClassMember(node: ts.Node): boolean;
/**
 * Checks if a ts.Node has a modifier
 * @param {number} modifierKind TypeScript SyntaxKind modifier
 * @param {ts.Node} node TypeScript AST node
 * @returns {boolean} has the modifier specified
 */
declare function hasModifier(modifierKind: number, node: ts.Node): boolean;
/**
 * Returns true if the given ts.Token is a comma
 * @param  {ts.Token}  token the TypeScript token
 * @returns {boolean}       is comma
 */
declare function isComma(token: ts.Token<any>): boolean;
/**
 * Returns true if the given ts.Node is a comment
 * @param {ts.Node} node the TypeScript node
 * @returns {boolean} is comment
 */
declare function isComment(node: ts.Node): boolean;
/**
 * Returns true if the given ts.Node is a JSDoc comment
 * @param {ts.Node} node the TypeScript node
 * @returns {boolean} is JSDoc comment
 */
declare function isJSDocComment(node: ts.Node): boolean;
/**
 * Returns the binary expression type of the given ts.Token
 * @param  {ts.Token} operator the operator token
 * @returns {string}          the binary expression type
 */
declare function getBinaryExpressionType(operator: ts.Token<any>): string;
/**
 * Returns line and column data for the given start and end positions,
 * for the given AST
 * @param  {number} start start data
 * @param  {number} end   end data
 * @param  {ts.SourceFile} ast   the AST object
 * @returns {ESTreeNodeLoc}       the loc data
 */
declare function getLocFor(start: number, end: number, ast: ts.SourceFile): ESTreeNodeLoc;
/**
 * Returns line and column data for the given ts.Node or ts.Token,
 * for the given AST
 * @param  {ts.Token|ts.Node} nodeOrToken the ts.Node or ts.Token
 * @param  {ts.SourceFile} ast         the AST object
 * @returns {ESTreeLoc}             the loc data
 */
declare function getLoc(nodeOrToken: ts.Node | ts.Token<any>, ast: ts.SourceFile): ESTreeNodeLoc;
/**
 * Returns true if a given ts.Node is a token
 * @param  {ts.Node} node the ts.Node
 * @returns {boolean}     is a token
 */
declare function isToken(node: ts.Node): boolean;
/**
 * Returns true if a given ts.Node is a JSX token
 * @param  {ts.Node} node ts.Node to be checked
 * @returns {boolean}       is a JSX token
 */
declare function isJSXToken(node: ts.Node): boolean;
/**
 * Returns true if the given ts.Node.kind value corresponds to a type keyword
 * @param {number} kind TypeScript SyntaxKind
 * @returns {boolean} is a type keyword
 */
declare function isTypeKeyword(kind: number): boolean;
/**
 * Returns the declaration kind of the given ts.Node
 * @param  {ts.Node}  node TypeScript AST node
 * @returns {string}     declaration kind
 */
declare function getDeclarationKind(node: ts.Node): string;
/**
 * Gets a ts.Node's accessibility level
 * @param {ts.Node} node The ts.Node
 * @returns {string | null} accessibility "public", "protected", "private", or null
 */
declare function getTSNodeAccessibility(node: ts.Node): string | null;
/**
 * Returns true if the given ts.Node has the modifier flag set which corresponds
 * to the static keyword.
 * @param {ts.Node} node The ts.Node
 * @returns {boolean} whether or not the static modifier flag is set
 */
declare function hasStaticModifierFlag(node: ts.Node): boolean;
/**
 * Finds the next token based on the previous one and its parent
 * Had to copy this from TS instead of using TS's version because theirs doesn't pass the ast to getChildren
 * @param {ts.Token} previousToken The previous TSToken
 * @param {ts.Node} parent The parent TSNode
 * @param {ts.SourceFile} ast The TS AST
 * @returns {ts.Token} the next TSToken
 */
declare function findNextToken(previousToken: ts.Token<any>, parent: ts.Node, ast: ts.SourceFile): ts.Token<any> | undefined;
/**
 * Find the first matching token based on the given predicate function.
 * @param {ts.Token} previousToken The previous ts.Token
 * @param {ts.Node} parent The parent ts.Node
 * @param {Function} predicate The predicate function to apply to each checked token
 * @param {ts.SourceFile} ast The TS AST
 * @returns {ts.Token|undefined} a matching ts.Token
 */
declare function findFirstMatchingToken(previousToken: ts.Token<any> | undefined, parent: ts.Node, predicate: (node: ts.Node) => boolean, ast: ts.SourceFile): ts.Token<any> | undefined;
/**
 * Finds the first child ts.Node which matches the given kind
 * @param {ts.Node} node The parent ts.Node
 * @param {number} kind The ts.Node kind to match against
 * @param {ts.SourceFile} sourceFile The full AST source file
 * @returns {ts.Node|undefined} a matching ts.Node
 */
declare function findChildOfKind(node: ts.Node, kind: number, sourceFile: ts.SourceFile): ts.Node | undefined;
/**
 * Find the first matching ancestor based on the given predicate function.
 * @param {ts.Node} node The current ts.Node
 * @param {Function} predicate The predicate function to apply to each checked ancestor
 * @returns {ts.Node|undefined} a matching parent ts.Node
 */
declare function findFirstMatchingAncestor(node: ts.Node, predicate: (node: ts.Node) => boolean): ts.Node | undefined;
/**
 * Finds the first parent ts.Node which matches the given kind
 * @param {ts.Node} node The current ts.Node
 * @param {number} kind The ts.Node kind to match against
 * @returns {ts.Node|undefined} a matching parent ts.Node
 */
declare function findAncestorOfKind(node: ts.Node, kind: number): ts.Node | undefined;
/**
 * Returns true if a given ts.Node has a JSX token within its hierarchy
 * @param  {ts.Node} node ts.Node to be checked
 * @returns {boolean}       has JSX ancestor
 */
declare function hasJSXAncestor(node: ts.Node): boolean;
/**
 * Unescape the text content of string literals, e.g. &amp; -> &
 * @param {string} text The escaped string literal text.
 * @returns {string} The unescaped string literal text.
 */
declare function unescapeStringLiteralText(text: string): string;
/**
 * Returns true if a given ts.Node is a computed property
 * @param  {ts.Node} node ts.Node to be checked
 * @returns {boolean}       is Computed Property
 */
declare function isComputedProperty(node: ts.Node): boolean;
/**
 * Returns true if a given ts.Node is optional (has QuestionToken)
 * @param  {ts.Node} node ts.Node to be checked
 * @returns {boolean}       is Optional
 */
declare function isOptional(node: any): boolean;
/**
 * Returns true if the given ts.Node is within the context of a "typeAnnotation",
 * which effectively means - is it coming from its parent's `type` or `types` property
 * @param  {ts.Node} node ts.Node to be checked
 * @returns {boolean}       is within "typeAnnotation context"
 */
declare function isWithinTypeAnnotation(node: any): boolean;
/**
 * Fixes the exports of the given ts.Node
 * @param  {ts.Node} node   the ts.Node
 * @param  {ESTreeNode} result result
 * @param  {ts.SourceFile} ast    the AST
 * @returns {ESTreeNode}        the ESTreeNode with fixed exports
 */
declare function fixExports(node: ts.Node, result: ESTreeNode, ast: ts.SourceFile): ESTreeNode;
/**
 * Returns the type of a given ts.Token
 * @param  {ts.Token} token the ts.Token
 * @returns {string}       the token type
 */
declare function getTokenType(token: any): string;
/**
 * Extends and formats a given ts.Token, for a given AST
 * @param  {ts.Token} token the ts.Token
 * @param  {ts.SourceFile} ast   the AST object
 * @returns {ESTreeToken}       the converted ESTreeToken
 */
declare function convertToken(token: ts.Token<any>, ast: ts.SourceFile): ESTreeToken;
/**
 * Converts all tokens for the given AST
 * @param  {ts.SourceFile} ast the AST object
 * @returns {ESTreeToken[]}     the converted ESTreeTokens
 */
declare function convertTokens(ast: ts.SourceFile): ESTreeToken[];
/**
 * Get container token node between range
 * @param  {ts.SourceFile} ast the AST object
 * @param {number} start The index at which the comment starts.
 * @param {number} end The index at which the comment ends.
 * @returns {ts.Token}       typescript container token
 * @private
 */
declare function getNodeContainer(ast: ts.SourceFile, start: number, end: number): ts.Token<any>;
/**
 * @param {ts.SourceFile} ast     the AST object
 * @param {number} start      the index at which the error starts
 * @param {string} message the error message
 * @returns {Object}       converted error object
 */
declare function createError(ast: ts.SourceFile, start: number, message: string): {
    index: number;
    lineNumber: number;
    column: number;
    message: string;
};
/**
 * Like `forEach`, but suitable for use with numbers and strings (which may be falsy).
 * @template T
 * @template U
 * @param {ReadonlyArray<T>|undefined} array
 * @param {(element: T, index: number) => (U|undefined)} callback
 * @returns {U|undefined}
 */
declare function firstDefined<T, U>(array: ReadonlyArray<T> | undefined, callback: (element: T, index: number) => U | undefined): U | undefined;
