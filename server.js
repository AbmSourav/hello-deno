import { listenAndServe } from "https://deno.land/std/http/server.ts";
import { App } from "./frontend.js";

function handler(req) {
	return new Response(App(), {
		headers: {
			"content-type": "text/html",
		},
	});
}

console.log("Listening on 8080");
await listenAndServe(":8080", handler);
