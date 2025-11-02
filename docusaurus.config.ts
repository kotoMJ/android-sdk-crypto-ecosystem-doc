import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import * as fs from 'fs';
import * as path from 'path';

require('dotenv').config()

const siteUrl = process.env.DEPLOY_URL;

// --- Helper function to get the latest API version directory ---
function getLatestApiVersion(directory: string): string | null {
    const apiVersionsDir = path.join(__dirname, 'static', directory);

    try {
        // Read all entries in the directory
        const entries = fs.readdirSync(apiVersionsDir, {withFileTypes: true});

        // Filter for directories that match the YYYY.MM.DD format
        const versionDirs: string[] = entries
            .filter(
                (entry) => entry.isDirectory() && /^\d{4}\.\d{2}\.\d{2}$/.test(entry.name)
            )
            .map((entry) => entry.name);

        // Sort the versions and get the latest one (last in the array)
        const latestVersion: string | undefined = versionDirs.sort().pop();

        if (latestVersion) {
            return latestVersion;
        } else {
            // Fallback if no matching directory is found
            console.warn(`No valid version directories found in ${apiVersionsDir}.`);
            return null;
        }
    } catch (error) {
        // Fallback if the directory doesn't exist
        console.error(`Error reading API directory ${apiVersionsDir}: ${error.message}`);
        return null;
    }
}

// --- End of helper function ---

// Get the latest version string
const latestAndroidVersion = getLatestApiVersion('android-reference');

// Construct the dynamic href.
// It will use the latest version if found, otherwise, it provides a safe fallback.
const androidApiHref = latestAndroidVersion
    ? `pathname:///android-reference/${latestAndroidVersion}/index.html`
    : 'pathname:///android-reference/'; // Fallback link
// --- Helper function to get the latest API version directory ---

async function sidebarItemsGenerator({
                                         defaultSidebarItemsGenerator,
                                         ...args
                                     }) {
    const sidebarItems = await defaultSidebarItemsGenerator(args);
    return [
        ...sidebarItems,
        {
            type: "category",
            label: "API Reference",
            items: [
                {
                    type: "link",
                    label: "Android",
                    href: androidApiHref,
                },
            ],
        },
    ];
}

const config: Config = {
    title: "CRYPTO Docs",
    tagline: "Dinosaurs are cool",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    // url: process.env.DEPLOY_URL,
    url: siteUrl || "http://localhost:3000",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",
    markdown: {
        format: "detect",
    },

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.
    trailingSlash: true,
    onBrokenLinks: "ignore",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    sidebarItemsGenerator: sidebarItemsGenerator,
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "",
            style: "dark",
            logo: {
                alt: "CRYPTO Logo",
                src: "img/crypto/logo_crypto_gold.png",
            },
        },
        footer: {
            copyright:
                "©2025 MJ. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
