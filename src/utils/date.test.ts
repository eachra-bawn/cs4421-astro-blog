import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import FormattedDate from "../components/FormattedDate.astro";

test("Formatted date", async () => {
    const container = await AstroContainer.create();
    const date = new Date("2026-09-20T12:00:00.000Z");
    const result = await container.renderToString(FormattedDate, {
        props: { date },
    });

    expect(result).toContain(`<time datetime="${date.toISOString()}">`);
    expect(result).toContain("Sep 20, 2026");
});
