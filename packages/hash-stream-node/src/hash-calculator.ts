import { Writable, WritableOptions } from "stream";
import { Hash } from "@aws-sdk/types";

export class HashCalculator extends Writable {
  constructor(public readonly hash: Hash, options?: WritableOptions) {
    super(options);
  }

  _write(chunk: Buffer, encoding: string, callback: (err?: Error) => void) {
    try {
      this.hash.update(chunk);
    } catch (err) {
      return callback(err);
    }
    callback();
  }
}
