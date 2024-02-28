import { PageLayout, SharedLayout } from "./quartz/cfg";
import * as Component from "./quartz/components";
import { FileNode } from "./quartz/components/ExplorerNode";
import { IconFolderOptions } from "./quartz/plugins/components/FileIcons";

// components shared across all pages

const iconsOptions: IconFolderOptions = {
	rootIconFolder: "quartz/static/icons",
	default: {
		file: "file",
	},
};

const sortFn = (a: FileNode, b: FileNode) => {
	if (a.order && b.order) {
		return a.order - b.order;
	} else if (a.order) {
		return -1;
	}
	return 1;
};

export const sharedPageComponents: SharedLayout = {
	head: Component.Head(),
	header: [
		Component.MobileOnly(
			Component.ExplorerBurger({
				folderDefaultState: "open",
				folderClickBehavior: "link",
				iconSettings: iconsOptions,
				sortFn
			}),
		),
		Component.MobileOnly(Component.PageTitle()),
		Component.MobileOnly(Component.Spacer()),
		Component.Search(),
		Component.Darkmode(),
	],
	footer: Component.Footer({
		links: {
			Github: "https://github.com/ObsidianPublisher/obsidian-github-publisher",
			Discussion: "https://github.com/ObsidianPublisher/obsidian-github-publisher/discussions",
		},
	}),
};

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
	beforeBody: [
		Component.Breadcrumbs(),
		Component.ArticleTitle(iconsOptions),
		Component.ContentMeta({ showReadingTime: false }),
		Component.TagList(),
	],
	left: [
		Component.DesktopOnly(Component.PageTitle()),
		Component.DesktopOnly(
			Component.ExplorerBurger({
				folderClickBehavior: "link",
				folderDefaultState: "collapsed",
				useSavedState: true,
				title: "",
				iconSettings: iconsOptions,
				sortFn
			}),
		),
	],
	right: [
		Component.DesktopOnly(Component.Graph()),
		Component.DesktopOnly(Component.TableOfContents()),
		Component.DesktopOnly(Component.Backlinks()),
	],
};

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
	beforeBody: defaultContentPageLayout.beforeBody,
	left: defaultContentPageLayout.left,
	right: [],
};