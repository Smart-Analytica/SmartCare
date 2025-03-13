

import { Amplify } from 'aws-amplify';

const amplifyConfig = {
  aws_project_region: 'us-east-1',
  Interactions: {
    bots: {
      'clinical-bot': {
        name: 'examplebot',
        aliasId: os.get_env('alias_id'),
        botId: os.get_env('bot_id'),
        localeId: 'es_US',
        region: 'us-east-1',
      },
    },
  },
};

Amplify.configure(amplifyConfig);

export default amplifyConfig;
