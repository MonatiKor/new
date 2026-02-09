export function smoothScroll(
    elementId: string,
    block: "start" | "end" | "center" = "start",
) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const bcr = element.getBoundingClientRect();
    const scrollY = window.scrollY;
    let targetPosition = bcr.top + scrollY;

    if (block === "end") {
        targetPosition = bcr.bottom + scrollY - window.innerHeight;
    } else if (block === "center") {
        targetPosition =
            bcr.top + scrollY - (window.innerHeight / 2 - bcr.height / 2);
    }

    const offset = window.innerWidth > 1280 ? (window.innerWidth * 5) / 100 : 80;
    const finalTarget = targetPosition - (block === "start" ? offset : 0);

    if (Math.abs(scrollY - finalTarget) < 2) return;

    window.scrollTo({
        top: finalTarget,
        behavior: 'smooth'
    })
}