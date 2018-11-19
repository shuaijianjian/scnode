
const CHANNEL_INIT = 1;
const CHANNEL_OPENED = 2;
const CHANNEL_CLOSED = 3;
const CHANNEL_UPDATEBALANCEPROOF = 4;
const CHANNEL_SETTLED = 5;
const CHANNEL_UNLOCKFINISHED = 6;

const CLOSE_FORCE = 1;
const CLOSE_COOPERATIVE = 2;

const BET_INIT = 1;
const BET_LOCK_ONE = 2;
const BET_LOCK_TWO = 3;
const BET_START = 4;
const BET_PREIMAGE = 5;
const BET_DIRECT_TRANSFER = 6;
const BET_DIRECT_TRANSFER_TWO = 7;
const BET_FINISH = 8;



module.exports = {
  CHANNEL_INIT,
  CHANNEL_OPENED,
  CHANNEL_CLOSED,
  CHANNEL_UPDATEBALANCEPROOF,
  CHANNEL_SETTLED,
  CHANNEL_UNLOCKFINISHED,

  CLOSE_FORCE,
  CLOSE_COOPERATIVE,

  BET_INIT,
  BET_LOCK_ONE,
  BET_LOCK_TWO,
  BET_START,
  BET_PREIMAGE,
  BET_DIRECT_TRANSFER,
  BET_DIRECT_TRANSFER_TWO,
  BET_FINISH
};