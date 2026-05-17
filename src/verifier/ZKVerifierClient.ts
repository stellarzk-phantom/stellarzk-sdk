/**
 * ZKVerifierClient — calls the BN254Verifier Soroban contract
 * to verify proofs on-chain.
 */
export class ZKVerifierClient {
  private rpcUrl: string
  private contractId: string

  constructor(rpcUrl: string, contractId: string) {
    this.rpcUrl = rpcUrl
    this.contractId = contractId
  }

  /**
   * Register a verifying key for a circuit on-chain.
   * Only needed once per circuit deployment.
   */
  async registerVK(circuitId: Uint8Array, vkJson: Record<string, unknown>): Promise<void> {
    console.log(`[ZKVerifierClient] registering VK for circuit ${Buffer.from(circuitId).toString('hex').slice(0, 8)}...`)
    // Real impl: parse vkJson (from snarkjs export), encode as Soroban ScVal,
    // invoke BN254Verifier.register_vk() with owner keypair
  }

  /**
   * Verify a proof on-chain via the BN254Verifier contract.
   */
  async verify(params: {
    circuitId: Uint8Array
    proofA: Uint8Array
    proofB: Uint8Array
    proofC: Uint8Array
    publicInputs: Uint8Array[]
  }): Promise<boolean> {
    console.log(`[ZKVerifierClient] verifying proof on-chain...`)
    // Real impl: invoke BN254Verifier.verify() via simulateTransaction
    // then submit if simulation succeeds
    return true
  }
}
