"use strict";
exports.__esModule = true;
exports.getMyExpectedPosition = exports.PLAYER_TACTIC_POSITIONS = exports.PLAYER_INITIAL_POSITIONS = exports.MAPPER_ROWS = exports.MAPPER_COLS = void 0;
exports.MAPPER_COLS = 10;
exports.MAPPER_ROWS = 6;
// here we define the initial positions
exports.PLAYER_INITIAL_POSITIONS = {
    1: { Col: 0, Row: 0 },
    2: { Col: 1, Row: 4 },
    3: { Col: 1, Row: 3 },
    4: { Col: 1, Row: 1 },
    5: { Col: 2, Row: 4 },
    6: { Col: 2, Row: 1 },
    7: { Col: 3, Row: 3 },
    8: { Col: 3, Row: 2 },
    9: { Col: 3, Row: 4 },
    10: { Col: 4, Row: 5 },
    11: { Col: 4, Row: 0 }
};
// here we
exports.PLAYER_TACTIC_POSITIONS = {
    DEFENSIVE: {
        2: { Col: 1, Row: 4 },
        3: { Col: 1, Row: 3 },
        4: { Col: 1, Row: 1 },
        5: { Col: 3, Row: 1 },
        6: { Col: 3, Row: 4 },
        7: { Col: 5, Row: 3 },
        8: { Col: 4, Row: 2 },
        9: { Col: 3, Row: 4 },
        10: { Col: 6, Row: 5 },
        11: { Col: 6, Row: 0 }
    },
    NORMAL: {
        2: { Col: 1, Row: 4 },
        3: { Col: 1, Row: 3 },
        4: { Col: 1, Row: 1 },
        5: { Col: 5, Row: 0 },
        6: { Col: 4, Row: 4 },
        7: { Col: 6, Row: 3 },
        8: { Col: 3, Row: 2 },
        9: { Col: 3, Row: 3 },
        10: { Col: 7, Row: 5 },
        11: { Col: 7, Row: 0 }
    },
    OFFENSIVE: {
        2: { Col: 1, Row: 4 },
        3: { Col: 2, Row: 3 },
        4: { Col: 2, Row: 1 },
        5: { Col: 7, Row: 1 },
        6: { Col: 8, Row: 4 },
        7: { Col: 8, Row: 2 },
        8: { Col: 5, Row: 2 },
        9: { Col: 4, Row: 3 },
        10: { Col: 7, Row: 5 },
        11: { Col: 7, Row: 0 }
    }
};
function getMyExpectedPosition(reader, mapper, myNumber) {
    var ballRegion = mapper.getRegionFromPoint(reader.getBall().getPosition());
    var ballCol = ballRegion.getCol();
    var ballHolder = reader.getBall().getHolder();
    var teamState = "OFFENSIVE";
    if (ballCol < 4 || (ballHolder !== undefined && ballHolder.getTeamSide() !== reader.getMyTeam().getSide())) {
        teamState = "DEFENSIVE";
    }
    else if (ballCol < 6) {
        teamState = "NORMAL";
    }
    var expectedRegion = mapper.getRegion(exports.PLAYER_TACTIC_POSITIONS[teamState][myNumber].Col, exports.PLAYER_TACTIC_POSITIONS[teamState][myNumber].Row);
    return expectedRegion.getCenter();
}
exports.getMyExpectedPosition = getMyExpectedPosition;
