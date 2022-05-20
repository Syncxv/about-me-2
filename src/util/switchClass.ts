//i cant name shit
const switchClass = async (ref: HTMLElement, delay = 1000) => {
    ref.style.cssText = "--opacity: 1;";
    setTimeout(() => {
        ref.style.cssText = "--opacity: 0;";
    }, delay);
};

export default switchClass;
