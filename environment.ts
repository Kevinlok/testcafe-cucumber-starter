/* eslint-disable @typescript-eslint/no-var-requires */
import * as minimist from 'minimist';

// Let op, onderstaand statement niet wijzigen in een 'import' want dan werkt het gek genoeg echt niet meer.
const config = require('./config.json');

const args = minimist(process.argv.slice(2));
const env = args.env ? args.env : 'test';

export interface Parameters {
  url: string;
}

export class Environment {
  public static getEnvironmentParameters(webshop: string): Parameters {
    return config.environments[env].webshop[webshop];
  }
}
