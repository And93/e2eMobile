End-to-end mobile autotests
=======


## Description
In this repository is code of autotest of some Android application


## Stack
JavaScript ([TypeScript](https://www.typescriptlang.org/)) -
 [NodeJs](https://nodejs.org/en/) -
 [Mocha](https://mochajs.org/) -
 [Webdriver.io](http://webdriver.io/) -
 [Appium](http://appium.io/);


## Run test
Local
```bash
cd e2eMobile
npm install
npm test
```


## Preparation of the environment

1. Install [node.js](https://nodejs.org/en/)

2. Install [Android SDK](https://developer.android.com/studio/)
After install add variable environment **ANDROID_HOME**
E.g:
`C:\Users\user\AppData\Local\Android\sdk`

    2.1. [Setup Android Environment Variables](http://www.automationtestinghub.com/setup-android-environment-variables/)
    
    2.2. Add variable environment **ANDROID_AVD_HOME**
    E.g.:
    `c:\Users\user\.android\avd\`

3. Install [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
After install add variable environment **JAVA_HOME** and write the path to the directory **jdk**
E.g.:
`C:\Program Files\Java\jdk1.8.0_60`

4. Download [Apache Ant](http://ant.apache.org/bindownload.cgi)
It does not require installation, just unpack the archive
E.g.:
`C:\Users\user\apache-ant-1.9.6`

After unpack add variable environment **PATH**, where is **ant**
E.g.:
`C:\Users\user\apache-ant-1.9.6\bin`

5. Install [Apache Maven](https://maven.apache.org/download.cgi)
It does not require installation, just unpack the archive
E.g.:
`C:\Users\user\apache-maven-3.3.3`

After unpack add variable environment **M2HOME** with value `C:\Users\user\apache-maven-3.3.3`,
variable **M2** with value `%M2_HOME%\bin` and in **PATH** add `%M2%`

6. The mobile application can be here
`./app`

7. The last point is install [Appium doctor](https://github.com/appium/appium-doctor) and check is everything alright

8. If you have any problems during the installation process, please read here:

    [first](http://software-testing.ru/forum/index.php?/topic/31885-ustanovka-appium-na-windows10/)

    [second](https://github.com/rhysd/wdio-appium-service/issues/2)

    [third](https://github.com/webdriverio/webdriverio/issues/1569)


## Selectors

When you test a mobile application, it is highly likely that you have a problem with the selector.

#### To find mobile selectors is necessary:

1. Install [Appium](https://github.com/appium/appium-desktop/releases/tag/v1.6.1)

2. Read manual about [Appium inspector](https://github.com/appium/appium-desktop)

Or you may using UIAutomatorViewer.

[How to Locate Element using UIAutomatorViewer](http://toolsqa.com/mobile-automation/appium/locate-element-using-uiautomatorviewer/)


## Configuration
[Appium Desired Capabilities](https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/caps.md)


## How to use mobile selectors with webdriverio
[Webdriverio and mobile selectors](http://webdriver.io/guide/usage/selectors.html#Mobile-Selectors)

## Another good documentation
[Appium Tutorial official](http://appium.io/docs/en/about-appium/intro/)

[Appium Tutorial v1](http://toolsqa.com/mobile-automation/appium/appium-tutorial/)

[Appium Tutorial v2](http://www.automationtestinghub.com/appium-tutorial/)

## Start the Emulator from the Command Line
[developer.android.com](https://developer.android.com/studio/run/emulator-commandline)

[stackoverflow.com](https://stackoverflow.com/questions/4974568/how-do-i-launch-the-android-emulator-from-the-command-line)

## [ADB Commands](http://toolsqa.com/mobile-automation/appium/adb-commands/)
