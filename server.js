import { listenAndServe } from "https://deno.land/std/http/server.ts";
import { App } from "./frontend.js";

async function handler(req) {
	const { pathname } = new URL(req.url);
	if (pathname.startsWith("/style.css")) {
		const style = await Deno.readFile("./style.css");
		return new Response(style, {
			headers: {
				"content-type": "text/css",
			}
		});
	}

	return new Response(App(), {
		headers: {
			"content-type": "text/html; charset=utf-8",
		},
	});
}

console.log("Listening on 8080");
await listenAndServe(":8080", handler);
