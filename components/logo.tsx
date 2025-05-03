import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    size?: "small" | "medium" | "large";
    showText?: boolean;
    className?: string;
}

export default function Logo({
    size = "medium",
    showText = false,
    className = "",
}: LogoProps) {
    const sizes = {
        small: { width: 48, height: 48 },
        medium: { width: 80, height: 80 },
        large: { width: 160, height: 160 },
    };

    return (
        <Link href="/" className={`flex items-center ${className}`}>
            <div
                className="relative"
                style={{ width: sizes[size].width, height: sizes[size].height }}
            >
                <Image
                    src="/images/logo_png.png"
                    alt="Art Coffee Logo"
                    fill
                    className="object-contain"
                    priority
                    sizes={`${sizes[size].width}px`}
                />
            </div>
            {showText && <span className="sr-only">Art Coffee</span>}
        </Link>
    );
}
