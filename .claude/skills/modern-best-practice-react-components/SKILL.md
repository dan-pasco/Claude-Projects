# React Development Skills for Claude Code

## Purpose

Use this guide when building, reviewing, debugging, or refactoring React
code. Prefer clear, maintainable, accessible, well-tested solutions over
clever or unnecessarily complex ones.

For the **My Uke Book** web application, prioritize a responsive
songbook experience with song search, recently added songs, recently
viewed songs, and username-based authentication backed by a database.
Treat the existing repository and project documentation as the source of
truth; do not assume a framework, router, styling library, or backend
until you inspect the project.

## 1. Start by understanding the project

Before making changes:

1.  Inspect the repository structure and read `package.json`, the
    lockfile, existing README files, and relevant project instructions.
2.  Identify the React version, build tool, language (JavaScript or
    TypeScript), routing, styling approach, state management, test
    framework, and linting setup.
3.  Follow established conventions unless there is a clear reason to
    improve them.
4.  Find the relevant components, hooks, API/service modules, tests, and
    types before editing.
5.  Make the smallest complete change that solves the user's request.
    Avoid unrelated refactors.

Do not introduce a new dependency when existing project capabilities are
sufficient. If a dependency is needed, explain why and use the package
manager and lockfile already in the project.

## 2. Use current documentation

-   When **Context7 MCP** is available, use it to retrieve current
    documentation for the specific library and version involved before
    relying on version-sensitive APIs.
-   Prefer official documentation for React and the relevant library.
-   Check the installed version in `package.json` and the lockfile; do
    not blindly apply examples for a different major version.
-   Do not invent APIs, props, configuration options, or package names.
-   If Context7 is unavailable, say so only when relevant and use the
    project's installed types and official documentation sources
    available to you.

## 3. React component design

-   Build components around one clear responsibility.
-   Prefer function components and hooks.
-   Keep components small enough to understand, but do not split code
    into many tiny components without a meaningful benefit.
-   Use descriptive names: `SongSearch`, `RecentlyAddedSongs`,
    `RecentlyViewedSongs`, and `useSongs` are preferable to vague names.
-   Keep reusable UI separate from data-fetching and business logic
    where doing so improves clarity.
-   Keep state as close as practical to the components that need it.
-   Derive values from existing state rather than duplicating them in
    state.
-   Use stable, meaningful keys when rendering lists; use persistent
    record IDs, not array indexes, for song lists when available.
-   Avoid premature abstractions and unnecessary global state.

## 4. Hooks and rendering

-   Follow the Rules of Hooks: call hooks only at the top level of React
    components or custom hooks.
-   Declare custom hooks with the `use` prefix and give them a focused
    purpose.
-   Specify effect dependencies correctly. Do not suppress dependency
    warnings just to make an effect run.
-   Do not use `useEffect` for values that can be calculated during
    rendering.
-   Do not use effects to mirror props into state unless there is a
    specific, justified need.
-   Use `useMemo` and `useCallback` only when they solve a measured or
    meaningful performance issue, or when stable identity is required by
    an API.
-   Avoid mutating state or props. Use immutable updates.
-   Prevent stale requests from overwriting newer results; use
    cancellation or an appropriate request identity pattern when
    fetching data.
-   Handle loading, empty, success, and error states explicitly.

## 5. TypeScript and code quality

If the project uses TypeScript:

-   Preserve TypeScript; do not convert typed code to plain JavaScript.
-   Give API responses, component props, and domain models meaningful
    types.
-   Avoid `any`. Prefer specific types, `unknown` with narrowing, or
    generics when appropriate.
-   Use discriminated unions for complex UI states when they improve
    correctness.
-   Avoid non-null assertions and type casts that merely silence errors.
-   Keep types close to their domain or in the project's established
    shared type locations.

For all code:

-   Use clear names and straightforward control flow.
-   Remove unused imports, dead code, and temporary debugging
    statements.
-   Follow the repository's formatter, lint rules, and naming
    conventions.
-   Add comments to explain why a non-obvious decision exists, not to
    restate the code.

## 6. Data fetching and API boundaries

-   Keep network requests in the project's established API/service layer
    or a suitable custom hook.
-   Validate and handle unexpected responses; do not assume network
    requests always succeed.
-   Show useful loading, empty, and error states.
-   Avoid duplicate requests and race conditions where practical.
-   Do not place secrets, private keys, database passwords, or
    privileged credentials in frontend code or environment variables
    exposed to the browser.
-   Never connect a browser-facing React component directly to a
    privileged database using administrative credentials.
-   Keep authorization and sensitive validation on the server; frontend
    checks alone are not security controls.
-   Use environment variables according to the current build tool's
    rules, and never commit real secrets.

## 7. My Uke Book UI guidance

When working on My Uke Book, use these principles where relevant:

### Landing page

-   Keep the title **My Uke Book** prominent and the layout easy to
    scan.
-   Provide a clear song-search control.
-   Show recently added songs and recently viewed songs as distinct
    sections.
-   Include useful empty states, such as a message when no songs have
    been added or viewed yet.
-   Make song titles and primary actions easy to use on desktop and
    mobile.
-   Avoid hard-coded sample data in production paths; use fixtures or
    clearly identified demo data for development.

### Song search and library

-   Search should be keyboard-accessible and have a clear label.
-   Decide whether search is client-side or server-side based on data
    size and the existing architecture.
-   Handle no matches, request failures, and slow responses.
-   Debounce server-backed searches when appropriate, without making the
    interface feel unresponsive.
-   Use stable song IDs and encode URL parameters safely.
-   Preserve useful search and navigation behavior when moving between
    song details and the library.

### Recently viewed songs

-   Define what counts as a view and update it consistently.
-   Prevent duplicate entries from accumulating; update the most recent
    timestamp for an existing song.
-   Keep storage and persistence consistent with the application's
    architecture and user account model.
-   Do not store sensitive data in browser storage.

### Authentication

-   Follow the existing authentication design and server-side
    session/token handling.
-   Treat a username as an identifier, not as proof of identity.
-   Do not implement insecure home-grown password storage or
    authentication.
-   Protect authenticated routes on the server as well as in the UI
    where applicable.
-   Handle expired sessions, failed sign-in, and sign-out clearly.
-   Do not log credentials, tokens, or other secrets.

## 8. Accessibility and responsive design

-   Use semantic HTML before adding ARIA attributes.
-   Ensure interactive elements are keyboard-operable and have visible
    focus indicators.
-   Associate form controls with labels; provide understandable
    validation messages.
-   Use buttons for actions and links for navigation.
-   Provide meaningful alt text for informative images and empty alt
    text for decorative images.
-   Do not communicate status using color alone.
-   Check layouts at narrow mobile widths as well as desktop widths.
-   Respect reduced-motion preferences when adding nonessential
    animation.
-   Keep text readable and interactive targets comfortable to use.

## 9. Performance

-   Measure or identify a plausible bottleneck before optimizing.
-   Avoid unnecessary re-renders caused by duplicated state or unstable
    data flow.
-   Lazy-load routes or heavy features when appropriate for the project.
-   Optimize images and avoid loading large song collections
    unnecessarily.
-   Use pagination, virtualization, or server-side filtering only when
    justified by actual data volume and requirements.
-   Do not sacrifice readability for speculative performance gains.

## 10. Error handling and security

-   Never silently swallow errors. Handle them appropriately and provide
    useful user feedback.
-   Do not expose stack traces, database errors, internal paths, or
    secrets to end users.
-   Treat user input and external API content as untrusted.
-   Avoid rendering untrusted HTML. If rich text is required, use a
    well-maintained sanitization approach appropriate to the project.
-   Do not build SQL queries by concatenating untrusted input; use
    parameterized queries in the backend.
-   Use least-privilege access for databases and external services.
-   Ask before destructive actions, schema migrations, data deletion, or
    changes to production systems.
-   Do not claim a security issue is fixed without verifying the
    relevant code and tests.

## 11. Testing and verification

After making changes:

1.  Run the most relevant tests.
2.  Run the project's lint, type-check, and build commands when
    available and practical.
3.  Add or update tests for meaningful behavior and bug fixes.
4.  Test edge cases such as empty results, failed requests, invalid
    input, and loading states.
5.  For UI changes, use the project's browser-testing tools if available
    and verify responsive behavior.
6.  Review the diff for accidental changes, secrets, debug output, and
    unrelated refactoring.
7.  Report exactly which checks passed, failed, or were not run. Never
    claim a test passed if it was not executed.

Prefer tests that verify user-visible behavior rather than
implementation details. Use the testing libraries already established in
the repository.

## 12. Recommended workflow for each task

1.  **Understand:** Restate the expected behavior briefly and inspect
    the relevant files.
2.  **Plan:** Identify the smallest safe implementation and any
    uncertainties that affect the result.
3.  **Document:** Use Context7 for version-specific library questions
    when available.
4.  **Implement:** Make focused changes consistent with existing
    conventions.
5.  **Verify:** Run targeted tests, linting, type checks, and/or build
    as appropriate.
6.  **Review:** Inspect the diff and consider accessibility, security,
    responsive behavior, and error states.
7.  **Summarize:** Explain what changed, list key files, report
    verification results, and disclose limitations.

If requirements are ambiguous but a safe, conventional implementation is
possible, proceed with a reasonable assumption and state it. Ask a
focused question when a missing detail could materially change the
architecture, security, or data behavior.

## 13. Definition of done

A React task is complete when:

-   The requested behavior is implemented.
-   The code follows the project's conventions and existing
    architecture.
-   Loading, empty, and error states are addressed where relevant.
-   Accessibility and responsive behavior are considered.
-   No secrets or unnecessary dependencies were introduced.
-   Relevant tests and checks were run, with results reported
    accurately.
-   The final summary describes the change and any remaining caveats.

## Important instruction

Treat this file as project guidance, not a reason to override the user's
explicit requirements, repository-specific instructions, or official
documentation. Prefer simple, correct, maintainable code and verify
assumptions before making broad changes.
