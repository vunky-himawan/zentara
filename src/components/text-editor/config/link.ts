import type { LinkOptions } from "@tiptap/extension-link";

export const linkConfig: Partial<LinkOptions> = {
	openOnClick: true,
	autolink: true,
	defaultProtocol: "https",
	protocols: ["http", "https"],
	isAllowedUri: (url, ctx) => {
		try {
			const parsedUrl = url.includes(":")
				? new URL(url)
				: new URL(`${ctx.defaultProtocol}://${url}`);

			if (!ctx.defaultValidate(parsedUrl.href)) {
				return false;
			}

			const disallowedProtocols = ["ftp", "file", "mailto"];
			const protocol = parsedUrl.protocol.replace(":", "");

			if (disallowedProtocols.includes(protocol)) {
				return false;
			}

			const allowedProtocols = ctx.protocols.map((p) => (typeof p === "string" ? p : p.scheme));

			if (!allowedProtocols.includes(protocol)) {
				return false;
			}

			const disallowedDomains = ["example-phishing.com", "malicious-site.net"];
			const domain = parsedUrl.hostname;

			if (disallowedDomains.includes(domain)) {
				return false;
			}

			return true;
		} catch {
			return false;
		}
	},
	shouldAutoLink: (url) => {
		try {
			const parsedUrl = url.includes(":") ? new URL(url) : new URL(`https://${url}`);

			const disallowedDomains = ["example-no-autolink.com", "another-no-autolink.com"];
			const domain = parsedUrl.hostname;

			return !disallowedDomains.includes(domain);
		} catch {
			return false;
		}
	},
};
