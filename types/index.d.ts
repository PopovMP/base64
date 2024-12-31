// types/index.d.ts
// noinspection JSUnusedGlobalSymbols

declare module "@popovmp/base64" {
    /**
     * Converts a string to a base64 string.
     *
     * Example:
     * ```javascript
     * stringToBase64("foo") // "Zm9v"
     * ```
     * @param {string} str
     * @returns {string}
     */
    export function stringToBase64(str: string): string;

    /**
     * Converts a base64 string to a string.
     *
     * Example:
     * ```javascript
     * base64ToString("Zm9v") // "foo"
     * ```
     * @param {string} strB64
     * @returns {string}
     */
    export function base64ToString(strB64: string): string;

    /**
     * Converts a base64 string to a base64url string.
     *
     * Example:
     * ```javascript
     * base64ToBase64Url("foo++/==") // "foo--_"
     * ```
     * @param {string} strB64
     * @returns {string}
     */
    export function base64ToBase64Url(strB64: string): string;

    /**
     * Converts a base64url string to a base64 string.
     *
     * Example:
     * ```javascript
     * base64UrlToBase64("foo--_") // "foo++/=="
     * ```
     * @param {string} strB64Url
     * @returns {string}
     */
    export function base64UrlToBase64(strB64Url: string): string;

    /**
     * Converts a string to a base64 string.
     *
     * Example:
     * ```javascript
     * stringToBase64("foo") // "Zm9v"
     * ```
     * @param {string} str
     * @returns {string}
     */
    export function stringToBase64(str: string): string

    /**
     * Converts a base64 string to a string.
     *
     * Example:
     * ```javascript
     * base64ToString("Zm9v") // "foo"
     * ```
     *
     * @param {string} strB64
     * @returns {string}
     */
    export function base64ToString(strB64: string): string

    /**
     * Converts a Uint8Array to a base64 string.
     *
     * Example:
     * ```javascript
     * const bytes = new TextEncoder().encode("foo");
     * bytesToBase64(bytes) // "Zm9v"
     * ```
     * @param {Uint8Array} input
     * @returns {string}
     */
    export function bytesToBase64(input: Uint8Array): string;

    /**
     * Converts a base64 string to a Uint8Array.
     *
     * Example:
     * ```javascript
     * base64ToBytes("Zm9v") // Uint8Array [ 102, 111, 111 ] => foo
     * ```
     * @param {string} strB64
     * @returns {Uint8Array}
     */
    export function base64ToBytes(strB64: string): Uint8Array;
}
