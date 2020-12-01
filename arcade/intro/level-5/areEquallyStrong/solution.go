func areEquallyStrong(yourLeft int, yourRight int, friendsLeft int, friendsRight int) bool {
    return yourLeft + yourRight == friendsLeft + friendsRight && (yourLeft == friendsRight || yourLeft == friendsLeft)
}
