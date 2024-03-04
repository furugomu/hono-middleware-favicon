// deno run --allow-net server.ts

import { Hono } from "npm:hono@4.0.9";
import { favicon } from "./mod.ts";

const app = new Hono();

app.get("/", (c) => c.text("Hello!"));
app.route("/favicon.ico", favicon);

Deno.serve(app.fetch);
