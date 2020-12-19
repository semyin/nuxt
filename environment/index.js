/**
 * @file 环境 / ES Module
 * @module environment
 * @author semyin
 */

export const isServer = process && process.server
export const isClient = process && process.client