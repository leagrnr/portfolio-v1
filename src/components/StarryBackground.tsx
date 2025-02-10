import { useEffect, useState, CSSProperties } from "react";

interface Star {
    size: number;
    position: {
        top: string;
        left: string;
    };
    delay: string;
    duration: string;
    movement: {
        x: string;
        y: string;
    };
}

const StarryBackground = () => {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        const generateStars = () => {
            const newStars: Star[] = [];
            for (let i = 0; i < 100; i++) {
                const size = Math.random() * 2;
                const position = {
                    top: Math.random() * 100 + 'vh',
                    left: Math.random() * 100 + 'vw',
                };
                const delay = Math.random() * 5 + 's';
                const duration = Math.random() * 5 + 5 + 's';
                const movement = {
                    x: Math.random() * 20 - 10 + 'vw',
                    y: Math.random() * 20 - 10 + 'vh',
                };
                newStars.push({ size, position, delay, duration, movement });
            }
            setStars(newStars);
        };

        generateStars();
    }, []);

    return (
        <div className="starry-background">
            {stars.map((star, index) => {
                const starStyle: CSSProperties & { '--move-x': string; '--move-y': string } = {
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    top: star.position.top,
                    left: star.position.left,
                    animationDelay: star.delay,
                    animationDuration: star.duration,
                    '--move-x': star.movement.x,
                    '--move-y': star.movement.y,
                };

                return (
                    <div
                        key={index}
                        className="star"
                        style={starStyle}
                    />
                );
            })}
        </div>
    );
};

export default StarryBackground;