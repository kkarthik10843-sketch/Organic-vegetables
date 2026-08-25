function ProductImage({ src, alt, className = "" }) {
    try {
        const [hasError, setHasError] = React.useState(false);
        const [isLoading, setIsLoading] = React.useState(true);
        // A generic beautiful agricultural fallback image
        const fallbackImage = "https://images.unsplash.com/photo-1595858632662-790184478149?auto=format&fit=crop&w=800&q=80";

        return (
            <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100 animate-pulse">
                        <div className="icon-image text-slate-300 text-3xl"></div>
                    </div>
                )}
                <img 
                    src={hasError ? fallbackImage : src} 
                    alt={alt} 
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setIsLoading(false)}
                    onError={() => {
                        setHasError(true);
                        setIsLoading(false);
                    }}
                />
            </div>
        );
    } catch (error) {
        console.error('ProductImage error:', error);
        return <div className={`bg-slate-100 flex items-center justify-center ${className}`}><div className="icon-image text-slate-400"></div></div>;
    }
}