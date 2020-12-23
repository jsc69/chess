namespace SpriteKind {
    export const Cursor = SpriteKind.create()
    export const BlackPiece = SpriteKind.create()
    export const WhitePiece = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    hover = Pointer
    Pointer.y += -16
    if (hand != Pointer) {
        hand.y += -16
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hand == Pointer) {
        hand = hover
    } else {
        hand = Pointer
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    hover = Pointer
    Pointer.x += -16
    if (hand != Pointer) {
        hand.x += -16
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    hover = Pointer
    if (hand.x < 120) {
        Pointer.x += 16
        if (hand != Pointer) {
            hand.x += 16
        }
    }
})
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.BlackPiece, function (sprite, otherSprite) {
    if (hand == Pointer) {
        hover = otherSprite
    }
})
function createSprites () {
    BLRock = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f . f f f f . f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f f f f f f f f f f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.BlackPiece)
    BLRock.setPosition(120, 8)
    BRRock = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f . f f f f . f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f f f f f f f f f f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.BlackPiece)
    BRRock.setPosition(8, 8)
    BLKnight = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f . . f f . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . f f 1 f f f f f . . . . . 
        . . f f f f f f f 1 f . . . . . 
        . . f f f f f f f 1 f . . . . . 
        . f f f f f f f f 1 f f . . . . 
        . f f f f . f f f f 1 f . . . . 
        . . f f . . . f f f 1 f . . . . 
        . . . . . . f f f f 1 f . . . . 
        . . . . . . f f f f 1 f . . . . 
        . . . . . f f f f f 1 f f . . . 
        . . . . f f f f f f f 1 f . . . 
        . . . f f f f f f f f 1 f f . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.BlackPiece)
    BLKnight.setPosition(24, 8)
    BRKnight = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f . . f f . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . f f 1 f f f f f . . . . . 
        . . f f f f f f f 1 f . . . . . 
        . . f f f f f f f 1 f . . . . . 
        . f f f f f f f f 1 f f . . . . 
        . f f f f . f f f f 1 f . . . . 
        . . f f . . . f f f 1 f . . . . 
        . . . . . . f f f f 1 f . . . . 
        . . . . . . f f f f 1 f . . . . 
        . . . . . f f f f f 1 f f . . . 
        . . . . f f f f f f f 1 f . . . 
        . . . f f f f f f f f 1 f f . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.BlackPiece)
    BRKnight.setPosition(104, 8)
    BLBishop = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f 1 1 f f f f . . . 
        . . f f f f 1 1 1 1 f f f f . . 
        . . f f f f f 1 1 f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f 1 1 1 1 1 1 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.BlackPiece)
    BLBishop.setPosition(40, 8)
    BRBishop = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f 1 1 f f f f . . . 
        . . f f f f 1 1 1 1 f f f f . . 
        . . f f f f f 1 1 f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f 1 1 1 1 1 1 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.BlackPiece)
    BRBishop.setPosition(88, 8)
    BQueen = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . f . f f . f f . f f . f . . 
        . . f . f f . f f . f f . f . . 
        . . f f . f . f f . f . f f . . 
        . . . f . f . f f . f . f . . . 
        . . . f f f . f f . f f f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.BlackPiece)
    BQueen.setPosition(56, 8)
    BKing = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.BlackPiece)
    BKing.setPosition(72, 8)
    B1Pawn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.BlackPiece)
    B1Pawn.setPosition(8, 24)
    B2Pawn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.BlackPiece)
    B2Pawn.setPosition(24, 24)
    B3Pawn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.BlackPiece)
    B3Pawn.setPosition(40, 24)
    B4Pawn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.BlackPiece)
    B4Pawn.setPosition(56, 24)
    B5Pawn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.BlackPiece)
    B5Pawn.setPosition(72, 24)
    B6Pawn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.BlackPiece)
    B6Pawn.setPosition(88, 24)
    B7Pawn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.BlackPiece)
    B7Pawn.setPosition(104, 24)
    B8Pawn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.BlackPiece)
    B8Pawn.setPosition(120, 24)
    WLRock = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . 1 1 1 1 . 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.WhitePiece)
    WLRock.setPosition(8, 120)
    WRRock = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . 1 1 1 1 . 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.WhitePiece)
    WRRock.setPosition(120, 120)
    WLKnight = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 . . 1 1 . . . . . . 
        . . . 1 1 1 1 1 1 1 . . . . . . 
        . . . 1 1 f 1 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 1 f 1 . . . . . 
        . . 1 1 1 1 1 1 1 f 1 . . . . . 
        . 1 1 1 1 1 1 1 1 f 1 1 . . . . 
        . 1 1 1 1 . 1 1 1 1 f 1 . . . . 
        . . 1 1 . . . 1 1 1 f 1 . . . . 
        . . . . . . 1 1 1 1 f 1 . . . . 
        . . . . . . 1 1 1 1 f 1 . . . . 
        . . . . . 1 1 1 1 1 f 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 f 1 . . . 
        . . . 1 1 1 1 1 1 1 1 f 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.WhitePiece)
    WLKnight.setPosition(24, 120)
    WRKnight = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 . . 1 1 . . . . . . 
        . . . 1 1 1 1 1 1 1 . . . . . . 
        . . . 1 1 f 1 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 1 f 1 . . . . . 
        . . 1 1 1 1 1 1 1 f 1 . . . . . 
        . 1 1 1 1 1 1 1 1 f 1 1 . . . . 
        . 1 1 1 1 . 1 1 1 1 f 1 . . . . 
        . . 1 1 . . . 1 1 1 f 1 . . . . 
        . . . . . . 1 1 1 1 f 1 . . . . 
        . . . . . . 1 1 1 1 f 1 . . . . 
        . . . . . 1 1 1 1 1 f 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 f 1 . . . 
        . . . 1 1 1 1 1 1 1 1 f 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.WhitePiece)
    WRKnight.setPosition(104, 120)
    WLBishop = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 f f 1 1 1 1 . . . 
        . . 1 1 1 1 f f f f 1 1 1 1 . . 
        . . 1 1 1 1 1 f f 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 f f f f f f 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.WhitePiece)
    WLBishop.setPosition(40, 120)
    WRBishop = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 f f 1 1 1 1 . . . 
        . . 1 1 1 1 f f f f 1 1 1 1 . . 
        . . 1 1 1 1 1 f f 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 f f f f f f 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.WhitePiece)
    WRBishop.setPosition(88, 120)
    WQueen = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . 1 . 1 1 . 1 1 . 1 1 . 1 . . 
        . . 1 . 1 1 . 1 1 . 1 1 . 1 . . 
        . . 1 1 . 1 . 1 1 . 1 . 1 1 . . 
        . . . 1 . 1 . 1 1 . 1 . 1 . . . 
        . . . 1 1 1 . 1 1 . 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 f f f f f f 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.WhitePiece)
    WQueen.setPosition(56, 120)
    WKing = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 f f f f f f 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.WhitePiece)
    WKing.setPosition(72, 120)
    W1Pawn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.WhitePiece)
    W1Pawn.setPosition(8, 104)
    W2Pawn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.WhitePiece)
    W2Pawn.setPosition(24, 104)
    W3Pawn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.WhitePiece)
    W3Pawn.setPosition(40, 104)
    W4Pawn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.WhitePiece)
    W4Pawn.setPosition(56, 104)
    W5Pawn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.WhitePiece)
    W5Pawn.setPosition(72, 104)
    W6Pawn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.WhitePiece)
    W6Pawn.setPosition(88, 104)
    W7Pawn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.WhitePiece)
    W7Pawn.setPosition(104, 104)
    W8Pawn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.WhitePiece)
    W8Pawn.setPosition(120, 104)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    hover = Pointer
    Pointer.y += 16
    if (hand != Pointer) {
        hand.y += 16
    }
})
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.WhitePiece, function (sprite, otherSprite) {
    if (hand == Pointer) {
        hover = otherSprite
    }
})
let W8Pawn: Sprite = null
let W7Pawn: Sprite = null
let W6Pawn: Sprite = null
let W5Pawn: Sprite = null
let W4Pawn: Sprite = null
let W3Pawn: Sprite = null
let W2Pawn: Sprite = null
let W1Pawn: Sprite = null
let WKing: Sprite = null
let WQueen: Sprite = null
let WRBishop: Sprite = null
let WLBishop: Sprite = null
let WRKnight: Sprite = null
let WLKnight: Sprite = null
let WRRock: Sprite = null
let WLRock: Sprite = null
let B8Pawn: Sprite = null
let B7Pawn: Sprite = null
let B6Pawn: Sprite = null
let B5Pawn: Sprite = null
let B4Pawn: Sprite = null
let B3Pawn: Sprite = null
let B2Pawn: Sprite = null
let B1Pawn: Sprite = null
let BKing: Sprite = null
let BQueen: Sprite = null
let BRBishop: Sprite = null
let BLBishop: Sprite = null
let BRKnight: Sprite = null
let BLKnight: Sprite = null
let BRRock: Sprite = null
let BLRock: Sprite = null
let hover: Sprite = null
let hand: Sprite = null
let Pointer: Sprite = null
tiles.setTilemap(tilemap`level_0`)
createSprites()
Pointer = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . . 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Cursor)
Pointer.setPosition(72, 104)
Pointer.setFlag(SpriteFlag.StayInScreen, true)
scene.cameraFollowSprite(Pointer)
hand = Pointer
hover = Pointer
