// common environment for all stages dev host_url defaults to staging to allow access of other apps in dev mode
const common = {};

const env = {
  development: {
    ROUTER_BASE_NAME: '/',
    API_BASE_URL: 'http://localhost:3001',
    API_GQL_PATH: '/graphql',
  },
  test: {
    ROUTER_BASE_NAME: '/',
    API_BASE_URL: '',
  },
  staging: {
    ROUTER_BASE_NAME: '/',
    API_BASE_URL: '',
  },
  production: {
    ROUTER_BASE_NAME: '/',
    API_BASE_URL: 'https://3.141.107.189/api/trakr',
    API_GQL_PATH: '/graphql',
  },
};

export default {
  ...common,
  ...env[process.env.REACT_APP_STAGE],
};
