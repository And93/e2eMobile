const APP_PATH = "./app/app-release.apk";

const host = '127.0.0.1';
const port = 4730;

const timeout = 60000;

const device = 'Nexus 5 API 24 v2';
const platform = 'android';
const version = '7.0';

exports.config = {
    host: host,
    port: port,

    specs: [
        './src/tests/**/*.ts'
    ],

    suites: {},

    exclude: [],

    maxInstances: 1,
    capabilities: [
        {
            browserName: '',
            appiumVersion: '1.7.2',
            deviceName: device,
            platformVersion: version,
            platformName: platform,
            app: APP_PATH,
            waitforTimeout: timeout,
            commandTimeout: timeout,
            newCommandTimeout: timeout
        }
    ],

    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    deprecationWarnings: false,
    screenshotPath: './screenshots/',
    baseUrl: 'http://localhost',
    waitforTimeout: timeout,
    connectionRetryTimeout: timeout * 2,
    connectionRetryCount: 3,
    framework: 'mocha',

    mochaOpts: {
        ui: 'bdd',
        timeout: timeout * 100, // for browser.debug()
        compilers: [
            'ts-node/register',
            'tsconfig-paths/register'
        ]
    },

    services: ['appium'],
    appium: {
        waitStartTime: timeout * 3,
        waitforTimeout: timeout * 3,
        command: 'appium.cmd',
        logFileName: 'appium.log',
        args: {
            address: host,
            port: port,
            commandTimeout: timeout,
            sessionOverride: true,
            debugLogSpacing: true,
            nativeInstrumentsLib: true
        }
    }
};
