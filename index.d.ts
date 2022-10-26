/**
 * xk6-jose provides an implementation of the *Javascript Object Signing and Encryption (JOSE)* standards.
 * The underlying implementation is https://github.com/square/go-jose
 */

/**
 * Module jwk aims to provide an implementation of the JSON Web Key.
 */
export namespace jwk {
  /**
   * Array of numbers. The number range is from 0 to 255.
   */
  export type bytes = number[];

  /**
   * Byte array convertible types
   */
  export type ByteArrayLike = ArrayBuffer | string | bytes;

  /**
   * Key represents a public or private key in JWK format.
   *
   * The underlying implemetation is [JSONWebKey](https://pkg.go.dev/gopkg.in/square/go-jose.v2#JSONWebKey) from [Go JOSE](https://github.com/square/go-jose).
   * JSON representation can be create with JSON.stringify
   */
  interface Key {}

  /**
   * Print the informed string
   *
   * @param bar A random string
   */
  function foo(bar: string);

  /**
   * Parse a key from its JSON representation.
   *
   * @param source JSON source to parse
   * @returns The parsed JWK representation
   */
  function parse(source: string): Key;

  /**
   * Parse JSON Web Key Set into key array.
   *
   * @param source JSON source to parse
   * @returns The array of keys from parsed JWKS
   */
  function parseKeySet(source: string): Key[];

  /**
   * Generates a new asymmetric key with the given algorithm (`algorithm`) or import exising private key from `seed`.
   *
   * @param algorithm Key algorithm, supported values: `ed25519`
   * @param seed Seed value when importing private key
   * @returns The generated key
   */
  function generate(algorithm: string, seed?: ByteArrayLike): Key;

  /**
   * Adopt an existing asymmetric key with the given algorithm (`algorithm`).
   *
   * @param algorithm Key algorithm, supported values: `ed25519`
   * @param key private or public key
   * @param isPublic true if `key` is a public key, false if it is a private key
   * @returns The adopted key
   */
  function adopt(algorithm: string, key: ByteArrayLike, isPublic?: boolean): Key;
}

/**
 * Module jwt aims to provide an implementation of the JSON Web Token.
 * Only compact serializtion is supported.
 */
export namespace jwt {
  /**
   * Create JSON Web Token from payload and optional header.
   *
   * @param key The signing key
   * @param payload The payload claims
   * @param header The header fields
   * @returns The signed JWT in compact serialization form
   */
  function sign(key: jwk.Key, payload: object, header?: object): string;

  /**
   * Decode JSON Web Token payload without signature validation.
   *
   * @param token The JWT to decode
   * @returns The decoded payload
   */
  function decode(token: string): object;

  /**
   * Verify JSON Web Token signature and decode payload on success.
   *
   * @param token The JWT to verify
   * @param key The signature validation key (or keys)
   * @returns The payload of the verified token
   */
  function verify(token: string, ...key: jwk.Key[]): object;
}
