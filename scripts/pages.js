(() => {
    const revealNodes = Array.from(document.querySelectorAll("[data-reveal]"));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const markVisible = () => {
        revealNodes.forEach((node) => node.classList.add("is-visible"));
    };

    if (!revealNodes.length || prefersReducedMotion || !("IntersectionObserver" in window)) {
        markVisible();
    } else {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.14,
                rootMargin: "0px 0px -8% 0px"
            }
        );

        revealNodes.forEach((node, index) => {
            node.style.transitionDelay = `${Math.min(index * 75, 300)}ms`;
            revealObserver.observe(node);
        });
    }

    const currentYear = String(new Date().getFullYear());
    document.querySelectorAll("[data-current-year]").forEach((node) => {
        node.textContent = currentYear;
    });

    const currentFile = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("[data-page-link]").forEach((link) => {
        const href = link.getAttribute("href");
        if (!href) {
            return;
        }

        if (href === currentFile) {
            link.setAttribute("aria-current", "page");
        }
    });
})();
