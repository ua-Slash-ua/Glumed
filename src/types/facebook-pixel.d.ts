export {};

declare global {
    interface Window {
        fbq?: (track: string, event: string, data?: Record<string, unknown>) => void;
    }

    function fbq(track: string, event: string, data?: Record<string, unknown>): void;
}