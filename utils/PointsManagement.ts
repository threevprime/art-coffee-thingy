export function addPoints(points: number) {
    localStorage.setItem("points", String(points));
}

export function getPoints(): number {
    return parseInt(localStorage.getItem("points") || "0");
}

export function usePoints(points: number) {
    const currentPoints = getPoints();
    if (currentPoints >= points) {
        addPoints(currentPoints - points);
        return true;
    }
    return false;
}
