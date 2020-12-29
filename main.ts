let vals: ?4727250;
let i: number;
// !/usr/bin/env pypy
//  -*- coding: utf-8 -*-
// ##############################################################################
//  Piece-Square tables. Tune these to change sunfish's behaviour
// ##############################################################################
let piece = {
    "P" : 100,
    "N" : 280,
    "B" : 320,
    "R" : 479,
    "Q" : 929,
    "K" : 60000,
}

let pst = {
    "P" : [0, 0, 0, 0, 0, 0, 0, 0, 78, 83, 86, 73, 102, 82, 85, 90, 7, 29, 21, 44, 40, 31, 44, 7, -17, 16, -2, 15, 14, 0, 15, -13, -26, 3, 10, 9, 6, 1, 0, -23, -22, 9, 5, -11, -10, -2, 3, -19, -31, 8, -7, -37, -36, -14, 3, -31, 0, 0, 0, 0, 0, 0, 0, 0],
    "N" : [-66, -53, -75, -75, -10, -55, -58, -70, -3, -6, 100, -36, 4, 62, -4, -14, 10, 67, 1, 74, 73, 27, 62, -2, 24, 24, 45, 37, 33, 41, 25, 17, -1, 5, 31, 21, 22, 35, 2, 0, -18, 10, 13, 22, 18, 15, 11, -14, -23, -15, 2, 0, 2, 0, -23, -20, -74, -23, -26, -24, -19, -35, -22, -69],
    "B" : [-59, -78, -82, -76, -23, -107, -37, -50, -11, 20, 35, -42, -39, 31, 2, -22, -9, 39, -32, 41, 52, -10, 28, -14, 25, 17, 20, 34, 26, 25, 15, 10, 13, 10, 17, 23, 17, 16, 0, 7, 14, 25, 24, 15, 8, 25, 20, 15, 19, 20, 11, 6, 7, 6, 20, 16, -7, 2, -15, -12, -14, -15, -10, -10],
    "R" : [35, 29, 33, 4, 37, 33, 56, 50, 55, 29, 56, 67, 55, 62, 34, 60, 19, 35, 28, 33, 45, 27, 25, 15, 0, 5, 16, 13, 18, -4, -9, -6, -28, -35, -16, -21, -13, -29, -46, -30, -42, -28, -42, -25, -25, -35, -26, -46, -53, -38, -31, -26, -29, -43, -44, -53, -30, -24, -18, 5, -2, -18, -31, -32],
    "Q" : [6, 1, -8, -104, 69, 24, 88, 26, 14, 32, 60, -10, 20, 76, 57, 24, -2, 43, 32, 60, 72, 63, 43, 2, 1, -16, 22, 17, 25, 20, -13, -6, -14, -15, -2, -5, -1, -10, -20, -22, -30, -6, -13, -11, -16, -11, -16, -27, -36, -18, 0, -19, -15, -15, -21, -38, -39, -30, -31, -13, -31, -36, -34, -42],
    "K" : [4, 54, 47, -99, -99, 60, 83, -62, -32, 10, 55, 56, 56, 55, 10, 3, -62, 12, -57, 44, -67, 28, 37, -31, -55, 50, 11, -4, -19, 13, 0, -49, -55, -43, -52, -28, -51, -47, -8, -50, -47, -42, -43, -79, -64, -32, -29, -32, -4, 3, -14, -50, -57, -18, 13, 4, 17, 30, -3, -14, 6, -1, 40, 18],
}

//  Pad tables and join piece and pst dictionaries
//  -> JS: changed to fit Makecode Arcade
// for k, table in pst.items():
//     padrow = lambda row: (0,) + tuple(x+piece[k] for x in row) + (0,)
//     pst[k] = sum((padrow(table[i*8:i*8+8]) for i in range(8)), ())
//     pst[k] = (0,)*20 + pst[k] + (0,)*20
for (let k of pst) {
    vals = [0].concat([0]) + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0]
    for (i = 0; i < 64; i++) {
        if (i % 8 == 0) {
            vals = vals + [0]
        }
        
        vals = vals + [pst[k][i] + piece[k]]
        if (i % 8 == 7) {
            vals = vals + [0]
        }
        
    }
    pst[k] = vals + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0] + [0]
}
// ##############################################################################
//  Global constants
// ##############################################################################
//  Our board is represented as a 120 character string. The padding allows for
//  fast detection of moves that don't stay within the board.
let [A1, H1, A8, H8] = [91, 98, 21, 28]
let initial = `         
         
 rnbqkbnr
 pppppppp
 ........
 ........
 ........
 ........
 PPPPPPPP
 RNBQKBNR
         
         
`
//    0 -  9
//   10 - 19
//   20 - 29
//   30 - 39
//   40 - 49
//   50 - 59
//   60 - 69
//   70 - 79
//   80 - 89
//   90 - 99
//  100 -109
//  110 -119
//  Lists of possible moves for each piece type.
let [N, E, S, W] = [-10, 1, 10, -1]
let directions = {
    "P" : [N, N + N, N + W, N + E],
    "N" : [N + N + E, E + N + E, E + S + E, S + S + E, S + S + W, W + S + W, W + N + W, N + N + W],
    "B" : [N + E, S + E, S + W, N + W],
    "R" : [N, E, S, W],
    "Q" : [N, E, S, W, N + E, S + E, S + W, N + W],
    "K" : [N, E, S, W, N + E, S + E, S + W, N + W],
}

//  Mate value must be greater than 8*queen + 2*(rook+knight+bishop)
//  King value is set to twice this value such that if the opponent is
//  8 queens up, but we got the king, we still exceed MATE_VALUE.
//  When a MATE is detected, we'll set the score to MATE_UPPER - plies to get there
//  E.g. Mate in 3 will be MATE_UPPER - 6
let MATE_LOWER = piece["K"] - 10 * piece["Q"]
let MATE_UPPER = piece["K"] + 10 * piece["Q"]
//  The table size is the maximum number of elements in the transposition table.
let TABLE_SIZE = 1e7
//  Constants for tuning search
let QS_LIMIT = 219
let EVAL_ROUGHNESS = 13
let DRAW_TEST = true
// ##############################################################################
//  Chess logic
// ##############################################################################
function swapcase(text: string): string {
    let ret = ""
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == "P") {
            ret = ret + "p"
        } else if (text.charAt(i) == "R") {
            ret = ret + "r"
        } else if (text.charAt(i) == "N") {
            ret = ret + "n"
        } else if (text.charAt(i) == "B") {
            ret = ret + "b"
        } else if (text.charAt(i) == "Q") {
            ret = ret + "q"
        } else if (text.charAt(i) == "K") {
            ret = ret + "k"
        } else if (text.charAt(i) == "p") {
            ret = ret + "P"
        } else if (text.charAt(i) == "r") {
            ret = ret + "R"
        } else if (text.charAt(i) == "n") {
            ret = ret + "N"
        } else if (text.charAt(i) == "b") {
            ret = ret + "B"
        } else if (text.charAt(i) == "q") {
            ret = ret + "Q"
        } else if (text.charAt(i) == "k") {
            ret = ret + "K"
        } else {
            ret = ret + text.charAt(i)
        }
        
    }
    return ret
}

function put(board: string, i: number, p: string): string {
    return board.slice(0, i) + p + board.slice(i + 1)
}

class Position {
    board: string
    score
    wc
    bc
    ep: number
    kp: number
    /**  A state of a chess game
    board -- a 120 char representation of the board
    score -- the board evaluation
    wc -- the castling rights, [west/queen side, east/king side]
    bc -- the opponent castling rights, [west/king side, east/queen side]
    ep - the en passant square
    kp - the king passant square
    
 */
    constructor(board: string, score: any, wc: any, bc: any, ep: number, kp: number): Position {
        this.board = board
        this.score = score
        this.wc = wc
        this.bc = bc
        this.ep = ep
        this.kp = kp
    }
    
    public getScore() {
        return this.score
    }
    
    public gen_moves() {
        let p: string;
        let j: number;
        let q: string;
        //  For each of our pieces, iterate through each possible 'ray' of moves,
        //  as defined in the 'directions' map. The rays are broken e.g. by
        //  captures or immediately in case of pieces such as knights.
        // for i, p in enumerate(self.board):
        for (let i = 0; i < this.board.length; i++) {
            p = this.board[i]
            if (p != "R" && p != "N" && p != "B" && p != "Q" && p != "K " && p != "P") {
                continue
            }
            
            for (let d of directions[p]) {
                // for j in count(i+d, d):
                j = i + d
                while (j > 0) {
                    q = this.board[j]
                    //  Stay inside the board, and off friendly pieces
                    // JS: if not p.isupper(): continue
                    if (!("PRNBQK".indexOf(p) >= 0)) {
                        continue
                    }
                    
                    //  Pawn move, double move and capture
                    if (p == "P" && [N, N + N].indexOf(d) >= 0 && q != ".") {
                        break
                    }
                    
                    if (p == "P" && d == N + N && (i < A1 + N || this.board[i + N] != ".")) {
                        break
                    }
                    
                    if (p == "P" && [N + W, N + E].indexOf(d) >= 0 && q == "." && [this.ep, this.kp, this.kp - 1, this.kp + 1].indexOf(j) < 0) {
                        break
                    }
                    
                    //  Move it
                     {TODO: Yield} 
                    //  Stop crawlers from sliding, and sliding after captures
                    // JS: if p in 'PNK' or q.islower(): break
                    if (!(".prnbqk".indexOf(q) >= 0)) {
                        break
                    }
                    
                    //  Castling, by sliding the rook next to the king
                    if (i == A1 && this.board[j + E] == "K" && this.wc[0]) {
                         {TODO: Yield} 
                    }
                    
                    if (i == H1 && this.board[j + W] == "K" && this.wc[1]) {
                         {TODO: Yield} 
                    }
                    
                    j = j + d
                }
            }
        }
    }
    
    public rotate(): Position {
        /** Rotates the board, preserving enpassant */
        return new Position(swapcase(_py.stringSlice(this.board, null, null, -1)), -this.score, this.bc, this.wc, this.ep ? 119 - this.ep : 0, this.kp ? 119 - this.kp : 0)
    }
    
    public nullmove(): Position {
        /** Like rotate, but clears ep and kp */
        return new Position(swapcase(_py.stringSlice(this.board, null, null, -1)), -this.score, this.bc, this.wc, 0, 0)
    }
    
    public move(move: any): Position {
        let wc: boolean[];
        let bc: boolean[];
        let ep: number;
        let kp: number;
        let [i, j] = move
        let [p, q] = [this.board[i], this.board[j]]
        // JS put = lambda board, i, p: board[:i] + p + board[i+1:]
        //  Copy variables and reset ep and kp
        let board = this.board
        let [wc, bc, ep, kp] = [this.wc, this.bc, 0, 0]
        let score = this.score + this.value(move)
        //  Actual move
        board = put(board, j, board[i])
        board = put(board, i, ".")
        //  Castling rights, we move the rook or capture the opponent's
        if (i == A1) {
            wc = [false, wc[1]]
        }
        
        if (i == H1) {
            wc = [wc[0], false]
        }
        
        if (j == A8) {
            bc = [bc[0], false]
        }
        
        if (j == H8) {
            bc = [false, bc[1]]
        }
        
        //  Castling
        if (p == "K") {
            wc = [false, false]
            if (Math.abs(j - i) == 2) {
                kp = Math.idiv(i + j, 2)
                board = put(board, j < i ? A1 : H1, ".")
                board = put(board, kp, "R")
            }
            
        }
        
        //  Pawn promotion, double move and en passant capture
        if (p == "P") {
            if (A8 <= j && j <= H8) {
                board = put(board, j, "Q")
            }
            
            if (j - i == 2 * N) {
                ep = i + N
            }
            
            if (j == this.ep) {
                board = put(board, j + S, ".")
            }
            
        }
        
        //  We rotate the returned position, so it's ready for the next player
        return new Position(board, score, wc, bc, ep, kp).rotate()
    }
    
    public value(move: any): number {
        let [i, j] = move
        let [p, q] = [this.board[i], this.board[j]]
        //  Actual move
        let score = pst[p][j] - pst[p][i]
        //  Capture
        // if q.islower():
        if ("prnbqk".indexOf(q) >= 0) {
            score += pst[swapcase(q)][119 - j]
        }
        
        //  Castling check detection
        if (Math.abs(j - this.kp) < 2) {
            score += pst["K"][119 - j]
        }
        
        //  Castling
        if (p == "K" && Math.abs(i - j) == 2) {
            score += pst["R"][Math.idiv(i + j, 2)]
            score -= pst["R"][j < i ? A1 : H1]
        }
        
        //  Special pawn stuff
        if (p == "P") {
            if (A8 <= j && j <= H8) {
                score += pst["Q"][j] - pst["P"][j]
            }
            
            if (j == this.ep) {
                score += pst["P"][119 - (j + S)]
            }
            
        }
        
        return score
    }
    
}

// ##############################################################################
//  Search logic
// ##############################################################################
function partition(pos: Position, moves: any, start: number, end: number): number {
    let tmp: ?62878;
    let i = start - 1
    let pivot = pos.value(moves[end])
    for (let j = start; j < end; j++) {
        if (pos.value(moves[j]) >= pivot) {
            i = i + 1
            tmp = moves[j]
            moves[j] = moves[i]
            moves[i] = tmp
        }
        
    }
    tmp = moves[end]
    moves[end] = moves[i + 1]
    moves[i + 1] = tmp
    return i + 1
}

//  Function to do Quick sort
function quickSort(pos: any, moves: any, start: number, end: number) {
    let pi: number;
    if (start < end) {
        pi = partition(pos, moves, start, end)
        quickSort(pos, moves, start, pi - 1)
        quickSort(pos, moves, pi + 1, end)
    }
    
}

function sortedMoves(pos: Position) {
    let moves = []
    for (let move of pos.gen_moves()) {
        moves.push(move)
    }
    if (moves.length > 1) {
        quickSort(pos, moves, 0, moves.length - 1)
    }
    
    return moves
}

function is_dead(pos: Position): boolean {
    let check = true
    for (let m of pos.gen_moves()) {
        check = check && pos.value(m) >= MATE_LOWER
    }
    return check
}

//  lower <= s(pos) <= upper
// JS Entry = namedtuple('Entry', 'lower upper')
class Entry {
    lower: number
    upper: number
    constructor(lower: number, upper: number): Entry {
        this.lower = lower
        this.upper = upper
    }
    
    public getLower(): number {
        return this.lower
    }
    
    public getUpper(): number {
        return this.upper
    }
    
}

class Searcher {
    tp_score: Entry[]
    tp_move
    history
    nodes: number
    constructor(): Searcher {
        this.tp_score =  {
        	
        }
        
        this.tp_move =  {
        	
        }
        
        this.history =  {
        	
        }
        
        this.nodes = 0
    }
    
    public bound(pos: Position, gamma: number, depth: number, root: boolean = true): number {
        let score: number;
        let check: boolean;
        let in_check: boolean;
        /**  returns r where
                s(pos) <= r < gamma    if gamma > s(pos)
                gamma <= r <= s(pos)   if gamma <= s(pos)
 */
        this.nodes += 1
        //  Depth <= 0 is QSearch. Here any position is searched as deeply as is needed for
        //  calmness, and from this point on there is no difference in behaviour depending on
        //  depth, so so there is no reason to keep different depths in the transposition table.
        depth = Math.max(depth, 0)
        //  Sunfish is a king-capture engine, so we should always check if we
        //  still have a king. Notice since this is the only termination check,
        //  the remaining code has to be comfortable with being mated, stalemated
        //  or able to capture the opponent king.
        if (pos.score <= -MATE_LOWER) {
            return -MATE_UPPER
        }
        
        //  We detect 3-fold captures by comparing against previously
        //  _actually played_ positions.
        //  Note that we need to do this before we look in the table, as the
        //  position may have been previously reached with a different score.
        //  This is what prevents a search instability.
        //  FIXME: This is not true, since other positions will be affected by
        //  the new values for all the drawn positions.
        if (DRAW_TEST) {
            if (!root && this.history.indexOf(pos) >= 0) {
                return 0
            }
            
        }
        
        //  Look in the table if we have already searched this position before.
        //  We also need to be sure, that the stored search was over the same
        //  nodes as the current search.
        let entry = new Entry(0, 0)
        entry = this.tp_score[[[pos, depth, root], new Entry(-MATE_UPPER, MATE_UPPER)]]
        if (entry.getLower() >= gamma && (!root || this.tp_move[pos] !== null)) {
            return entry.getLower()
        }
        
        if (entry.getUpper() < gamma) {
            return entry.getUpper()
        }
        
        //  Here extensions may be added
        //  Such as 'if in_check: depth += 1'
        //  Generator of moves to search in order.
        //  This allows us to define the moves, but only calculate them if needed.
        function moves() {
            //  First try not moving at all. We only do this if there is at least one major
            //  piece left on the board, since otherwise zugzwangs are too dangerous.
            if (depth > 0 && !root && (pos.board.indexOf("R") >= 0 || pos.board.indexOf("B") >= 0 || pos.board.indexOf("N") >= 0 || pos.board.indexOf("Q") >= 0)) {
                 {TODO: Yield} 
            }
            
            //  For QSearch we have a different kind of null-move, namely we can just stop
            //  and not capture anythign else.
            if (depth == 0) {
                 {TODO: Yield} 
            }
            
            //  Then killer move. We search it twice, but the tp will fix things for us.
            //  Note, we don't have to check for legality, since we've already done it
            //  before. Also note that in QS the killer must be a capture, otherwise we
            //  will be non deterministic.
            let killer = this.tp_move[pos]
            if (killer && (depth > 0 || pos.value(killer) >= QS_LIMIT)) {
                 {TODO: Yield} 
            }
            
            //  Then all the other moves
            for (let move of sortedMoves(pos)) {
                // for val, move in sorted(((pos.value(move), move) for move in pos.gen_moves()), reverse=True):
                //  If depth == 0 we only try moves with high intrinsic score (captures and
                //  promotions). Otherwise we do all moves.
                if (depth > 0 || pos.value(move) >= QS_LIMIT) {
                     {TODO: Yield} 
                }
                
            }
        }
        
        //  Run through the moves, shortcutting when possible
        let best = -MATE_UPPER
        //         listOfMoves = []
        let listOfMoves = moves()
        for (let move of listOfMoves) {
            score = move[1]
            best = Math.max(best, score)
            if (best >= gamma) {
                //  Clear before setting, so we always have a value
                if (this.tp_move.length > TABLE_SIZE) {
                    this.tp_move = []
                }
                
                //  Save the move for pv construction and killer heuristic
                this.tp_move[pos] = move
                break
            }
            
        }
        //  Stalemate checking is a bit tricky: Say we failed low, because
        //  we can't (legally) move and so the (real) score is -infty.
        //  At the next depth we are allowed to just return r, -infty <= r < gamma,
        //  which is normally fine.
        //  However, what if gamma = -10 and we don't have any legal moves?
        //  Then the score is actaully a draw and we should fail high!
        //  Thus, if best < gamma and best < 0 we need to double check what we are doing.
        //  This doesn't prevent sunfish from making a move that results in stalemate,
        //  but only if depth == 1, so that's probably fair enough.
        //  (Btw, at depth 1 we can also mate without realizing.)
        if (best < gamma && best < 0 && depth > 0) {
            check = true
            for (let m of pos.gen_moves()) {
                check = check && is_dead(pos.move(m))
            }
            if (check) {
                in_check = is_dead(pos.nullmove())
                best = in_check ? -MATE_UPPER : 0
            }
            
        }
        
        //  Clear before setting, so we always have a value
        if (this.tp_score.length > TABLE_SIZE) {
            this.tp_score = []
        }
        
        //  Table part 2
        if (best >= gamma) {
            this.tp_score[[pos, depth, root]] = new Entry(best, entry.upper)
        }
        
        if (best < gamma) {
            this.tp_score[[pos, depth, root]] = new Entry(entry.lower, best)
        }
        
        return best
    }
    
    public search(pos: any, history: any = []) {
        let lower: number;
        let upper: number;
        let gamma: number;
        let score: number;
        /** Iterative deepening MTD-bi search */
        this.nodes = 0
        if (DRAW_TEST) {
            this.history =  {TODO: Set} 
            //  print('# Clearing table due to new history')
            this.tp_score = []
        }
        
        //  In finished games, we could potentially go far enough to cause a recursion
        //  limit exception. Hence we bound the ply.
        for (let depth = 1; depth < 1000; depth++) {
            //  The inner loop is a binary search on the score of the position.
            //  Inv: lower <= score <= upper
            //  'while lower != upper' would work, but play tests show a margin of 20 plays
            //  better.
            let [lower, upper] = [-MATE_UPPER, MATE_UPPER]
            while (lower < upper - EVAL_ROUGHNESS) {
                gamma = Math.idiv(lower + upper + 1, 2)
                score = this.bound(pos, gamma, depth)
                if (score >= gamma) {
                    lower = score
                }
                
                if (score < gamma) {
                    upper = score
                }
                
            }
            //  We want to make sure the move to play hasn't been kicked out of the table,
            //  So we make another call that must always fail high and thus produce a move.
            this.bound(pos, lower, depth)
            //  If the game hasn't finished we can retrieve our move from the
            //  transposition table.
             {TODO: Yield} 
        }
    }
    
}

// ##############################################################################
//  User interface
// ##############################################################################
/** 
# Python 2 compatability
if sys.version_info[0] == 2:
    input = raw_input


def parse(c):
    fil, rank = ord(c[0]) - ord('a'), int(c[1]) - 1
    return A1 + fil - 10*rank


def render(i):
    rank, fil = divmod(i - A1, 10)
    return chr(fil + ord('a')) + str(-rank + 1)

def main():
    hist = [Position(initial, 0, (True,True), (True,True), 0, 0)]
    searcher = Searcher()
    while True:
        print_pos(hist[-1])

        if hist[-1].score <= -MATE_LOWER:
            print("You lost")
            break

        # We query the user until she enters a (pseudo) legal move.
        move = None
        while move not in hist[-1].gen_moves():
            match = re.match('([a-h][1-8])'*2, input('Your move: '))
            if match:
                move = parse(match.group(1)), parse(match.group(2))
            else:
                # Inform the user when invalid input (e.g. "help") is entered
                print("Please enter a move like g8f6")
        hist.append(hist[-1].move(move))

        # After our move we rotate the board and print it again.
        # This allows us to see the effect of our move.
        print_pos(hist[-1].rotate())

        if hist[-1].score <= -MATE_LOWER:
            print("You won")
            break

        # Fire up the engine to look for a move.
        start = time.time()
        for _depth, move, score in searcher.search(hist[-1], hist):
            if time.time() - start > 1:
                break

        if score == MATE_UPPER:
            print("Checkmate!")

        # The black player moves from a rotated position, so we have to
        # 'back rotate' the move before printing it.
        print("My move:", render(119-move[0]) + render(119-move[1]))
        hist.append(hist[-1].move(move))

 */
// ######################################################################
//  Arcade Chess
// ######################################################################
class SpriteKind {
    static Cursor = SpriteKind.create()
    static BlackPiece = SpriteKind.create()
    static WhitePiece = SpriteKind.create()
}

controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    
    hover = Pointer
    Pointer.y += -16
    if (hand != Pointer) {
        hand.y += -16
    }
    
})
function setupBoard() {
    
    board = [["BLR", "BLK", "BLB", "BQ ", "BK ", "BRB", "BRK", "BRR"], ["BP1", "BP2", "BP3", "BP4", "BP5", "BP6", "BP7", "BP8"], ["   ", "   ", "   ", "   ", "   ", "   ", "   ", "   "], ["   ", "   ", "   ", "   ", "   ", "   ", "   ", "   "], ["   ", "   ", "   ", "   ", "   ", "   ", "   ", "   "], ["   ", "   ", "   ", "   ", "   ", "   ", "   ", "   "], ["   ", "   ", "   ", "   ", "   ", "   ", "   ", "   "], ["WP1", "WP2", "WP3", "WP4", "WP5", "WP6", "WP7", "WP8"], ["WLR", "WLK", "WLB", "WQ ", "WK ", "WRB", "WRK", "WRR"]]
}

controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    game.splash(getBoardAt(hand))
})
function getBoardAt(sprite: Sprite): string {
    
    location = tiles.locationOfSprite(sprite)
    return board[tiles.locationXY(location, tiles.XY.column)][tiles.locationXY(location, tiles.XY.row)]
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
    if (hand == Pointer) {
        hand = hover
        startX = hover.x
        startY = hover.y
    } else if (1 == isMoveOK(hand)) {
        hand = Pointer
        startX = 0
        startY = 0
    } else {
        music.baDing.play()
    }
    
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    
    hover = Pointer
    Pointer.x += -16
    if (hand != Pointer) {
        hand.x += -16
    }
    
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    
    hover = Pointer
    if (hand.x < 120) {
        Pointer.x += 16
        if (hand != Pointer) {
            hand.x += 16
        }
        
    }
    
})
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.BlackPiece, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    
    if (hand == Pointer) {
        hover = otherSprite
    }
    
})
function createSprites() {
    
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

function isMoveOK(piece: Sprite): number {
    if (piece.kind() == SpriteKind.BlackPiece) {
        if (piece == BKing) {
            
        } else if (piece == BQueen) {
            
        } else if (piece == BLBishop || piece == BRBishop) {
            
        } else if (piece == BLKnight || piece == BRKnight) {
            
        } else if (piece == BLRock || piece == BRRock) {
            
        } else if (piece == B1Pawn || piece == B2Pawn || (piece == B3Pawn || piece == B4Pawn) || (piece == B5Pawn || piece == B6Pawn || (piece == B7Pawn || piece == B8Pawn))) {
            
        }
        
    } else if (piece.kind() == SpriteKind.WhitePiece) {
        if (piece == WKing) {
            
        } else if (piece == WQueen) {
            
        } else if (piece == WLBishop || piece == WRBishop) {
            
        } else if (piece == WLKnight || piece == WRKnight) {
            
        } else if (piece == WLRock || piece == WRRock) {
            
        } else if (piece == W1Pawn || piece == W2Pawn || (piece == W3Pawn || piece == W4Pawn) || (piece == W5Pawn || piece == W6Pawn || (piece == W7Pawn || piece == W8Pawn))) {
            
        }
        
    }
    
    return 0
}

controller.down.onEvent(ControllerButtonEvent.Pressed, function on_down_pressed() {
    
    hover = Pointer
    Pointer.y += 16
    if (hand != Pointer) {
        hand.y += 16
    }
    
})
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.WhitePiece, function on_on_overlap2(sprite: Sprite, otherSprite: Sprite) {
    
    if (hand == Pointer) {
        hover = otherSprite
    }
    
})
let W8Pawn : Sprite = null
let W7Pawn : Sprite = null
let W6Pawn : Sprite = null
let W5Pawn : Sprite = null
let W4Pawn : Sprite = null
let W3Pawn : Sprite = null
let W2Pawn : Sprite = null
let W1Pawn : Sprite = null
let WKing : Sprite = null
let WQueen : Sprite = null
let WRBishop : Sprite = null
let WLBishop : Sprite = null
let WRKnight : Sprite = null
let WLKnight : Sprite = null
let WRRock : Sprite = null
let WLRock : Sprite = null
let B8Pawn : Sprite = null
let B7Pawn : Sprite = null
let B6Pawn : Sprite = null
let B5Pawn : Sprite = null
let B4Pawn : Sprite = null
let B3Pawn : Sprite = null
let B2Pawn : Sprite = null
let B1Pawn : Sprite = null
let BKing : Sprite = null
let BQueen : Sprite = null
let BRBishop : Sprite = null
let BLBishop : Sprite = null
let BRKnight : Sprite = null
let BLKnight : Sprite = null
let BRRock : Sprite = null
let BLRock : Sprite = null
let location : tiles.Location = null
let board : string[][] = []
let startY = 0
let startX = 0
let hover : Sprite = null
let hand : Sprite = null
let Pointer : Sprite = null
tiles.setTilemap(tilemap`
    level_0
`)
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
startX = 0
startY = 0
