function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - 42)
}

function distanceFromHqInFeet(distance) {
    distanceFromHqInBlocks(distance)
        return distanceFromHqInBlocks(distance) * 264
    }

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far'
    }
}
