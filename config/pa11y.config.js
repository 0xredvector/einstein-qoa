module.exports = {
  runners: ['axe', 'htmlcs'],
  standard: 'WCAG2AA',
  timeout: 10000,
  wait: 5000,
  chromeLaunchConfig: {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  },
  beforeTest: async (page) => {
    // Add any pre-test setup here
  },
  afterTest: async (page) => {
    // Add any post-test cleanup here
  },
  // URLs to test - configure based on your environment
  urls: [
    'http://localhost:8080/',
    'http://localhost:8080/politicas/',
    'http://localhost:8080/padroes/',
    'http://localhost:8080/ferramentas/',
    'http://localhost:8080/comunicacoes/',
    'http://localhost:8080/noticias/'
  ],
  // Ignore specific issues if needed
  ignore: [
    // Example: 'notice'
  ],
  // Report configuration
  reporters: ['html', 'json'],
  reportDir: 'reports/pa11y'
};
