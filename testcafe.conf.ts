/* eslint-disable @typescript-eslint/no-var-requires */
const minimist = require('minimist');
const createTestCafe = require('gherkin-testcafe');
let testcafe = null;

const args = minimist(process.argv.slice(2));

// Set other browser. Example: -browser='chrome:headless'
const browser = args.browser != undefined ? args.browser : 'chrome';

// Path to the location of the tests
const path = ['testcafe/**/*.ts', 'testcafe/features/*.feature'];

// Define the runner options
const RUNNER_OPTIONS = {
  skipJsErrors: false,
  skipUncaughtErrors: false,
  debugMode: false,
  inspectBrk: false,
  videoPath: 'testcafe/reports/videos',
  videoOptions: {
    failedOnly: true,
    singleFile: false,
    pathPattern: '${DATE}_${TIME}/test-${TEST_INDEX}-${TEST}/${FILE_INDEX}.mp4'
  },
  screenshots: {
    path: 'testcafe/reports/screenshots/',
    takeOnFails: true,
    pathPattern: '${DATE}_${TIME}/test-${TEST_INDEX}-${TEST}/${FILE_INDEX}.mp4'
  }
};

// Check usage video mode
const video = args.video === 'true' ? true : false;
!video
  ? delete RUNNER_OPTIONS.videoPath && delete RUNNER_OPTIONS.videoOptions
  : null;

// Check usage screenshot mode
const screenshot = args.screenshot === 'true' ? true : false;
!screenshot
  ? delete RUNNER_OPTIONS.screenshots && delete RUNNER_OPTIONS.screenshots
  : null;

console.log('Tests source path: ' + path);
console.log('Using browser: ' + browser);

// Create the testcafe runner with our defined runner options
const getRunner = (tc) => testcafe.createRunner.bind(tc);

createTestCafe('localhost', 1337, 1338)
  .then((tc) => {
    testcafe = tc;
    const runnerFactory = getRunner(testcafe);
    const runner = runnerFactory();

    return runner
      .src(path)
      .browsers(browser)
      .concurrency(1)
      .run(RUNNER_OPTIONS);
  })
  .then((failedCount) => {
    console.log('Tests failed: ' + failedCount);
    testcafe.close();
  });
