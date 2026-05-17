import { CircuitConfig } from '../prover/types'

/**
 * CircuitRegistry — manages available Noir/snarkjs circuit configurations.
 *
 * Pre-built circuits included:
 * - private-transfer: private token transfer with nullifiers
 * - range-proof: prove a value is in [min, max] without revealing it
 * - merkle-membership: prove membership in a Merkle tree
 */
export class CircuitRegistry {
  private static circuits: Map<string, CircuitConfig> = new Map([
    [
      'private-transfer',
      {
        id: 'private-transfer',
        wasmPath: '/circuits/private_transfer/circuit.wasm',
        zkeyPath: '/circuits/private_transfer/circuit_final.zkey',
        description: 'Private token transfer: proves knowledge of commitment opening without revealing amount',
        publicInputCount: 3,
      },
    ],
    [
      'range-proof',
      {
        id: 'range-proof',
        wasmPath: '/circuits/range_proof/circuit.wasm',
        zkeyPath: '/circuits/range_proof/circuit_final.zkey',
        description: 'Proves a secret value is within [min, max] without revealing the value',
        publicInputCount: 2,
      },
    ],
    [
      'merkle-membership',
      {
        id: 'merkle-membership',
        wasmPath: '/circuits/merkle_membership/circuit.wasm',
        zkeyPath: '/circuits/merkle_membership/circuit_final.zkey',
        description: 'Proves membership in a Poseidon Merkle tree without revealing the leaf',
        publicInputCount: 1,
      },
    ],
  ])

  static get(id: string): CircuitConfig {
    const config = this.circuits.get(id)
    if (!config) throw new Error(`Circuit '${id}' not in registry. Available: ${[...this.circuits.keys()].join(', ')}`)
    return config
  }

  static list(): CircuitConfig[] {
    return [...this.circuits.values()]
  }

  static register(config: CircuitConfig): void {
    this.circuits.set(config.id, config)
  }
}
