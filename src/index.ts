#!/usr/bin/env node
import {GetParameterCommand, SSMClient} from '@aws-sdk/client-ssm';

(async () => {
  const paramName = process.argv.slice(2)[0];

  const client = new SSMClient({});
  const command = new GetParameterCommand({Name: paramName, WithDecryption: true});

  try {
    const {Parameter} = await client.send(command);

    console.log(Parameter.Value);
  } catch {
    console.log();
  }
})();
