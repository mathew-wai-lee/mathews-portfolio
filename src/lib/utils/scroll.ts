export function scrollToElement(elementId: string, offset: number = 80): void {
    const element = document.getElementById(elementId);
    if (element) {
        // Add a temporary div for offset
        // const offsetDiv = document.createElement('div');
        // offsetDiv.style.height = `${offset}px`; // Height of navbar
        // element.parentNode?.insertBefore(offsetDiv, element);
        
        element.scrollIntoView({ behavior: 'smooth' });
    
        // Remove the temporary div after scrolling
        // setTimeout(() => {
        //     offsetDiv.remove();
        // }, 1000);
    }
} 

