module.exports = {
    // Client receiving
    NEW_PLAYER: 4, // also server sending
    HANDSHAKED_INFO: 2, // also server sending
    CHAT: 7, // also server sending
    
    ADD_ENTITY: 6,
    REMOVE_ENTITY: 5,
    UPDATE_ENTITIES: 3,

    // Client sending
    UPDATE_ANGLE: 0,
    UPDATE_DIRECTION: 1
};