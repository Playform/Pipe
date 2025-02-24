import type { Stream } from "stream";
/**
 * @module Buffer
 *
 * Represents various types that can be used as buffer data.
 *
 */
export type Type = string | NodeJS.ArrayBufferView | Iterable<string | NodeJS.ArrayBufferView> | AsyncIterable<string | NodeJS.ArrayBufferView> | Stream;
export type { Type as default };
