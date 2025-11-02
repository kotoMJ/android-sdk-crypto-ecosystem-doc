---
sidebar_position: 2
---

# Quickstart

## Prerequisite

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Import

Start by importing the `Crypto-Tracker` module following with logger imports:

```kotlin
import cz.kotox.crypto.sdk.common.logger.LogPriority
import cz.kotox.crypto.sdk.common.logger.SDKLoggerCallback
import cz.kotox.crypto.sdk.Tracker
```

## Create instance

Use `Tracker.Builder` to create the Stats instance and follow with defining logging. In following example there is used
`Timber` log utility, but feel free to connect any logging tool. With `Tracker.Builder` you can also set network
timeout,
maximum cache size, environment and dispatchers for api fetch or database

```kotlin
Stats.Builder(
    context = context,
).setLoggerCallback(
    sdkLoggerCallback = object : SDKLoggerCallback {
        override fun onLogMessage(
            tag: String,
            priority: LogPriority,
            t: Throwable?,
            message: String,
        ) {
            Timber.tag(tag)
            Timber.log(priority = priority.priorityInt, t = t, message = message)
        }
    },
).build()
```


## API Examples

`Tracker` functions always provide return value in form of Either<SdkError, Value> and there is no Exception thrown from
the function. This mechanism is bundled in common module as transitive dependency of any Crypto SDK.

```kotlin
import cz.kotox.crypto.sdk.common.Either
import cz.kotox.crypto.sdk.common.error.ApiError
import cz.kotox.crypto.sdk.common.error.SdkError
```

