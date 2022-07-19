/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';
import * as beetSolana from '@metaplex-foundation/beet-solana';

/**
 * Arguments used to create {@link AccountThingy}
 * @category Accounts
 * @category generated
 */
export type AccountThingyArgs = {};
/**
 * Holds the data for the {@link AccountThingy} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class AccountThingy implements AccountThingyArgs {
  private constructor() {}

  /**
   * Creates a {@link AccountThingy} instance from the provided args.
   */
  static fromArgs(args: AccountThingyArgs) {
    return new AccountThingy();
  }

  /**
   * Deserializes the {@link AccountThingy} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [AccountThingy, number] {
    return AccountThingy.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link AccountThingy} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
  ): Promise<AccountThingy> {
    const accountInfo = await connection.getAccountInfo(address);
    if (accountInfo == null) {
      throw new Error(`Unable to find AccountThingy account at ${address}`);
    }
    return AccountThingy.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey('MyProgram1111111111111111111111111111111111'),
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, accountThingyBeet);
  }

  /**
   * Deserializes the {@link AccountThingy} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [AccountThingy, number] {
    return accountThingyBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link AccountThingy} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return accountThingyBeet.serialize(this);
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link AccountThingy}
   */
  static get byteSize() {
    return accountThingyBeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link AccountThingy} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(AccountThingy.byteSize, commitment);
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link AccountThingy} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === AccountThingy.byteSize;
  }

  /**
   * Returns a readable version of {@link AccountThingy} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {};
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const accountThingyBeet = new beet.BeetStruct<AccountThingy, {}>(
  [],
  AccountThingy.fromArgs,
  'AccountThingy',
);
