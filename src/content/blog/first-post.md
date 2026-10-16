---
title: 'Building a compiler in OCaml, part 1'
description: ''
pubDate: '15 Oct 2026'
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium felis et nunc elementum, non mollis leo dictum. Aliquam venenatis, mauris consequat mattis elementum, ligula diam malesuada est, quis vulputate lectus mi a dolor. Phasellus ornare vel ipsum ut tincidunt. Etiam ultricies est sit amet risus scelerisque suscipit non id nunc. Sed vel volutpat augue. Nunc aliquet mauris eu quam auctor, vitae condimentum neque tempus. Sed et ullamcorper justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In semper, ligula ut dapibus porta, sapien tellus vehicula nibh, at cursus nisl diam sit amet est. In tempor, lorem a consectetur bibendum, purus lectus molestie arcu, non interdum turpis orci nec est. Vestibulum condimentum est nisi. Nullam facilisis varius enim ac sagittis. Donec in ultrices sapien. Vestibulum non risus efficitur, blandit ipsum eu, efficitur risus. Vestibulum sed nisl sem. Proin sollicitudin, lorem ut posuere condimentum, nulla ligula facilisis est, hendrerit feugiat leo nunc gravida eros. Ut semper molestie dolor et pretium. Cras consequat metus massa, sed pharetra risus aliquam vel. Duis cursus efficitur congue. Duis molestie tellus lorem, fermentum vestibulum massa lacinia quis. Morbi dictum ullamcorper nunc, vel fermentum orci pellentesque bibendum.

Sed eu libero velit. Sed vel efficitur velit, et rutrum sapien. Suspendisse facilisis hendrerit ligula tincidunt accumsan. Nulla convallis metus non enim vulputate, sit amet porta neque pellentesque. Quisque luctus efficitur mattis. Ut at dapibus metus. Donec commodo libero ipsum, ut consectetur lectus sollicitudin eu.

``` ocaml
let parse_string input =
  let buff = Lexing.from_string input in
  let rec print_tokens () =
    match Lexer.token buff with
    | Eof -> ()
    | t ->
        print_string (Token.tokenise t);
        print_endline "fkjwelfjwlfjlwj";
        print_tokens ()
  in
  print_tokens ()

let parse_file file_name =
  let file = open_in file_name in
  let buff = Lexing.from_channel file in
  let rec print_tokens () =
    match Lexer.token buff with
    | Eof -> ()
    | t ->
        print_string (Token.tokenise t);
        print_endline "";
        print_tokens ()
  in
  print_tokens ()

```

``` typescript
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
    // Type-check frontmatter using a schema
    schema: () =>
        z.object({
            title: z.string(),
            description: z.string(),
            // Transform string to Date object
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
        }),
});

export const collections = { blog };

```
