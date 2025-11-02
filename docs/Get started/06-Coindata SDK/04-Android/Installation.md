---
sidebar_position: 1
sidebar_label: Installation
---

# Coindata SDK Installation

To utilize Coindata SDK feature include
the appropriate dependency (or dependencies) listed below in your `gradle/libs.version` file. It's
highly recommended to use Bill Of Materials definition to ensure all Tracker libraries are compatible.

``` toml
    kotoxCryptoBom = "2025.11.04" //This is the sample, use the latest version

    kotox-crypto-bom = {module = "cz.kotox.crypto.sdk:bom", version.ref = "kotoxCryptoBom"}
    kotox-crypto-coindata = {module = "cz.kotox.crypto.sdk:crypto-coindata"}
```

Then in your `build.gradle.kts` file define appropriate dependency (or dependencies)

``` groovy
    implementation(platform(libs.kotox.crypto.bom))
    implementation(libs.kotox.crypto.coindata)
```