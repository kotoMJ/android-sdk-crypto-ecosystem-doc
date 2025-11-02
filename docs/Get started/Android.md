---
sidebar_position: 3
sidebar_label: Android
---

# Android SDK Integration

This section provides overall guide on integrating Crypto Android SDK into your Android project using Gradle.

## FEATURES

* [TRACKER SDK](04-Tracker%20SDK/04-Android/Installation.md)
* [NEWS SDK](05-News%20SDK/04-Android/Installation.md)
* [COINDATA SDK](06-Coindata%20UI%20SDK/04-Android/Installation.md)

## VERSIONS

Versioning of all sdks is synchronized by the BOM(Bill of materials) versioning. It means compatibility of different
SDKs is covered by one BOM version. Details about release notes is mentioned under every SDK separately.

LATEST RELEASE BADGE TBD.

| Crypto SDK | VERSION |
|------------|---------|
| Tracker    | 0.0.1   |
| News       | 0.0.1   |
| Coindata   | 0.0.1   |

## USAGE

Lirum SDKs sunt scissa in separatus modulos. Ad curare maxime optimized usum spatii tantum installare modulos quos
intendis uti. Ad incipiendum, vide installationem sectionem infra.

Lirum SDK initializatio debet occurrere solum in principali processu applicationis. Usus Lirum SDK in processibus aliis
quam principalis processus non sustinetur adhuc et verisimile causabit problemata.

## INSTALLATION

Tracker SDKs are published to Maven as independent modules. To utilize a feature listed above include
the appropriate dependency (or dependencies) listed below in your `gradle/libs.version` file. It's
highly recommended to use Bill Of Materials definition to ensure all Crypto libraries are compatible.

``` toml
    kotoxCryptoBom = "2025.11.04"

    kotox-crypto-bom  = {module = "cz.kotox.crypto.sdk:bom", version.ref = "kotoxCryptoBom"}
    kotox-crypto-tracker  = {module = "cz.kotox.crypto.sdk:crypto-tracker"}
    kotox-crypto-news  = {module = "cz.kotox.crypto.sdk:cypto-news"}
    kotox-crypto-coindata  = {module = "cz.kotox.crypto.sdk:crypto-coindata"}
```

Then in your `build.gradle.kts` file define appropriate dependency (or dependencies)

``` groovy
    implementation(platform(libs.kotox.crypto.bom))
    implementation(libs.kotox.crypto.news)
    implementation(libs.kotox.crypto.tracker)
    implementation(libs.kotox.crypto.coindata)
```

### REPOSITORY

Now it's time to define the repository, i.e. where to look for above-mentioned sources.

#### GitHub REGISTRY

TODO.
