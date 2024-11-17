export const isInViewport = (el: HTMLElement, offsetH = 0) => {
    const rect = el.getBoundingClientRect();
    const vWidth = window.innerWidth || document.documentElement.clientWidth;
    const vHeight = window.innerHeight || document.documentElement.clientHeight;

    if (
        rect.right < 0 ||
        rect.bottom < 0 ||
        rect.left > vWidth ||
        rect.top - offsetH > vHeight
    )
        return false;

    return true;
};
