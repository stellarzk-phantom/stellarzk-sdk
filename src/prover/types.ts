export interface WitnessInput {
  /** Private inputs (not revealed on-chain) */
  private: Record<string, bigint | bigint[]>
  /** Public inputs (included in proof verification) */
  public: Record<string, bigint | bigint[]>
}

export interface ProofResult {
  /** Groth16 proof components */
  proof: {
    pi_a: [string, string]         // G1 point
    pi_b: [[string, string], [string, string]]  // G2 point
    pi_c: [string, string]         // G1 point
  }
  /** Public signals for on-chain verification */
  publicSignals: string[]
  /** Circuit identifier */
  circuitId: string
}

export interface CircuitConfig {
  /** Unique identifier for this circuit */
  id: string
  /** Path or URL to the .wasm circuit file */
  wasmPath: string
  /** Path or URL to the proving key (.zkey file) */
  zkeyPath: string
  /** Human-readable description */
  description: string
  /** Number of public inputs */
  publicInputCount: number
}
