<script lang="ts">
    export let src: string;
</script>

<div class="markdown">
    {@html src}
</div>

<style>
    .markdown {
        font-size: 0.8rem;
    }

    .markdown :global(h1) {
        margin-bottom: 0;
    }

    .markdown :global(h6) {
        margin-top: 0;
        color: var(--fg-sec);
    }

    .markdown :global(h2), :global(h3), :global(h4), :global(h5) {
        margin: 0;
    }

    .markdown :global(p) {
        margin: 0.2rem 0;
    }


    .markdown :global(li::marker) {
        /* content: "- "; */
        color: var(--fg-sec);
    }


    .markdown :global(li li) {
        margin-top: 0;
    }

    .markdown :global(li) {
        margin-top: 1rem;
    }

    .markdown :global(table) {
        margin: auto;
        padding: 0.25rem;
    }

    .markdown :global(th), :global(td) {
        padding: 0.25rem;
        margin: 0.125rem;
        background-color: var(--bg-sec);
    }
</style>