import React, { useEffect, useState, useCallback } from 'react';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';

const Dot = styled('div')({
    width: 4,
    height: 4,
    borderRadius: '50%',
    backgroundColor: '#5b588f',
    position: 'absolute',
    transition: 'transform 0.5s ease-out',
});

const BackgroundContainer = styled(Paper)({
    borderRadius: 0,
    // padding: 0,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: '#494583',
    zIndex: -1,
});

interface DotPosition {
    top: number;
    left: number;
}

const Background: React.FC = () => {
    const [dots, setDots] = useState<DotPosition[]>([]);
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
    const edgePadding = -5;
    const impactRadius = 250;
    const dotSize = 7;
    const spaceAroundDots = 30;
    const totalSpacing = dotSize + spaceAroundDots;

    const updateDots = useCallback(() => {
        const screenWidth = window.innerWidth - (edgePadding);
        const screenHeight = window.innerHeight - (edgePadding);

        const rows = Math.floor(screenHeight / totalSpacing) + 2;
        const columns = Math.floor(screenWidth / totalSpacing) + 2;

        const newDots = [];
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                newDots.push({
                    top: edgePadding + i * totalSpacing,
                    left: edgePadding + j * totalSpacing,
                });
            }
        }
        setDots(newDots);
    }, [edgePadding, totalSpacing]);

    useEffect(() => {
        updateDots();
        window.addEventListener('resize', updateDots);

        return () => {
            window.removeEventListener('resize', updateDots);
        };
    }, [updateDots]);

    const handleMouseMove = useCallback((event: MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseMove]);

    const calculateDotPosition = (dot: DotPosition): { x: number; y: number } => {
        if (!mousePosition) return { x: 0, y: 0 };

        const dx = mousePosition.x - dot.left;
        const dy = mousePosition.y - dot.top;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < impactRadius) {
            const factor = (impactRadius - distance) / impactRadius;
            return {
                x: dx * factor * 0.5,
                y: dy * factor * 0.5,
            };
        }

        return { x: 0, y: 0 };
    };

    return (
        <BackgroundContainer elevation={0}>
            {dots.map((dot, index) => {
                const { x, y } = calculateDotPosition(dot);
                return (
                    <Dot
                        key={index}
                        style={{
                            top: `${dot.top}px`,
                            left: `${dot.left}px`,
                            transform: `translate(${x}px, ${y}px)`,
                        }}
                    />
                );
            })}
        </BackgroundContainer>
    );
};

export default Background;
