import readingTime from "reading-time";

import { i18n } from "../i18n";
import { classNames } from "../util/lang";
import { formatDate, getDate } from "./Date";
import { QuartzComponentConstructor, QuartzComponentProps } from "./types";

interface ContentMetaOptions {
	/**
	 * Whether to display reading time
	 */
	showReadingTime: boolean
	/**
	* Display a button for see in gitHub
	*/
	gitHubRepository?: string
	/**
	 * The main branch from the repository ; default is "v4"
	 */
	branch: string
}

const defaultOptions: ContentMetaOptions = {
	showReadingTime: true,
	branch: "v4"
};

export default ((opts?: Partial<ContentMetaOptions>) => {
	// Merge options with defaults
	const options: ContentMetaOptions = { ...defaultOptions, ...opts };

	function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
		const text = fileData.text;
		let githubButton = <></>; 
		if (options.gitHubRepository) {
			const fileURL = `${options.gitHubRepository}/blob/${options.branch}/${fileData.filePath ?? "content/index.md"}`;
			githubButton = (
				<a href={fileURL} target="_blank" class={classNames(displayClass, "content-meta", "github-repo")}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen">
						<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"/>
					</svg>
					Edit on GitHub
				</a>
			);}
		
		if (text) {
			const segments: string[] = [];

			if (fileData.dates) {
				segments.push(formatDate(getDate(cfg, fileData)!, cfg.locale));
			}

			// Display reading time if enabled
			if (options.showReadingTime) {
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				const { minutes, words: _words } = readingTime(text);
				const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
					minutes: Math.ceil(minutes),
				});
				segments.push(displayedTime);
			}

			return <p class={classNames(displayClass, "content-meta")}>
				{segments.join(", ")} • {githubButton} </p>;
		} else {
			return null;
		}
	}

	ContentMetadata.css = `
	.content-meta {
		margin-top: 0;
		color: var(--gray);
	}

	.github-repo svg {
		width: 1em;
		height: 1em;
		margin-right: 0.5em;
		vertical-align: -0.2em;
	}
	`;
	return ContentMetadata;
}) satisfies QuartzComponentConstructor;
