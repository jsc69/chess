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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
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
        `, SpriteKind.Player)
    W8Pawn.setPosition(120, 104)
}
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
tiles.setTilemap(tiles.createTilemap(hex`0a0008000102010201020102000002010201020102010000010201020102010200000201020102010201000001020102010201020000020102010201020100000102010201020102000002010201020102010000`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2], TileScale.Sixteen))
createSprites()
